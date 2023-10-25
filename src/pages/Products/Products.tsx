import { Card } from "../../components/Card/Card";
import droneData from "../../dummyData";
import "./Product.css";

export default function Products() {
  return (
    <>
      <div className="product-container">
        <h3 style={{ fontSize: "3em" }}>Our Products</h3>

        <div className="product-drone">
          {droneData.map((drone) => (
            <Card
              id={drone.id}
              key={drone.id}
              imgSrc={drone.image}
              title={drone.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
