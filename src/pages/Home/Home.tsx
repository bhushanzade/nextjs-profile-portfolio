import RecentWorkSection from "@components/Home/RecentWorkSection";
import HomeHeroSection from "@components/Home/HomeHeroSection";
import RecentProjectSection from "@components/Home/RecentProjectSection";

export default function HomePage() {
  return (
    <div className="relative bg-hero-pattern">
      <div className="z-50">
        <section className="p-5 md:p-20">
          <div className="container mx-auto">
            <HomeHeroSection />
          </div>
        </section>

        <section className="p-5 md:p-20">
          <div className="container mx-auto">
            <RecentWorkSection />
          </div>
        </section>

        <section className="p-5 md:p-20">
          <div className="container mx-auto">
            <RecentProjectSection />
          </div>
        </section>
      </div>
    </div>
  );
}