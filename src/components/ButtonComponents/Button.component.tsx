import React from "react";
import { ButtonSizes } from "./ButtonSizes";
import { ButtonStyles } from "./ButtonStyles";

interface ButtonProps {
   action: Function;
   btnSize: ButtonSizes;
   btnStyle: ButtonStyles;
   disabled: boolean;
   children: string
}

const Button = ({ action, btnSize, btnStyle, disabled, children }: ButtonProps) => {
   return (
      <button
         className={`${btnSize} ${btnStyle}`}
         disabled={disabled}
         onClick={() => action()}
      >
        {children}
      </button>
   );
};

export default Button;
