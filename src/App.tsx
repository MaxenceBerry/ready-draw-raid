import PlainMisc from "./components/PlainMisc";
import GraveRobbers from "./components/GraveRobbers";
import NavBar from "./components/NavBar";
import MyCollection from "./components/MyCollection";
import OpenBooster from "./components/OpenBooster";
import CardTextNew from "./components/CardTextNew";
import FinalCard from "./components/FinalCard";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <CardTextNew></CardTextNew>
      <FinalCard></FinalCard>
      <OpenBooster></OpenBooster>
      <MyCollection></MyCollection>
      <PlainMisc></PlainMisc>
    </>
  );
}

export default App;
