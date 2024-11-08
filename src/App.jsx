

import AboutUsHome from "./components/aboutUsHome";
import Advantage from "./components/advantage";
import CosmosXVideos from "./components/campusVideos";
import ContactUs from "./components/contactUs";
// import Features from "./components/Features";
import GetinTouch from "./components/GetinTouch";
import Header from "./components/Header";
import Partners from "./components/parnetrs";
import Services from "./components/Projects";
// import Solutions from "./components/Solutions";
// import Transfer from "./components/Transfer";

const App = () => {
  return (
    <>
      <Header />
      <AboutUsHome/>
      {/* <Transfer /> */}
      {/* <Features/> */}
      <Services/>
      <Advantage/>
      <GetinTouch/>
      <CosmosXVideos/>
      <Partners/>
      <ContactUs/>
      {/* <Solutions/> */}
    </>
  );
};

export default App;
