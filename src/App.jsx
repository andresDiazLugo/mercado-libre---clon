import Inicio from "./components/paginaInincio.jsx/Inicio"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import ProductListing from "./components/ProductListing/ProductListing"
import DetailProduct from "./components/DetailProducts/DetailProduct"
import GaleryPhotos from "./components/GaleryPhotos/GaleryPhotos"
import {Route,Routes} from "react-router-dom"
import {useState} from 'react'
function App() {
 const [renderGaleryPhotos, setRenderGaleryPhotos] = useState(false)
  return (
    <div style={{position:"relative"}}>
    {renderGaleryPhotos && <GaleryPhotos setRenderGalery={setRenderGaleryPhotos}/>}
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
          element={<DetailProduct setRenderGalery={setRenderGaleryPhotos}/>}
        />

      </Routes>
    <Footer/>
    </div>
  )
}

export default App
