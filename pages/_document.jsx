import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const title = 'BOSA Analytics — Consulting & Business Transformation';
  const description = 'Transforming Data. Empowering Decisions. Driving Economies.';
  const keywords = 'consulting, data analytics, business intelligence, strategy, industrialization, agribusiness, international trade, project management';
  const ogImage = '/og-image.svg';
  return (
    <Html lang="en">
      <Head>
        {/* Favicons generated set */}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/assets/favicon_io/site.webmanifest" />
        <meta name="theme-color" content="#095786" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}


