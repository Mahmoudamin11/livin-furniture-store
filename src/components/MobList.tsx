import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCart } from "../context/Cart";
import { useEffect } from "react";

const MobList = () => {
  const {getOpenPage, toggleList, getList} = useCart();

  const closeList = () => { 
    toggleList();
  }

  const goToTest = () => { 
    toggleList();
    if (window.location.pathname != "/" ) { 
        setTimeout(() => { 
            document.getElementById("test")?.scrollIntoView();
        }, 750)
    }
    else { 
        document.getElementById("test")?.scrollIntoView();
    }
    
}
  useEffect(() => { 
    if (getList() == 1)  { 
      setTimeout(() => {  
        document.body.style.overflowY = "hidden";
      }, 300)
    }
    else { 
        document.body.style.overflowY = "auto";
    }
    
  }, [getList()])
    
  return (
    

    <div>
      <div className={getList() == 1 ?" absolute w-[70%] z-50 trans top-0 left-0 h-full flex flex-col gap-12 py-5 px-5 bg-sec-color shadow-2xl shadow-main-color" : " absolute w-[70%] z-50 trans top-0 left-[-200%] h-full flex flex-col gap-12 py-5 px-5 bg-sec-color shadow-2xl shadow-main-color"}>
          <div className="flex justify-between items-center">
              <Link to="/" >
                <h1 className={" text-xl font-bold"}>Livin.</h1>
              </Link>
              <FontAwesomeIcon onClick={() => closeList()}  icon={faXmark} size="xl" className=" cursor-pointer trans hover:opacity-75"  />
          </div>
          <ul className="flex flex-col gap-10 text-lg text-dark-gray  ">
              <Link to="/" onClick={closeList} className=" w-fit"  >
                    <span className={`${getOpenPage() === "home" ? "text-black" : " text-dark-gray"} hover:pl-3  trans`}>
                        Home
                    </span>
              </Link>
              <Link to="/" onClick={goToTest} className="w-fit">
                <li className="trans hover:pl-3  hover:text-main-black cursor-pointer">About</li>
              </Link>
              <Link to="/AllProducts" onClick={closeList} className="w-fit">
      
                      <span className={`${getOpenPage() == "product" ? "text-black" : " text-dark-gray"} trans hover:text-black hover:pl-3  `}>
                          Products
                      </span>
              </Link>
              <Link to="/InCart" onClick={closeList} className="w-fit" >
                <li className={`trans hover:pl-3  hover:text-main-black ${getOpenPage() == "cart" ? "text-black" : "text-dark-gray"} cursor-pointer`}>Cart</li>
              </Link>
          </ul>

      </div>
      <div onClick={() => toggleList()} className={` absolute w-full h-full bg-black  top-0 trans left-0 ${getList() != 1 ? " opacity-0 -z-10" : "z-40 opacity-30"}`}></div>
    </div>
  )
}

export default MobList;