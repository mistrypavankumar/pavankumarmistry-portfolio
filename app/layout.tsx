import Loader from "./_components/Loader/Loader";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary font-lato">
        <Loader />
        {children}
      </body>
    </html>
  );
}
