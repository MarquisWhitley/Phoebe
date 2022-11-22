import React from "react";
import { ButtonSizes } from "./ButtonSizes";
import { ButtonStyles } from "./ButtonStyles";

export interface ButtonProps {
   action: () => void;
   btnSize: ButtonSizes;
   btnStyle: ButtonStyles;
   disabled: boolean;
   children: string;
}

const Button = (btnProps: ButtonProps) => {
   const { action, btnSize, btnStyle, disabled, children } = btnProps;
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
