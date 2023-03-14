import Footer from "./components/Footer";
import ModernArt from "./templates/ModernArt";
import YourDay from "./templates/YourDay";
import MaxWrapper from "./components/MaxWrapper";
import SecondaryWrapper from "./components/SecondaryWrapper";

function App() {
  return (
    <div className="App">
      <MaxWrapper>
        <SecondaryWrapper>
          <ModernArt />
          <YourDay />
          <Footer />
        </SecondaryWrapper>
      </MaxWrapper>
    </div>
  );
}

export default App;
