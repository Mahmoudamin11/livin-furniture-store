
import { Link, Route, Routes } from 'react-router-dom';
import { MainCart} from './context/Cart';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import OpenedProd from './components/OpenedProd';
import AnimatedPages from './utilites/AnimatedPages';
import CartIcon from './components/CartIcon';

const App = () => {
  
  
  
  return (
    <div className=''>
      <MainCart>
        <Navbar />
        <AnimatedPages />
      </MainCart>
    </div>
  )
}

export default App