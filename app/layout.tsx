import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        {children}

        <Script id="not-included" strategy="beforeInteractive">
          {
            `window.__NOT_INCLUDED_ENV = ${JSON.stringify({
              foo: 'bar'
            })}`
          }
        </Script>
        <Script id="included">
          {
            `window.__INCLUDED_ENV = ${JSON.stringify({
              foo: 'bar'
            })}`
          }
        </Script>
      </body>
    </html>
  )
}
