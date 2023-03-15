import Map from "../components/Map";
import OurLocation from "../components/OurLocation";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <>
      <Link to="/">
        <PrimaryBtn
          title="Back to Home"
          path="/icon-arrow-left.svg"
          ourLocation={true}
          reverse={true}
        />
      </Link>
      <Map />
      <OurLocation />
      <Footer color="art_gold" textColor="bg-art_black" ourLocation={true} />
    </>
  );
};
export default Location;
