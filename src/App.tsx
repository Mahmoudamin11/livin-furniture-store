
import { MainCart} from './context/Cart';
import Navbar from './components/Navbar';
import AnimatedPages from './utilites/AnimatedPages';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OpenedProd from './components/OpenedProd';
import AllProducts from './pages/AllProducts';
import InCart from './pages/InCart';

const App = () => {
  
  
  
  return (
    <div className=''>
      <MainCart>
        <Navbar />
        <Routes location={location} key={location.pathname}>
                <Route path="/livin-furniture-store/" element={<Home />} />
                <Route path="/livin-furniture-store/Product" element={<OpenedProd  />} />
                <Route path="/livin-furniture-store/AllProducts" element={<AllProducts  />} />
                <Route path="/livin-furniture-store/InCart" element={<InCart  />} />
        </Routes>
      </MainCart>
    </div>
  )
}

export default App