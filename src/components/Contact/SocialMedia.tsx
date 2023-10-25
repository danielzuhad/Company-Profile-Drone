import "./SocialMedia.css";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

export const SocialMedia = () => {
  const socialMedias = [
    { icon: AiOutlineInstagram, desc: "Instagram" },
    { icon: AiOutlineLinkedin, desc: "Linkedln" },
    { icon: FiTwitter, desc: "Twitter" },
  ];

  return (
    <>
      <div className="sosmed-container">
        <h3 style={{ fontSize: "2em" }}>Contact Us For More</h3>
        <div className="overview-feature">
          {socialMedias.map((sosmed) => (
            <div className="overview-items" key={sosmed.desc}>
              <div style={{ fontSize: "7em" }}>{<sosmed.icon />}</div>
              <p style={{ fontSize: "1.2em", textAlign: "center" }}>
                {sosmed.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
