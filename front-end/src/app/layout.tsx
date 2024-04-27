import NextUIWrapper from './NextUIProvider';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { AppProvider } from '@/context/app-context';
import MainNavbar from '@/components/organisms/main-navbar/main-navbar';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body>
        <AppProvider>
          <NextUIWrapper>
            <main className={inter.className}>
              <MainNavbar />

              {children}
            </main>
          </NextUIWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
