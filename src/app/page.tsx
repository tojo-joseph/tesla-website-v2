import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-midlife-bg">
      <Navbar />
      <main>
        <Hero />
        {/* Add sections for navbar links */}
        <section
          id="models"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-midlife-text mb-4">
              Models Section
            </h2>
            <p className="text-midlife-light-gray">
              Tesla vehicle models will be displayed here
            </p>
          </div>
        </section>

        <section
          id="solar"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-midlife-text mb-4">
              Solar Section
            </h2>
            <p className="text-midlife-light-gray">
              Tesla solar products will be displayed here
            </p>
          </div>
        </section>

        <section
          id="charging"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-midlife-text mb-4">
              Charging Section
            </h2>
            <p className="text-midlife-light-gray">
              Tesla charging solutions will be displayed here
            </p>
          </div>
        </section>

        <section
          id="discover"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-midlife-text mb-4">
              Discover Section
            </h2>
            <p className="text-midlife-light-gray">
              Tesla discoveries and innovations will be displayed here
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
