import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


type func = { 
  goTop:()=> void
}

const ScrollTop = ({goTop}:func) => {
    
    
  return (
    <div onClick={goTop} className={` w-12 h-12 rounded-sm shadow-md cursor-pointer bg-main-color text-white trans hover:opacity-85 flex items-center justify-center   `}>
        
          <FontAwesomeIcon  icon={faAngleRight} size='lg' className=" rotate-[270deg]" />
        
    </div>
  )
}

export default ScrollTop