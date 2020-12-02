import Head from "next/head"
import { FC } from "react"
import config from "./config"

export interface LayoutProps {
  title?: string
  description?: string
  twitter?: string
  currentURL?: string
  previewImage?: string
  siteName?: string
}

const Layout: FC<LayoutProps> = ({
  children,
  title,
  description = config.description,
  twitter = config.twitter,
  currentURL = config.url,
  previewImage = config.previewImage,
  ...props
}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{title || config.title}</title>
        {description && <meta name="description" content={description} />}
        {title && <meta property="og:title" content={title} key="ogtitle" />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        {twitter && (
          <meta name="twitter:creator" content={twitter} key="twhandle" />
        )}

        {/* Open Graph */}
        {currentURL && (
          <meta property="og:url" content={currentURL} key="ogurl" />
        )}
        {previewImage && (
          <meta
            property="og:image"
            content={
              previewImage.includes("http")
                ? previewImage
                : `${currentURL}${previewImage}`
            }
            key="ogimage"
          />
        )}
        {
          <meta
            property="og:site_name"
            content={config.title}
            key="ogsitename"
          />
        }
        {title && <meta property="og:title" content={title} key="ogtitle" />}
        {description && (
          <meta property="og:description" content={description} key="ogdesc" />
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>{children}</section>
    </>
  )
}

export default Layout
