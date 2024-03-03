import { Link } from 'react-router-dom';
import back from '../assets/back.jpg';
import chair1 from '../assets/Component 1.png';
import chair2 from '../assets/Component 2.png';
import chair3 from '../assets/Component 3.png';
import { useCart } from '../context/Cart';
import { motion } from 'framer-motion';
const Minimalist = () => {
  const {changeOpenPage} = useCart();
  return (
    <div className='mob-p space-up flex flex-col min-[750px]:flex-row-reverse gap-10 lg:grid  lg:grid-cols-[60%_40%] '>
        <motion.div 
        className='flex flex-col  items-center justify-center min-[750px]:items-start gap-5 lg:gap-8 '>
            <motion.h3 
            initial={{opacity:0, x:300}}
            transition={{duration:0.4, opacity:{duration:0.5}}}
            whileInView={{opacity:1, x:0}}
            viewport={{once: true}}
            className='font-bold text-[44px] leading-[50px] text-center min-[750px]:text-left '>Cozy is <motion.span 
            
            className='specialTitle'>Minimalist</motion.span></motion.h3>
            <p className=' text-center text-dark-gray min-[750px]:text-left lg:text-lg'>More individuals are seeking for soothing decorations in the middle of more stressful. This type of 'minimalist' interior design, is commonly employed to create a relax atmosphere.</p>
            
            <Link to="/AllProducts" onClick={() => changeOpenPage("product")} className='w-1/2  bg-main-color py-3 min-[750px]:py-2  trans hover:opacity-85 text-main-white font-bold text-center'>
              <button className=' outline-none'>Shop Now</button>
            </Link>
            
        </motion.div>

        <div 
        
        className='flex flex-col lg:-order-1 '>
            <img src={back} className='w-full min-[780px]:w-10/12 lg:w-3/4' alt="" />
            <motion.div 
            initial={{opacity:0, x:-300}}
            transition={{duration:0.4, opacity:{duration:0.5}}}
            whileInView={{opacity:1, x: 0}}
            viewport={{once: true}}
            className='grid grid-cols-3 gap-2 p-3 pb-0 bg-main-white w-full min-[780px]:w-3/4 lg:w-2/3 min-[780px]:ml-32 min-[780px]:-mt-12 '>
                <img src={chair1} alt="" className='trans hover:opacity-85' />
                <img src={chair2} alt="" className='trans hover:opacity-85' />
                <img src={chair3} alt="" className='trans hover:opacity-85' />
            </motion.div>
        </div>

    </div>
  )
}

export default Minimalist;