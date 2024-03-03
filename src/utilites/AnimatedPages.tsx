
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import OpenedProd from '../components/OpenedProd'
import { AnimatePresence } from "framer-motion"
import AllProducts from '../pages/AllProducts'
import InCart from '../pages/InCart'
import { useCart } from '../context/Cart'

const AnimatedPages = () => {
    const location = useLocation();
    const {closeTheme} = useCart();
    
  return (
    <div onClick={() => closeTheme()} >
        <AnimatePresence>

            {/* <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/Product" element={<OpenedProd  />} />
                <Route path="/AllProducts" element={<AllProducts  />} />
                <Route path="/InCart" element={<InCart  />} />
            </Routes> */}

        </AnimatePresence>
    </div>
  )
}

export default AnimatedPages