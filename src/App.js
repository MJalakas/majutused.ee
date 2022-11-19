import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent>
        <Card />
      </MainContent>
    </div>
  );
}

export default App;
