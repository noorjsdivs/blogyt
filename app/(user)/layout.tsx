import Banner from "../../components/Banner";
import Enquiry from "../../components/Enquiry";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-bodyColor font-bodyFont text-white px-4">
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <Header />
          {/* Banner */}
          <Banner />
          {children}
          <Enquiry />
          <Footer />
        </div>
      </body>
    </html>
  );
}
