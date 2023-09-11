import React from "react";

const sizeClasses = {
  txtUrbanistRomanExtraBold24: "font-extrabold font-urbanist",
  txtUrbanistRomanBold36: "font-bold font-urbanist",
  txtUrbanistRomanMedium24Black900: "font-medium font-urbanist",
  txtUrbanistRomanMedium24: "font-medium font-urbanist",
  txtUrbanistRomanMedium24Gray700: "font-medium font-urbanist",
  txtUrbanistRomanSemiBold24: "font-semibold font-urbanist",
  txtUrbanistRomanExtraBold80: "font-extrabold font-urbanist",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };