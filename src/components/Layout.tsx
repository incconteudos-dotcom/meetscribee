import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AmbientBlobs from "./AmbientBlobs";
import ScrollReveal from "./ScrollReveal";

const Layout = () => (
  <div className="min-h-screen flex flex-col" style={{ background: 'hsl(var(--ms-bg-deep))' }}>
    <AmbientBlobs />
    <Navbar />
    <main className="flex-1 relative z-[1] pt-16">
      <Outlet />
    </main>
    <Footer />
    <ScrollReveal />
  </div>
);

export default Layout;
