/* eslint-disable @next/next/no-img-element */
'use client'

import { type FC, Suspense, useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

import { getGaId, getVkPixelId, getYmCounterId, isBrowser, trackPageHit } from '@/shared'

/** Изолированный слушатель смены маршрута внутри Suspense
 * Фиксирует виртуальные переходы страниц (SPA Virtual Hits) во всех системах */
const AnalyticsRouteTracker: FC = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const previousUrlRef = useRef<string | undefined>(undefined)

  useEffect(() => {
    if (!pathname) return

    const search = searchParams?.toString()
    const relativeUrl = search ? `${pathname}?${search}` : pathname
    const origin = isBrowser() ? window.location.origin : ''
    const fullUrl = origin ? `${origin}${relativeUrl}` : relativeUrl

    trackPageHit(fullUrl, {
      title: typeof document !== 'undefined' ? document.title : undefined,
      referer: previousUrlRef.current,
    })

    previousUrlRef.current = fullUrl
  }, [pathname, searchParams])

  return null
}

export const AnalyticsProvider: FC = () => {
  const ymCounterId = getYmCounterId()
  const gaId = getGaId()
  const vkPixelId = getVkPixelId()

  return (
    <>
      {/* 1. Яндекс Метрика (afterInteractive) */}
      {ymCounterId && (
        <>
          <Script
            id='yandex-metrika-init'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=${ymCounterId}", "ym");

                ym(${ymCounterId}, "init", {
                  defer: true,
                  clickmap: true,
                  trackLinks: true,
                  accurateTrackBounce: true,
                  webvisor: true,
                  ecommerce: "dataLayer"
                });
              `,
            }}
          />

          <noscript>
            <div>
              <img
                src={`https://mc.yandex.ru/watch/${ymCounterId}`}
                style={{ position: 'absolute', left: '-9999px' }}
                alt=''
              />
            </div>
          </noscript>
        </>
      )}

      {/* 2. Google Analytics */}
      {gaId && (
        <>
          <Script
            id='google-analytics-tag'
            strategy='lazyOnload'
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script
            id='google-analytics-init'
            strategy='lazyOnload'
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { page_path: window.location.pathname });
              `,
            }}
          />
        </>
      )}

      {/* 3. Пиксель ВКонтакте */}
      {vkPixelId && (
        <>
          <Script
            id='vk-pixel-init'
            strategy='lazyOnload'
            dangerouslySetInnerHTML={{
              __html: `
                !function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?169",t.onload=function(){VK.Retargeting.Init("${vkPixelId}"),VK.Retargeting.Hit()},document.head.appendChild(t)}();
              `,
            }}
          />

          <noscript>
            <div>
              <img
                src={`https://vk.com/rtrg?p=${vkPixelId}`}
                style={{ position: 'absolute', left: '-9999px' }}
                alt=''
              />
            </div>
          </noscript>
        </>
      )}

      {/* Единый трекер переходов по SPA-маршрутам */}
      {(ymCounterId || gaId || vkPixelId) && (
        <Suspense fallback={null}>
          <AnalyticsRouteTracker />
        </Suspense>
      )}
    </>
  )
}
