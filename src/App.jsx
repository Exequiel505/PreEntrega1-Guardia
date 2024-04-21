import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './App.css'
function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo = {"Bienvenidos a su pagina favorita de juegos"}/>
    </div>
  )
}

export default App
