import AboutSection from "./Component/About";
import Home from "./Component/Home";
import ImageReveal2 from "./Component/ImageReveal2";
import Services from "./Component/Services";
import ScrollTextSection from "./Component/ScrollTextSection";
import FramerHorizontalScroll from "./Component/FramerHorizontalScroll";
import BookCallModal from "./Component/BookCallModal";
import Footer from "./Component/Footer";
import WebFeatures from "./Component/WebFeatures";

export default function Page() {
  return (
    <main style={{ margin: 0, padding: 0, width: '100%', overflowX: 'hidden', boxSizing: 'border-box' }}>
      <Home />
      {/* All sections below have solid black bg to cover the fixed canvas */}
      <div style={{ position: 'relative', zIndex: 10, background: '#000000', width: '100%', overflowX: 'hidden', boxSizing: 'border-box' }}>
        <AboutSection />
        <section style={{ paddingTop: 'clamp(16px, 3vw, 40px)', paddingBottom: 'clamp(16px, 3vw, 40px)' }}>
          <ImageReveal2 />
        </section>
        <Services />
        <WebFeatures />
        <ScrollTextSection />
        <FramerHorizontalScroll />
        <Footer />
      </div>
      <BookCallModal />
    </main>
  );
}
