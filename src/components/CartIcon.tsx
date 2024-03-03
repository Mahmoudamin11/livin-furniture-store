import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from '../context/Cart'
import ScrollTop from "../utilites/ScrollTop";
import { Link } from "react-router-dom";
import { useState } from "react";

const CartIcon = () => {
  const [top, settop] = useState(document.body.scrollTop)

    window.addEventListener('scroll', () => { 
        settop(window.scrollY);
    })
    const goTop = () => { 
      window.scroll({
          top:0,
          behavior: 'smooth'
      })
      settop(window.scrollY);
  }
    const {totalQuantity} = useCart();
  return (
    <div>
        {<div className={` fixed  bottom-14  right-5 sm:right-10    flex items-center gap-4 ${top > 500 ? "translate-x-0" : " translate-x-56"} trans  `}>
          <Link to="/inCart">
            <div className={` flex items-center cursor-pointer  shadow-md rounded-sm justify-center w-12 h-12 relative bg-main-color text-white trans hover:opacity-85 ${totalQuantity == 0 ? "translate-x-52" : "translate-x-0"}`}>
                <FontAwesomeIcon icon={faCartShopping} size="lg" className=" " />
                {totalQuantity > 0 && <span className=" absolute top-0 -translate-y-1/2 -right-2    text-white flex items-center justify-center text-xs w-6 h-6 rounded-full bg-red-500 font-bold">{totalQuantity}</span>}
            </div>
          </Link>
            <ScrollTop goTop={goTop} />
        </div>}
    </div>
  )
}

export default CartIcon;