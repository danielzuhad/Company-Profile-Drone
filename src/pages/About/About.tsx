import { Link } from "react-router-dom";
import "./About.css";
import { TbDrone } from "react-icons/tb";

export default function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-deskripsi">
          <h2 className="about-title">Sky Tech</h2>
          <p className="about-text">
            Sky Tech adalah inovator terkemuka dalam industri teknologi udara
            yang menghadirkan solusi canggih menggunakan teknologi drone
            terdepan. Dengan fokus pada pemetaan udara, fotografi dan
            videografi, survei teknis, serta layanan pengiriman logistik, Sky
            Tech memungkinkan klien untuk mendapatkan wawasan yang mendalam dan
            efisien dari berbagai lingkungan dan proyek. Didukung oleh tim ahli
            dan armada drone terbaik, Sky Tech bertekad untuk memberikan solusi
            yang dapat diandalkan dan inovatif dalam setiap tugasnya.
          </p>
          <Link to="/contact" className="about-link">
            Contact Us ?
          </Link>
        </div>

        <div className="icon" style={{ fontSize: "25em" }}>
          <TbDrone />
        </div>
      </div>
    </>
  );
}
