import "./HeroSection.css";
import wallpaper from "../../../assets/wallpaper.jpeg";

export const HeroSection = () => {
  return (
    <>
      <div
        className="hero-container"
        style={{ backgroundImage: `url(${wallpaper})` }}
      >
        <div className="hero-content">
          <h1>Revolutionizing the Skies, One Drone at a Time.</h1>

          <button className="button-home">Learn More</button>
        </div>
      </div>
    </>
  );
};
