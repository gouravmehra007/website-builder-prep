import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AudioPlayer from "@/components/AudioPlayer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-warm">
      <Header />
      <main className="flex-1 pb-20">
        {children}
      </main>
      <Footer />
      <AudioPlayer />
    </div>
  );
};

export default Layout;
