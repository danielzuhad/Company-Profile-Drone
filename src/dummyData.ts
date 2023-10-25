import droneSatu from "../src/assets/drone1-thumbnail.jpg";
import droneDua from "../src/assets/drone2-thumbnail.jpg";
import droneTiga from "../src/assets/drone3-thumbnail.jpg";
import droneEmpat from "../src/assets/drone4-thumbnail.jpg";

export const droneData = [
  {
    id: 1,
    name: "SkyRanger X1",
    description:
      "Drone kelas profesional dengan kemampuan terbang tinggi dan kamera canggih.",
    specifications: [
      "Rentang Terbang: 10 km",
      "Kamera: 4K Ultra HD",
      "Waktu Terbang Maksimal: 45 menit",
    ],
    image: droneSatu,
  },
  {
    id: 2,
    name: "SkyGlider S2",
    description:
      "Drone lipat ringan dengan fokus pada portabilitas dan kemampuan terbang yang stabil.",
    specifications: [
      "Rentang Terbang: 5 km",
      "Kamera: 2.7K HD",
      "Waktu Terbang Maksimal: 30 menit",
    ],
    image: droneDua,
  },
  {
    id: 3,
    name: "SkyCruiser C3 Pro",
    description:
      "Drone serba guna dengan kemampuan pengiriman payload dan daya tahan baterai yang kuat.",
    specifications: [
      "Rentang Terbang: 15 km",
      "Kapasitas Muatan: 2 kg",
      "Waktu Terbang Maksimal: 60 menit",
    ],
    image: droneEmpat,
  },
  {
    id: 4,
    name: "SkyScout S1",
    description:
      "Drone mini yang cocok untuk pemula dan penggunaan dalam ruangan.",
    specifications: [
      "Rentang Terbang: 1 km",
      "Kamera: 1080p HD",
      "Waktu Terbang Maksimal: 15 menit",
    ],
    image: droneTiga,
  },
];

export default droneData;
