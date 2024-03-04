import { motion } from 'framer-motion'
import { useCart } from '../context/Cart'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from 'react-router-dom';
import paypal from "../assets/download-removebg-preview.png"
import { useEffect } from 'react';
import theme1LG from '../assets/theme1lg.png'
import theme1 from '../assets/theme1.png'
import theme2LG from '../assets/theme2lg.png'
import theme2 from '../assets/theme2.png'
import theme3LG from '../assets/theme3lg.png'
import theme3 from '../assets/theme3.png'

const InCart = () => {
    const {totalQuantity,clearCart,  products, getTotalItems, removeQ, increaseQ , chooseProd , decreaseQ, totalPrice, changeOpenPage, getCurrTheme} = useCart();

    const loc  = useLocation();
    useEffect(() => { 
      changeOpenPage("cart");
    }, [loc.pathname])

    

  return (
    <motion.div className=' flex  justify-center items-center  w-full h-[92vh] sm:h-[90vh] overflow-x-hidden'
    initial={{opacity:0}}
        animate={{opacity:"100%"}}
        exit={{opacity:0}}
    >
        {totalQuantity <= 0 &&<div className=' flex flex-col items-center justify-center   relative'>
            <img src={getCurrTheme() == 1 ? theme1LG : getCurrTheme() == 2 ? theme2LG : theme3LG } className=' w-[400px] max-sm:hidden' alt="" />
            <img src={getCurrTheme() == 1 ? theme1 : getCurrTheme() == 2 ? theme2 : theme3 } className='w-[300px] 550:w-[700px] sm:hidden' alt="" />
            <Link to="/AllProducts" className=' mt-8'><button className='text-lg tracking-widest font-semibold text-white bg-main-color transition-opacity duration-150 hover:opacity-85 px-5 py-2 '>Show Now</button></Link>
        </div>}

        {totalQuantity > 0 &&
            <div className=' flex flex-col sm:flex-row  w-full items-center  justify-between my-8 mx-5 md:mob-p'>


                {/* Large pages */}
                <div className={` lg:flex overflow-x-hidden sm:w-[55%] md:w-[60%] sm:h-[80vh] flex-col hidden      ${getTotalItems() > 4 ? "scrollbar-thin scrollbar-corner-transparent scrollbar-track-rounded-full scrollbar-track-gray-100 scrollbar-thumb-dark-gray  scrollbar-thumb-rounded-full overflow-y-scroll" : " scrollbar-none overflow-hidden"}`}>
                  
                  {
                    products.map((item) => (
                      <div key={item.head} className={`group flex trans cursor-pointer ${item.quantity > 0 ? "block" : "hidden"} sm:mr-5 justify-between items-center  border-b-[1px] border-solid border-dark-gray py-4 `}>
                          
                          <Link to="/Product" onClick={() => chooseProd(item.head)}>
                            <div className='hover:opacity-70 trans flex gap-6 items-center'>
                              <img src={item.img} className=' w-[100px] h-[100px]' alt="" />
                              <div className=' flex flex-col w-[120px]'>
                                  <h1 className=' text-2xl font-bold'>{item.head}</h1>
                                  <div className=' flex gap-2 items-center text-sm'>
                                    <h1 className=' text-dark-gray '>{item.type}</h1>
                                    <span className=''><span className='text-main-color'>$</span>{item.price}</span>
                                  </div>
                              </div>
                            </div>
                          </Link>

                            <div className=" flex  w-44 justify-center gap-8">
                              <div>
                                <FontAwesomeIcon onClick={() => removeQ(item.head)} icon={faTrashCan} size="lg" className=" text-red-400 cursor-pointer trans hover:text-red-600" />
                              </div>
                              <div className="flex gap-3 xl:gap-5">
                                <span onClick={() => decreaseQ(item.head)} className=" bg-main-color text-2xl text-white w-7 h-7 trans hover:opacity-85    flex items-center justify-center shadow-lg cursor-pointer">-</span>
                                <span className=" font-bold text-xl w-5 flex items-center justify-center">{item.quantity}</span>
                                <span onClick={() => increaseQ(item.head)} className=" bg-main-color text-2xl text-white w-7 h-7 trans hover:opacity-85    flex items-center justify-center shadow-lg cursor-pointer">+</span>
                              </div>
                            </div>
                            
                              <div className='flex justify-end font-bold w-[55px] text-main-color'>
                                $<span className='text-black '>{item.price * item.quantity}</span>
                              </div>
                          
                          
                          </div>
                    ))
                  }
                </div>

             

                {/* Small pages */}
                <div className={` flex overflow-x-hidden w-full sm:w-[65%] min-[721px]:w-[60%]  ${getTotalItems() > 3 ? "h-[50vh]" : "h-fit"} sm:h-[80vh] flex-col lg:hidden    ${getTotalItems() > 4 ? "scrollbar-thin scrollbar-corner-transparent scrollbar-track-rounded-full scrollbar-track-gray-100 scrollbar-thumb-dark-gray  scrollbar-thumb-rounded-full overflow-y-scroll" : " sm:scrollbar-none sm:overflow-hidden"}`}>
                  
                  {
                    products.map((item) => (
                      <Link to="/Product" className=' '>
                        <div key={item.head} className={`flex lg:hidden trans hover:bg-light-gray cursor-pointer ${item.quantity > 0 ? "block" : "hidden"} sm:mr-5 justify-between items-center  border-b-[1px] border-solid border-dark-gray py-4 `}>
                          
                            <div className=' flex gap-3 items-center w-full'>
                              {/* img */}
                              <div className=' flex flex-col w-[120px] justify-center items-center'>
                                <img src={item.img} className=' w-[100px] h-[100px]' alt="" />
                              </div>
                              <div className=' flex flex-col items-baseline  gap-5 w-[70%] mr-3'>
                                {/* title , type , price  */}
                                <div className=' flex items-center justify-between w-full'>
                                    <div className=' flex flex-col'>
                                      <h1 className=' text-2xl font-bold'>{item.head}</h1>
                                      <h1 className=' text-dark-gray '>{item.type}</h1>
                                    </div>
                                    <span className=''><span className='text-main-color'>$</span>{item.price}</span>
                                </div>

                                {/* Quantity control & total price */}
                                { <div className=" flex w-full justify-between    gap-5 items-center">
                                      <div className='flex justify-start font-bold w-[55px]  text-main-color'>
                                        $<span className='text-black '>{item.price * item.quantity}</span>
                                      </div>
                                        <div className='flex items-center justify-center gap-5'>
                                          <div>
                                            <FontAwesomeIcon onClick={() => removeQ(item.head)} icon={faTrashCan} size="lg" className=" text-red-400 cursor-pointer trans hover:text-red-600" />
                                          </div>
                                          <div className="flex gap-5">
                                            <span onClick={() => decreaseQ(item.head)} className=" bg-main-color text-2xl text-white w-7 h-7 trans hover:opacity-85    flex items-center justify-center shadow-lg cursor-pointer">-</span>
                                            <span className=" font-bold text-xl w-5 flex items-center justify-center">{item.quantity}</span>
                                            <span onClick={() => increaseQ(item.head)} className=" bg-main-color text-2xl text-white w-7 h-7 trans hover:opacity-85    flex items-center justify-center shadow-lg cursor-pointer">+</span>
                                          </div>
                                        </div>
                                    </div>}
                                
                              </div>
                            </div>
                            
                          </div>
                      </Link>
                    ))
                  }
                </div>
                



                {/* Payment */}
                <div className='relative bg-sec-color p-4 min-[721px]:p-6 lg:p-12 w-full sm:w-[35%] min-[721px]:w-[40%] md:w-[40%]  justify-center gap-4 flex flex-col max-sm:mt-5  sm:h-[80vh]'>
                  <div className='flex flex-col gap-1 sm:gap-6 justify-center sm:px-5 min[721px]:px-10 min[721px]:py-8  '>
                    <h1 className=' text-xs text-dark-gray'><span className='font-bold text-[16px] text-black'>{getTotalItems()}</span> Items</h1>
                    <div className='w-full flex justify-between items-center'>
                      <span className=' text-2xl tracking-wider  font-bold'>Total</span>
                      <span className='font-bold text-lg text-center'>${totalPrice()}</span>
                    </div>
                      <div className='relative w-full flex flex-col items-center gap-2 '>
                        <button className='w-full flex items-center justify-center text-white font-bold bg-main-color py-2 trans hover:opacity-85'>Checkout</button>
                        <button className='w-full flex items-center justify-center text-white font-bold border-[1px] border-solid border-black py-2 trans hover:opacity-85 hover:border-blue-800'><img src={paypal} className=' h-[25px]' alt="" /></button>
                        <button onClick={() => clearCart()} className={` mt-4 sm:mt-8 text-xs opacity-65 hover:opacity-100 border-[1px] border-solid border-red-600 text-red-600 trans outline-none hover:bg-red-600 hover:text-white font-bold px-3 py-1`}>
                          Clear Cart
                        </button>
                      </div>
                  </div>
                </div>
            </div>
        }
        
    </motion.div>
  )
}

export default InCart;