import React from "react";

const Button = ({
    label,
    iconUrl,
    borderColor,
    bgColor,
    textColor,
    fullWidth,
}) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 
            border ${borderColor} font-montserrat text-lg leading-none ${
                bgColor || "bg-coral-red"
            } rounded-full ${textColor || "text-white"} ${
                fullWidth && "w-full"
            }`}
        >
            {label}
            {iconUrl && (
                <img
                    src={iconUrl}
                    alt=""
                    className="ml-2 rounded-full w-5 h-5"
                />
            )}
        </button>
    );
};

export default Button;
