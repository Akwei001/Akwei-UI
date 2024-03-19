import { cva } from "class-variance-authority";
import {ComponentProps} from "react"


const buttonStyles = cva([
  "w-full",
"rounded-md",
"font-semibold",
"focus:outline-none",
"disabled:cursor-not-allowed",],

   {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
       size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
   },
  }
);

type ButtonProps = ComponentProps<"button">


const Button = ({...props}: ButtonProps) => {
  return (
    <button className="text-blue-500"{...props}>Button</button>
  )
}

export default Button