import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faDolly } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
    const data = [
        {icon: <FontAwesomeIcon icon={faTrophy} size="lg" />, head: 'Best Quality', txt: 'All of our furniture uses the best materials for our customers.'},
        {icon: <FontAwesomeIcon icon={faDolly} size="lg" />, head: 'Free Shiping', txt: 'Free shiping everytime you buy furniture from us without exeption.'},
        {icon: <FontAwesomeIcon icon={faCircleCheck} size="lg" />, head: 'Warranty', txt: 'Everytime you buy our furniture products, you will get a warranty without exeption.'},
    ];
    
    
  return (
    <div className="w-full bg-sec-color space-up">
        <div  className=" w-full py-8 mob-p flex flex-col sm:flex-row md:mx-auto md:items-center  justify-between gap-8">
            {
                data.map((e) => (
                    <div key={e.head} className="flex flex-col  items-center md:items-center md:gap-3 md:justify-center justify-center  gap-2">
                        <span className="text-2xl text-main-color mt-1 md:m-0 md:text-3xl  ">{e.icon}</span>
                        <div className="flex flex-col items-center  justify-center md:items-center md:gap-1 gap-3">
                            <h3 className="font-bold text-2xl">{e.head}</h3>
                            <p className="text-sm lg:text-[16px] w-3/4 text-dark-gray text-center ">{e.txt}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Features;