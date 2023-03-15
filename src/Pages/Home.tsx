import MaxWrapper from "../components/MaxWrapper";
import SecondaryWrapper from "../components/SecondaryWrapper";
import ModernArt from "../templates/ModernArt";
import YourDay from "../templates/YourDay";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <MaxWrapper>
        <SecondaryWrapper>
          <ModernArt />
          <YourDay />
          <Footer color="art_black" textColor="art_white" ourLocation={false} />
        </SecondaryWrapper>
      </MaxWrapper>
    </>
  );
};
export default Home;
