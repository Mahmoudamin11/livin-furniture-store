
import { MainCart, useCart} from './context/Cart';
import Navbar from './components/Navbar';
import AnimatedPages from './utilites/AnimatedPages';
import { useEffect } from 'react';


const App = () => {
  const {getSearchState, changeSearchState} = useCart();
  useEffect(() => { 
    if (location.pathname != "/AllProducts") { 
      if (getSearchState() == 1)
        changeSearchState();
    }
  }, [location.pathname])
  
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