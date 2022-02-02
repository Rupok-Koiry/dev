import logo from "./logo.svg";
import "./App.css";
import DesignPageHome from "./Components/DesignPage/DesignPageHome/DesignPageHome";
import NavBar from "./Components/Navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <DesignPageHome></DesignPageHome>
    </div>
  );
}

export default App;
