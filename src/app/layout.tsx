import { Providers } from './providers';
import TheHeader from './components/TheHeader';
import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TheHeader />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
