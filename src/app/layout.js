import "./globals.css";
import "./projects/projects.css"
import NavbarUi from '@/components/navbar_ui/navbar_ui'
import Script from "next/script";

export const metadata = {
  metadataBase: new URL('https://karthikshetty.info'),
  title: "Karthik Shetty | Full Stack Developer & Web Development Portfolio",
  description: "Professional portfolio of Karthik Shetty, experienced Full Stack Developer specializing in Next.js, React, Angular, Java, MySQL, Git, HTML, CSS, JavaScript, TypeScript and modern web development. View my projects, skills, and development experience.",
  keywords: "Karthik Shetty, full stack developer, web developer, portfolio, React developer, Next.js developer, JavaScript engineer, frontend development, backend development, responsive web design, Next.js, React, Angular, Java, MySQL, Git, HTML, CSS, JavaScript, TypeScript",
  openGraph: {
    title: "Karthik Shetty | Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer specializing in creating modern, responsive web applications with modern web development",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Karthik Shetty Portfolio",
    images: [
      {
        url: "/images/sharing/portfolio-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Karthik Shetty - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik Shetty | Full Stack Developer",
    description: "Check out my portfolio showcasing web development projects and full stack expertise",
    creator: "@karthikshettyyy",
    images: ["/images/sharing/portfolio-og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      {
        url: '/icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      }
    ],
    apple: [
      {
        url: '/icons/apple-touch-icon.png',
        sizes: '180x180'
      }
    ],
    shortcut: '/icons/favicon-16x16.png'
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9J1RVTSWHQ" />
        <Script id='google-analytics' strategy='afterInteractive'>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-9J1RVTSWHQ');
        `}</Script> */}
      </head>
      <body>
        <NavbarUi />
        {children}
      </body>
    </html>
  );
}
