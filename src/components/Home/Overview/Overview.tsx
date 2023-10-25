import "./Overview.css";
import { AiOutlineCamera } from "react-icons/ai";
import { BsBatteryCharging } from "react-icons/bs";
import { PiFlyingSaucer } from "react-icons/pi";
import droneData from "../../../dummyData";
import { Card } from "../../Card/Card";

export const Overview = () => {
  const features = [
    { icon: AiOutlineCamera, desc: "High Quality Camera" },
    { icon: BsBatteryCharging, desc: "Super Camera" },
    { icon: PiFlyingSaucer, desc: "Fly Smoother" },
  ];

  return (
    <>
      <div className="overview-container">
        <h3 style={{ marginTop: "4em", fontSize: "2em" }}>See Our Features</h3>
        <div className="overview-feature">
          {features.map((feature) => (
            <div className="overview-items" key={feature.desc}>
              <div style={{ fontSize: "7em" }}>{<feature.icon />}</div>
              <p style={{ fontSize: "1.2em", textAlign: "center" }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="overview-container-card">
          <div className="overview-card-container">
            {droneData.slice(0, 2).map((drone) => (
              <Card
                id={drone.id}
                imgSrc={drone.image}
                title={drone.name}
                key={drone.id}
              />
            ))}
          </div>

          <div className="overview-text-button ">
            <h3 style={{ fontSize: "2em", textAlign: "center" }}>
              Click here For See All Products
            </h3>

            <button className="button-card-overview">Click Me !</button>
          </div>
        </div>
      </div>
    </>
  );
};
