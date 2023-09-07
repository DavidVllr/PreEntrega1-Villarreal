import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {

  return (
    <main>
      <Navbar/>
      <ItemListContainer title={<h1>Tasy<span>Dv</span></h1>} />
    </main>
  );
}
export default App;