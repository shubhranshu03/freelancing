import AboutSection from "./Component/About";
import Home from "./Component/Home";
import ImageReveal2 from "./Component/ImageReveal2";
import Services from "./Component/Services";
import ScrollTextSection from "./Component/ScrollTextSection";
import FramerHorizontalScroll from "./Component/FramerHorizontalScroll";
import BookCallModal from "./Component/BookCallModal";
import Footer from "./Component/Footer";

export default function Page() {
  return (
    <main style={{ margin: 0, padding: 0 }}>
      <Home />
      {/* All sections below have solid black bg to cover the fixed canvas */}
      <div style={{ position: 'relative', zIndex: 10, background: '#000000' }}>
        <AboutSection />
        <section style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <ImageReveal2 />
        </section>
        <Services />
        <ScrollTextSection />
        <FramerHorizontalScroll />
        <Footer />
      </div>
      <BookCallModal />
    </main>
  );
}
