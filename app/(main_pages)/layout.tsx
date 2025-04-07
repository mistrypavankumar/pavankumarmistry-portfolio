import Header from "../_components/header/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Pavan's Portfolio</title>
      </head>

      <body className="bg-primary font-lato">
        <Header />
        {children}
      </body>
    </html>
  );
}
