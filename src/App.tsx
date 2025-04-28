import PlainMisc from "./components/PlainMisc";
import GraveRobbers from "./components/GraveRobbers";
import NavBar from "./components/NavBar";
import MyCollection from "./components/MyCollection";
import OpenBooster from "./components/OpenBooster";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <OpenBooster></OpenBooster>
      <MyCollection></MyCollection>
      <PlainMisc></PlainMisc>
    </>
  );
}

export default App;
