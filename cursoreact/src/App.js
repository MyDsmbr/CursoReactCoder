import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Mi Tienda Online!" />
    </div>
  );
}

export default App;
