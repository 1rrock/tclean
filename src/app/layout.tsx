import type { Metadata } from "next";
import "./globals.css";

const siteName = "믿고 맡기는 청소";
const siteUrl = "https://mclean.co.kr"; // 실제 도메인으로 교체 필요
const defaultDesc = "하루 한 집만 작업하는 프리미엄 입주청소 – 이사 전·후, 거주, 인테리어 후까지 꼼꼼하게.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName}`,
    template: `%s | ${siteName}`,
  },
  description: defaultDesc,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteName,
    description: defaultDesc,
    siteName,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: siteName }],
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDesc,
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ko">
      <head>
        {gtmId && (
          <script dangerouslySetInnerHTML={{ __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}} />
        )}
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
            <script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
              gtag('config', '${gaId}');
            `}} />
          </>
        )}
      </head>
      <body className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-gray-900">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{display:'none',visibility:'hidden'}}
            ></iframe>
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
