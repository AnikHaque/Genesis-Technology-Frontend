import HomeAboutRoot from "../../Components/About/HomeAboutRoot";
import HomeMeetTheTeam from "../../Components/About/HomeMeetTeam";
import Choose from "../../Components/Choose/Choose";
import HomeServices from "../../Components/Services/HomeServices";

const Home = () => {
  return (
    <div>
      <HomeAboutRoot></HomeAboutRoot>
      <HomeServices></HomeServices>
      <HomeMeetTheTeam></HomeMeetTheTeam>
      <Choose></Choose>
    </div>
  );
};

export default Home;
