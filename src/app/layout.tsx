import { Providers } from './providers';
import TheHeader from './components/TheHeader';
import './globals.css';
import { Divider } from '@nextui-org/react';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full p-10 xs:p-5">
        <TheHeader />
        <Divider className="my-6" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
