
import { MainCart} from './context/Cart';
import Navbar from './components/Navbar';
import AnimatedPages from './utilites/AnimatedPages';

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