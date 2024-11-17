import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailConteiner'
import Cart from './components/Cart'
import CompraRealizada from './components/CompraRealizada'
import './App.css'

/* react router */

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  return (


    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path="/" element={<><ItemListContainer /></>} />

        <Route path="/category/:category" element={<ItemListContainer />} />

        <Route path='/product/:idSelected' element={<ItemDetailConteiner />} />

        <Route path='/cart' element={<Cart />} />

        
        <Route path='/CompraExitosa' element={<CompraRealizada/>} />

      </Routes>


    </BrowserRouter>



  )

}

export default App
