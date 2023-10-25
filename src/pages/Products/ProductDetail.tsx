import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import droneData from "../../dummyData";

export const ProductDetail = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Data drone tidak ditemukan</div>;
  }

  const selectedDrone = droneData.find((drone) => drone.id === parseInt(id));
  return (
    <>
      <div className="detail-container">
        <div className="image-container">
          <img src={selectedDrone?.image} className="detail-image" alt="" />
        </div>

        <div className="drone-data">
          <h2 className="drone-title">{selectedDrone?.name}</h2>

          <p className="drone-desc">{selectedDrone?.description}</p>

          <div>
            <p>Specification :</p>
            <br />
            <ul>
              {selectedDrone?.specifications.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          </div>

          <button className="detail-button">Buy Now</button>
        </div>
      </div>
    </>
  );
};
