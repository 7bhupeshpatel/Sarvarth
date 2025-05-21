import { FaRegSquare } from "react-icons/fa"

import './App.css'

function App({ disabled = false,
    types = "primary",
    destructive = false,// primary or secondary or tertiary or outlined or link
}) {

    const baseClasses = `
    w-[178px] h-[48px] px-5 py-3 rounded-md text-base font-semibold
    flex flex-wrap items-center justify-center gap-2 text-center
    whitespace-normal transition duration-200
  `;
    console.log(types);
    let stateClasses = "";

    if (disabled) {
        stateClasses = "bg-[#A5B4FC] text-white hover:bg-[#A5B4FC] hover:text-white active:bg-[#A5B4FC]";
    } else if (destructive && types === "primary") {
        stateClasses = "bg-[#EF4444] text-white hover:bg-[#DC2626] active:bg-[#DC2626]";
    } else if (destructive && types === "secondary") {
        stateClasses = "bg-[#FEF2F2] text-red-500 hover:bg-[#FEE2E2] active:bg-[#FEE2E2]";
    } else if (destructive && types == "tertiary") {
        stateClasses = "bg-transparent text-red-500 border border-red-200 hover:bg-red-100 active:bg-red-100";
    }
    else if (destructive && types == "outlined") {
        stateClasses = "bg-transparent text-red-500 border border-red-200 hover:bg-transparent active:opacity-95 ";
    }
    else if (destructive && types == "link") {
        stateClasses = "bg-transparent text-red-500 border border-none hover:bg-transparent active:opacity-95 ";
    }
    else if (types === "primary") {
        stateClasses = "bg-[#6366F1] text-white hover:bg-[#4F46E5] active:bg-[#4F46E5]";
    } else if (types === "secondary") {
        stateClasses = "bg-[#EEF2FF] text-blue-400  hover:bg-[#E0E7FF] active:bg-[#E0E7FF]";
    } else if (types === "tertiary") {
        stateClasses = "bg-transparent text-black border border-gray-700 hover:bg-white active:opacity-90";
    } else if (types === "outlined") {
        stateClasses = "bg-transparent text-blue-500 border border-blue-500 hover:bg-transparent active:bg-blue-100";
    }
    else if (types === "link") {
        stateClasses = "bg-transparent text-blue-500 border border-none hover:text-blue-600 active:opacity-90";
    }

    return (
        <>
            <div className="flex flex-wrap flex-col gap-10 justify-center items-center mt-16">
                <button disabled={disabled} type="primary" className={`${baseClasses} ${stateClasses}`}>
                    <FaRegSquare className="w-20px h-20px opacity-75 " />
                    Button CTA
                    <FaRegSquare className="w-20px h-20px opacity-75 " />
                </button>
                <button disabled={disabled} type="outline" className={`${baseClasses} ${stateClasses}`}>
                    <FaRegSquare className="w-20px h-20px opacity-75 " />
                    Button CTA
                    <FaRegSquare className="w-20px h-20px opacity-75 " />
                </button>

            </div>
        </>
    )
}

export default App
