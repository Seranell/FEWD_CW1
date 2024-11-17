import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";

function Description({ desc, isOpen, onToggle }) {
    return (
      <div className="w-full">
        <button className="font-semibold flex items-center gap-2 hover:text-gray-500" onClick={onToggle} aria-expanded={isOpen} aria-controls="description-content">
          {isOpen ? (
            <>
              Hide Description <HiChevronUp />
            </>
          ) : (
            <>
              Show Description <HiChevronDown />
            </>
          )}
        </button>
        <div id="description-content" className={`overflow-hidden transition-all duration-500 ease-in-out mt-2`} style={{maxHeight: isOpen ? "1000px" : "0px"}}>
          <p>{desc}</p>
        </div>
      </div>
    );
  }
  
  
  

export default Description;