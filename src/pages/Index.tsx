import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Jason Durana Lomibao | Customer Service & Technical Support Specialist</title>
        <meta
          name="description"
          content="Experienced professional in customer support, technical service, and sales across travel, appliance, technology, and renewable energy industries. Based in Marikina City, Philippines."
        />
        <meta name="keywords" content="Jason Lomibao, customer service, technical support, sales, CSR, travel industry, Philippines" />
        <link rel="canonical" href="https://jasonlomibao.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;