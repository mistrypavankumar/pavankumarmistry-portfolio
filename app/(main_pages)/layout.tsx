import Header from "@/app/_components/header/Header";
import Footer from "../_components/footer/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Pavan&apos;s Portfolio</title>
      </head>
      <body className="bg-primary font-lato">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
