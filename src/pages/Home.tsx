import SlideImages from '../components/SlideImages';
import BestExp from '../components/BestExp';
import Features from '../components/Features';
import BestSeller from '../components/BestSeller';
import Minimalist from '../components/Minimalist';
import Testmonials from '../components/Testmonials';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import CartIcon from '../components/CartIcon';
import { useCart } from '../context/Cart';
import { useEffect, useRef } from 'react';

const Home = () => {
  const {changeOpenPage} = useCart();
  const scrollRef = useRef(null);
  const loc = useLocation();

  useEffect(() => { 
      changeOpenPage("home");
  }, [loc.pathname])
  return (
    <div ref={scrollRef}>
      <motion.div  className='w-full'
          initial={{opacity:0}}
          animate={{opacity:"100%"}}
          exit={{opacity:0}}
          
      >
      
          <SlideImages />
          <BestExp/>
          <Features />
          <BestSeller />
          <Minimalist />
          <Testmonials />
          <Footer />
          <CartIcon />
      </motion.div>
    </div>
  )
}

export default Home