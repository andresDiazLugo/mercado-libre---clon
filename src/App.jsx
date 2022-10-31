import Inicio from "./components/paginaInincio.jsx/Inicio"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import ProductListing from "./components/ProductListing/ProductListing"
import DetailProduct from "./components/DetailProducts/DetailProduct"
import {Route,Routes} from "react-router-dom"
function App() {
 

  return (
    <div style={{position:"relative"}}>
    <Header/>
      <Routes>
        <Route 
          path="/"
          element={<Inicio/>}
        />
        <Route
          path="/allProducts/:name"
          element={<ProductListing/>}
        />
        <Route
          path="/allProducts/:name/detailProducts/:id/:idUser/:idCatalog"
          element={<DetailProduct/>}
        />

      </Routes>
    <Footer/>
    </div>
  )
}

export default App
