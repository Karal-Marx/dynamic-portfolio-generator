// Import all Template 1 section components
import HeroSection1 from "../portfolioComponents/templateOneComponents/HeroSection";
import AboutMe1 from "../portfolioComponents/templateOneComponents/AboutMe";
import Skills1 from "../portfolioComponents/templateOneComponents/Skills";
import Services1 from "../portfolioComponents/templateOneComponents/Services";
import Portfolio1 from "../portfolioComponents/templateOneComponents/Portfolio";
import Testimonials1 from "../portfolioComponents/templateOneComponents/Testimonials";
import Blog1 from "../portfolioComponents/templateOneComponents/Blog";
import Contact1 from "../portfolioComponents/templateOneComponents/Contact";
import Footer1 from "../portfolioComponents/templateOneComponents/Footer";

// Import all Template 2 section components
import HeroSection2 from "../portfolioComponents/templateTwoComponents/HeroSection";
import AboutMe2 from "../portfolioComponents/templateTwoComponents/AboutMe";
import Skills2 from "../portfolioComponents/templateTwoComponents/Skills";
import Services2 from "../portfolioComponents/templateTwoComponents/Services";
import Portfolio2 from "../portfolioComponents/templateTwoComponents/Portfolio";
import Testimonials2 from "../portfolioComponents/templateTwoComponents/Testimonials";
import Blog2 from "../portfolioComponents/templateTwoComponents/Blog";
import Contact2 from "../portfolioComponents/templateTwoComponents/Contact";
import Footer2 from "../portfolioComponents/templateTwoComponents/Footer";

export default function PortfolioWithTemplate({ formData, templateOption }) {
  if (!formData) return <div>No Data Provided</div>;

  // Use Template 1 if templateOption is 'template1', otherwise Template 2
  const isTemplate1 = templateOption === "template1";

  // Dynamically choose all section components
  const HeroSection = isTemplate1 ? HeroSection1 : HeroSection2;
  const AboutMe = isTemplate1 ? AboutMe1 : AboutMe2;
  const Skills = isTemplate1 ? Skills1 : Skills2;
  const Services = isTemplate1 ? Services1 : Services2;
  const Portfolio = isTemplate1 ? Portfolio1 : Portfolio2;
  const Testimonials = isTemplate1 ? Testimonials1 : Testimonials2;
  const Blog = isTemplate1 ? Blog1 : Blog2;
  const Contact = isTemplate1 ? Contact1 : Contact2;
  const Footer = isTemplate1 ? Footer1 : Footer2;

  return (
    <div>
      <HeroSection data={formData.hero} />
      <AboutMe data={formData.about} />
      <Skills data={formData.skills} />
      <Services data={formData.services} />
      <Portfolio data={formData.portfolio} />
      <Testimonials data={formData.testimonials} />
      <Blog data={formData.blog} />
      <Contact data={formData.contact} />
      <Footer />
    </div>
  );
}
