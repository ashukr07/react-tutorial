import React from 'react'

function Button({
    //yeh button ke andar kya text rkha hai
    children,
    type='button',
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    className = '',
    ...props


}) {
  return (
    // jaise hame isme kuch properties user ke through inject karwani hai toh backticks ka use hoga per woh toh javascript me hota hai isliye ham{} iske andar js likhte hai properties agar koi user bhejega toh use bhi le lenge
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}}`} {...props}>
        {children}
    </button>
  )
}

export default Button