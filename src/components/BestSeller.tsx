import Product from "./Product";
import { useCart } from '../context/Cart';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const BestSeller = () => {
  const {products, changeOpenPage} = useCart();
  const [rows, setrows] = useState(false);
  const toggler = () => { 
    if (rows == false ) setrows(true);
    else { 
      setrows(false);
    }
  }
  
 

  
  return (
    <motion.div
    initial={{opacity:0, x:-300}}
    transition={{duration:0.4, opacity:{duration:0.5}}}
    whileInView={{opacity:1, x: 0}}
    viewport={{once: true}}
    className=" mob-p space-up ">
      <div className="   flex flex-col items-center gap-5 relative overflow-hidden">
          <div className=" w-full flex max-sm:flex-col max-sm:justify-center  items-center ">
            <h3 className="head mx-auto flex items-center ">
              <span className=" specialTitle mr-2">Best</span> Seller
            </h3>
            <div className="sm:hidden flex w-1/3 items-center justify-center gap-4 mx-auto  ">
              <span onClick={toggler} className={` ${rows == true ?  " bg-main-color cursor-pointer" : " bg-dark-gray pointer-events-none" } text-white  trans hover:opacity-85 flex items-center justify-center w-10 h-10 p-2 rounded-full`}>
                <FontAwesomeIcon  icon={faAngleRight} size='lg' className=" rotate-180" />
              </span>
              <span onClick={toggler} className={` ${rows == false ?  " bg-main-color cursor-pointer" : " bg-dark-gray pointer-events-none" }  text-white  trans hover:opacity-85 flex items-center justify-center w-10 h-10 p-2 rounded-full`}>
                <FontAwesomeIcon  icon={faAngleRight} size='lg'  />
              </span>
            </div>
          </div>
      
          {/* images */}
          <div className=" flex overflow-hidden relative">
            <div className={`grid ${rows == false ? "translate-x-0 relative transition-transform transform duration-500" : "-translate-x-[120%] absolute top-0  transition-transform transform duration-500"}   grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-10 md:gap-5 md:grid-cols-4 w-full place-items-center`}>
              {
                products.map((prod, index) => (
                  <div className={`${index > 7 ? "hidden" : "block"}`} key={prod.head}>
                    <Product prod={prod}  />
                  </div>
                ))
              }
            </div>
            <div className={`grid ${rows == false ? "translate-x-[120%]  absolute top-0 transition-transform transform duration-500" : " translate-x-0  relative transition-transform transform duration-500"}   grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-10 md:gap-5 md:grid-cols-4 w-full place-items-center`}>
              {
                products.map((prod, index) => (
                  <div className={`${index > 7 && index <= 15 ? "block" : "hidden"}`} key={prod.head}>
                    <Product prod={prod}  />
                  </div>
                ))
              }
            </div>
          </div>
          {/* Arrows */}
          <span onClick={toggler} className={`max-sm:hidden absolute top-1/2 trasnate-y-1/2 right-0 ${rows == false ?  " bg-main-color cursor-pointer" : " bg-dark-gray pointer-events-none" }  text-white  trans hover:opacity-85 flex items-center justify-center w-10 h-10 p-2 rounded-full`}>
            <FontAwesomeIcon  icon={faAngleRight} size='lg'  />
          </span>
          <span onClick={toggler} className={`max-sm:hidden absolute top-1/2 trasnate-y-1/2 left-0 ${rows == true ?  " bg-main-color cursor-pointer" : " bg-dark-gray pointer-events-none" } text-white  trans hover:opacity-85 flex items-center justify-center w-10 h-10 p-2 rounded-full`}>
            <FontAwesomeIcon  icon={faAngleRight} size='lg' className=" rotate-180" />
          </span>
          {/*  */}
      </div>
      <Link to="/AllProducts" className=" mx-auto mt-12 w-full flex items-center justify-center" onClick={() => changeOpenPage("product")}>
                <span className="group ml-2 trans cursor-pointer py-2 px-6 flex  items-center justify-center  text-white bg-main-color  hover:opacity-85">
                    See All
                    <FontAwesomeIcon className="text-[14px] ml-2   group-hover:opacity-100 trans group-hover:text-main-black  group-hover:translate-x-[2px]" icon={faArrowRightLong} />
                </span>
      </Link>
    </motion.div>
  )
}

export default BestSeller;