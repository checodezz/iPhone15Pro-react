import Footer from "../components/Footer";
import Header from "../components/Header";

const Features = () => {
  const iphone15Pro = {
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
    price: "Starting at ₹99900.00",
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

  /*  const customValues = {
    name: "Product Name",
    releaseDate: "Release Date",
    displaySize: "Display Size",
    displayType: "Display Type",
    resolution: "Resolution",
    processor: "Processor",
    ram: "RAM",
    storage: "Storage",
    rearCamera: "Rear Camera",
    frontCamera: "Front Camera",
    batteryLife: "Battery Life",
    operatingSystem: "Operating System",
    price: "Price",
    colors: "Colors",
    specialFeatures: "Special Features",
  }; */

  return (
    <>
      <Header />
      <main className=" bg-black text-light ">
        <div className="container ">
          <h2 className="display-2 m-0">Features</h2>
          <ul className="list-group py-4">
            {
              /* 
              Object.entries(iphone15Pro).map(([key, value]) => (
              <li className="list-group-item bg-black text-light" key={key}>
                {customValues[key]}: {value}
              </li>
               ))
               */
                 /* Object.entries(iphone15Pro).map(([key, value]) => <li className="list-group-item" key={key}>{key} : {value}</li>) */
            }
            <li className="list-group-item bg-black text-light">
              <strong>Name: </strong>
              {iphone15Pro.name}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Release Date: </strong>
              {iphone15Pro.releaseDate}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Display Size: </strong>
              {iphone15Pro.displaySize}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Display Type: </strong>
              {iphone15Pro.displayType}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Resolution: </strong>
              {iphone15Pro.resolution}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Processor: </strong>
              {iphone15Pro.processor}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Ram: </strong>
              {iphone15Pro.ram}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Storage: </strong>
              {iphone15Pro.storage}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Rear Camera: </strong>
              {iphone15Pro.rearCamera}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Front Camera: </strong>
              {iphone15Pro.frontCamera}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Battery Life: </strong>
              {iphone15Pro.batteryLife}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Operating System: </strong>
              {iphone15Pro.operatingSystem}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Price: </strong>
              {iphone15Pro.price}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Colors: </strong>
              {iphone15Pro.colors.join(', ')}
            </li>
            <li className="list-group-item bg-black text-light">
              <strong>Special Features: </strong>
              {iphone15Pro.specialFeatures.join(', ')}
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Features;
