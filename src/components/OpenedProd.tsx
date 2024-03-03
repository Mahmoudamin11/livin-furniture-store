import { useCart } from "../context/Cart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useEffect, useState } from "react";


const OpenedProd = () => {
    const {products, increaseQ, decreaseQ, removeQ, getChosenProd, chooseProd} = useCart();
    const item = products.find((item) => item.head === getChosenProd());
    const location = useLocation();
    const [shower, setShower] = useState(1);
    useEffect(() => { 
        window.scrollTo(0, 0);
    }, [location.pathname])

    const toggleshower = () => { 
        shower == 1 ? setShower(0) : setShower(1);
    }

  return (
    <motion.div className=' w-full  min-[791px]:h-[95vh] flex items-center justify-around mob-p'
        initial={{opacity:0}}
        animate={{opacity:"100%"}}
        exit={{opacity:0}}
    >
        <div className=' relative w-full h-full   text-black flex flex-col gap-10 justify-between  py-10'>
            
            <motion.div 
            initial={{opacity:0, x:-300}}
            transition={{duration:0.4, opacity:{duration:0.5}}}
            whileInView={{opacity:1, x: 0}}
            viewport={{once: true}}
            className=" w-full lg:w-3/4 xl:w-10/12 h-full max-[690px]:flex-col flex gap-8">

                <div className=" min-w-[300px] h-[300px] ">
                    <img src={item?.img} alt="" className=" max-[690px]:mx-auto   w-[300px] h-[300px] border-[1px] border-solid border-dark-gray" />
                </div>
                <div className="flex flex-col justify-center gap-4">
                    <div className=" fle  items-center  ">
                        <div className=" flex flex-col justify-center gap-4 h-full">
                            <h1 className=" text-5xl gap-4 text-black font-bold">{item?.head}</h1>
                            <div className=" flex flex-col  gap-1  w-fit ">
                                <span className="text-sm tracking-wider font-bold text-main-color"> <span className="uppercase text-black font-normal tracking-widest text-[16px]">Type : </span>  {item?.type}</span>
                                <span className="text-sm tracking-wider font-bold text-main-color"> <span className="uppercase text-black font-normal tracking-widest text-[16px]">Price : </span>  ${item?.price}</span>
                            </div>
                            {/* info */}
                            <p className=" font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi unde, animi corrupti nostrum, nesciunt numquam incidunt veritatis consequuntur quos rem qui fugiat est corporis dolore similique tenetur ut fuga optio.</p>
                        </div>
                    </div>
                    {item?.quantity == 0 && <button onClick={() => increaseQ(item.head)} className=" w-full my-2  bg-main-color  text-white p-[6px] hover:opacity-90 trans">
                    <FontAwesomeIcon icon={faCartShopping} size="lg" className=" text-white w-4 mr-2 cursor-pointer trans hover:opacity-75" />
                    Add To Cart
                    </button>}
                    { item?.quantity! > 0 &&<div className="my-2 flex  w-full  items-center gap-8 justify-center  p-[4px] ">
                        <div>
                        <FontAwesomeIcon onClick={() => removeQ(item?.head!)} icon={faTrashCan} size="lg" className=" text-red-400 cursor-pointer trans hover:text-red-600" />
                        </div>
                        <div className="flex gap-3 xl:gap-5">
                        <span onClick={() => decreaseQ(item?.head!)} className=" bg-main-color text-2xl text-white w-7 h-7 trans hover:opacity-85    flex items-center justify-center shadow-lg cursor-pointer">-</span>
                        <span className=" font-bold text-xl w-10 text-center">{item?.quantity!}</span>
                        <span onClick={() => increaseQ(item?.head!)} className=" bg-main-color text-2xl text-white w-7 h-7 trans hover:opacity-85    flex items-center justify-center shadow-lg cursor-pointer">+</span>
                        </div>
                    </div>}
                </div>
            </motion.div>

            {/* Related Prods  */}
            <div className="flex flex-col gap-4  ">
                <h1 className=" font-bold text-2xl">Related Products</h1>
                <div className=" flex gap-5 w-full max-[790px]:grid grid-cols-3 max-[510px]:grid-cols-2 place-items-center">
                    {
                        products.map((prod) => (
                            <div key={prod.head}  className={`${(prod.type == item?.type) && prod.head != item?.head ? "block" : "hidden"} shadow-xl w-[150px] h-[150px] items-center cursor-pointer trans hover:opacity-85 `}>
                                <Link to="/Product" onClick={toggleshower} >
                                    <img onClick={() => chooseProd(prod.head)} src={prod.img} className="w-[150px] h-[150px]" alt="" />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <Link to="/inCart">
          <CartIcon />
        </Link>
    </motion.div>
  )
}

export default OpenedProd