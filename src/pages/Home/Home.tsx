import { Overview } from "../../components/Home/Overview/Overview";
import { HeroSection } from "../../components/Home/Hero/HeroSection";
import "./home.css";
import { SocialMedia } from "../../components/Contact/SocialMedia";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Overview />
      <SocialMedia />
    </>
  );
}
