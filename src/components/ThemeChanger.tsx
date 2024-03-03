import { useEffect, useState } from "react";
import { useCart } from "../context/Cart";

const ThemeChanger = ({pos}:any) => {
    const [active, setactive] = useState(1);
    const {toggleCurrTheme, getCurrTheme} = useCart();

    useEffect(() => { 
        themeToggler(getCurrTheme())
    }, [getCurrTheme()])

    const themeToggler = (n:number) => { 
        if (n == 1) { 
            document.body.classList.remove('th-2');
            document.body.classList.remove('th-3');
            document.body.classList.add('th-1');
        }
        else if (n == 2) { 
            document.body.classList.remove('th-3');
            document.body.classList.remove('th-1');
            document.body.classList.add('th-2');
        }
        else if (n == 3) { 
            document.body.classList.remove('th-1');
            document.body.classList.remove('th-2');
            document.body.classList.add('th-3');
        }
        toggleCurrTheme(n);
        setactive(n);
    };

  return (
    <div className={pos == 1 ? " absolute top-full trans -left-8 sm:left-0 bg-light-gray shadow-card w-[180%] min-[420px]:w-[140%] lg:w-full justify-between p-4 flex z-30" : " absolute -top-[200%] trans -left-8 sm:left-0 bg-light-gray shadow-card w-[180%] min-[420px]:w-[140%] lg:w-full justify-between p-4 flex z-30"}>
            <span onClick={() => themeToggler(1)} className={active == 1 ? "w-8 h-8 bg-th1-btn border-2 border-solid trans  hover:scale-[120%]  scale-[120%] hover:shadow-xl cursor-pointer border-white" : "w-8 h-8 bg-th1-btn border-2 border-solid trans  hover:scale-[120%]  hover:shadow-xl cursor-pointer border-white"}></span>
            <span onClick={() => themeToggler(2)} className={active == 2 ? "w-8 h-8  bg-th2-btn border-2 border-solid trans  hover:scale-[120%] scale-[120%] hover:shadow-xl cursor-pointer border-white" : "w-8 h-8  bg-th2-btn border-2 border-solid trans  hover:scale-[120%]  hover:shadow-xl cursor-pointer border-white"}></span>
            <span onClick={() => themeToggler(3)} className={active == 3 ? "w-8 h-8  bg-th3-btn border-2 border-solid trans  hover:scale-[120%] scale-[120%] hover:shadow-xl cursor-pointer border-white" : "w-8 h-8  bg-th3-btn border-2 border-solid trans  hover:scale-[120%]  hover:shadow-xl cursor-pointer border-white"}></span>
    </div>
  )
}

export default ThemeChanger;