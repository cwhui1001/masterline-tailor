import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFAB from './WhatsAppFAB';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

export default function Layout({ children, pageTitle = 'Masterline Tailor' }: LayoutProps) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
      <Head>
        <title>{pageTitle} | Bespoke Menswear</title>
        <meta name="description" content="Premium bespoke tailoring for the modern gentleman." />
      </Head>
      <Header />
      <main className={`flex-grow ${isHome ? '' : 'pt-24'}`}>
        {children}
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
