import Footer from "../components/Footer";
import Header from "../components/Header";

const Specifications = () => {
  const iphone15ProSpecifications = {
    name: "iPhone 15 Pro",
    releaseDate: "September 12, 2023",
    displaySize: "6.1 inches",
    displayType: "Super Retina XDR OLED",
    resolution: "2532 x 1170 pixels",
    processor: "A17 Pro Bionic chip",
    ram: "8GB",
    storage: "128GB, 256GB, 512GB, 1TB",
    rearCamera: "48MP Main camera, 2x Telephoto camera, Ultra Wide camera",
    frontCamera: "12MP TrueDepth camera",
    batteryLife: "Up to 28 hours video playback",
    operatingSystem: "iOS 17",
    price: "Starting at ₹99,900.00",
    colors: [
      "Black Titanium",
      "Blue Titanium",
      "White Titanium",
      "Natural Titanium",
    ],
    specialFeatures: [
      "120 Hz Refresh Rate",
      "Action Button",
      "Silent Mode",
      "Dynamic Island",
      "USB-C Charger",
    ],
  };

  return (
    <>
      <Header />
      <main className="bg-black text-light">
        <div className="container">
          <h2 className="display-2 m-0">Specifications</h2>
          <ul className="list-group py-4">
            <li className="list-group-item bg-black text-light">
              <strong>Name: </strong>{iphone15ProSpecifications.name}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Release Date: </strong>{iphone15ProSpecifications.releaseDate}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Display Size: </strong>{iphone15ProSpecifications.displaySize}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Display Type: </strong>{iphone15ProSpecifications.displayType}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Resolution: </strong>{iphone15ProSpecifications.resolution}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Processor: </strong>{iphone15ProSpecifications.processor}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Ram: </strong>{iphone15ProSpecifications.ram}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Storage: </strong>{iphone15ProSpecifications.storage}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Rear Camera: </strong>{iphone15ProSpecifications.rearCamera}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Front Camera: </strong>{iphone15ProSpecifications.frontCamera}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Battery Life: </strong>{iphone15ProSpecifications.batteryLife}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Operating System: </strong>{iphone15ProSpecifications.operatingSystem}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Price: </strong>{iphone15ProSpecifications.price}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Colors: </strong>{iphone15ProSpecifications.colors.join(", ")}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Special Features: </strong>{iphone15ProSpecifications.specialFeatures.join(", ")}
            </li>
          </ul>
          <p className="m-0 pb-4">Price in India (as of 30th October 2023): Rs. 1,27,990</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Specifications;
