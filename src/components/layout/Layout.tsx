import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-warm">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      {/* Music player will be added here - sticky at bottom */}
    </div>
  );
};

export default Layout;
