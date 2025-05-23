/* eslint-disable react-refresh/only-export-components */

import type { FC } from "react";
import { FaRegSquare } from "react-icons/fa";


export enum ButtonType {
     Primary = "primary",
     Secondary = "secondary",
     Tertiary = "tertiary",
     Outlined = "outlined",
     Link = "link",
}

export enum ButtonSize {
     Small = "small",
     Medium = "medium",
     Large = "large",
}

export enum ButtonStateClass {
     Disabled = "bg-slate-300 text-white hover:bg-slate-200 hover:text-white active:bg-[#A5B4FC]",
}

interface ButtonProps {
     disabled?: boolean;
     typeStyle?: ButtonType;
     destructive?: boolean;
     children: string;
     size?: ButtonSize;
     showLeftIcon?: boolean;
     showRightIcon?: boolean;
}

const baseClasses = `
     rounded-md text-base font-semibold
    flex flex-wrap items-center justify-center gap-2 text-center
    whitespace-normal transition duration-200 transform `;

    const sizeClassMap: Record<ButtonSize, string> = {
  [ButtonSize.Small]: "w-[129px] h-[28px] text-xs flex items-center justify-center px-1",
  [ButtonSize.Medium]: "w-[156px] h-[40px] text-sm",
  [ButtonSize.Large]: "w-[178px] h-[48px] text-base",
};

const stateClassMap: Record<ButtonType, string> = {
     [ButtonType.Primary]: "bg-[#6366F1] text-white hover:bg-[#4F46E5] active:bg-[#4F46E5 ]",
     [ButtonType.Secondary]: "bg-[#EEF2FF] text-blue-400 hover:bg-[#E0E7FF] active:bg-[#E0E7FF]",
     [ButtonType.Tertiary]: "bg-transparent text-black border border-gray-700 hover:bg-white active:opacity-90",
     [ButtonType.Outlined]: "bg-transparent text-blue-500 border border-blue-500 hover:bg-transparent active:bg-blue-100",
     [ButtonType.Link]: "bg-transparent text-blue-500 border border-none hover:text-blue-600 active:opacity-90",
};

const destructiveClassMap: Record<ButtonType, string> = {
     [ButtonType.Primary]: "bg-[#EF4444] text-white hover:bg-[#DC2626] active:bg-[#DC2626]",
     [ButtonType.Secondary]: "bg-[#FEF2F2] text-red-500 hover:bg-[#FEE2E2] active:bg-[#FEE2E2]",
     [ButtonType.Tertiary]: "bg-transparent text-red-500 border border-red-200 hover:bg-red-100 active:bg-red-100",
     [ButtonType.Outlined]: "bg-transparent text-red-500 border border-red-200 hover:bg-transparent active:opacity-95",
     [ButtonType.Link]: "bg-transparent text-red-500 border border-none hover:bg-transparent active:opacity-95",
};

const Button: FC<ButtonProps> = ({
     disabled = false,
     typeStyle = ButtonType.Primary,
     destructive = false,
     size = ButtonSize.Large,
     children,
     showLeftIcon = true,
     showRightIcon = true,
}) => {


     const stateClasses = disabled
          ? ButtonStateClass.Disabled
          : destructive
               ? destructiveClassMap[typeStyle]
               : stateClassMap[typeStyle];

const sizeClasses = sizeClassMap[size];

     return (
          <button disabled={disabled} type="button" className={`${baseClasses} ${stateClasses} ${sizeClasses}`}>
               {showLeftIcon && <FaRegSquare className="w-20px h-20px opacity-75 " />}
               {children}
               {showRightIcon && <FaRegSquare className="w-20px h-20px opacity-75 " />}
          </button>
     )
}

export default Button;