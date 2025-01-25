import './globals.css';
import Header from '../component/header';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-blue-600'>
        <Header/>
        {children}
      </body>
    </html>
  );
}
