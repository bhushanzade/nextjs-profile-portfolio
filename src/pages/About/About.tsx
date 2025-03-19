import BiographySection from "@components/about/BiographySection";
import CertificationSection from "@components/about/CertificationSection";
import EducationSection from "@components/about/EducationSection";
import ExperienceSection from "@components/about/ExperienceSection";
import SkillSection from "@components/about/SkillSection";

export default function AboutPage() {
  return (
    <>
      <section className="relative px-20 py-20 overflow-hidden">
        <BiographySection />
      </section>
      <section className="px-20 py-20 relative overflow-hidden">
        <SkillSection />
      </section>
      <section className="relative overflow-hidden">
        <ExperienceSection />
      </section>
      <section className="relative overflow-hidden">
        <EducationSection />
      </section>
      <section className="relative overflow-hidden">
        <CertificationSection />
      </section>
    </>
  )
}