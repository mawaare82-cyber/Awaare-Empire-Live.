export const metadata = {
  title: 'Awaare Empire',
  description: 'Menu-ga casriga ah ee Awaare Empire',
}

export default function RootLayout({ children }) {
  return (
    <html lang="so">
      <body className="bg-gray-50 text-gray-900">
        <main>{children}</main>
      </body>
    </html>
  );
}
