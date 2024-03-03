import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/Cart";
import { Link } from "react-router-dom";

const Product = ({prod}:any) => {
  const { increaseQ, decreaseQ, removeQ, chooseProd} = useCart();
  
  

  return (
    <div  className=' bg-light-gray  w-full h-full  flex flex-col gap-3 shadow-lg trans  '>
            <div className="w-full h-40 450:h-56 sm:h-44 xl:h-52 bg-white peer">
              <Link to="/Product">
              <img onClick={() => chooseProd(prod.head)}  src={prod.img} alt="" className='w-56 h-full  trans hover:shadow-md  cursor-pointer' />
              </Link>
            </div>
            <div className='xl:pb-3 peer-hover:opacity-70 trans flex flex-col gap-1 px-2 '>

              <div className="xl:w-3/4 w-full mx-auto flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <h4 className='text-xl font-bold w-full flex gap-1  justify-between'>{prod.head}
                  </h4>
                  <span className='text-dark-gray -mt-1 text-xs '>{prod.type}</span>
                </div>
                    <span className='font-bold text-dark-gray'>${prod.price}</span>
              </div>

              
              {prod.quantity == 0 && <button onClick={() => increaseQ(prod.head)} className=" lg:w-3/4 w-full my-2 mx-auto max-[880px]:text-sm bg-main-color  text-white p-[6px] max-[890px]:p-[8px] hover:opacity-90 trans">
              <FontAwesomeIcon icon={faCartShopping} size="lg" className=" text-white w-4 mr-2  cursor-pointer trans hover:opacity-75" />
                Add To Cart
              </button>}

              { prod.quantity > 0 &&<div className="my-2 flex max-md:gap-4 max-md:justify-center  md:justify-between w-3/4  md:w-full lg:w-3/4 justify-between mx-auto  items-center  p-[4px] ">
                <div>
                <FontAwesomeIcon onClick={() => removeQ(prod.head)} icon={faTrashCan} size="lg" className=" text-red-400 cursor-pointer trans hover:text-red-600" />
                </div>
                <div className="flex gap-3 xl:gap-5">
                  <span onClick={() => decreaseQ(prod.head)} className=" bg-main-color text-2xl text-white w-7 h-7 trans hover:opacity-85    flex items-center justify-center shadow-lg cursor-pointer">-</span>
                  <span className=" font-bold text-xl">{prod.quantity}</span>
                  <span onClick={() => increaseQ(prod.head)} className=" bg-main-color text-2xl text-white w-7 h-7 trans hover:opacity-85    flex items-center justify-center shadow-lg cursor-pointer">+</span>
                </div>
              </div>}

            </div>
            
    </div>
  )
}

export default Product;