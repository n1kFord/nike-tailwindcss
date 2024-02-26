import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
        <div className="flex-1 w-full rounded-[20px] shadow-3xl px-10 py-16 transition-all ease-in-out duration-500 hover:shadow-2xl">
            <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
                <img src={imgURL} alt={label} width={24} height={24} />
            </div>
            <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-gray-700">
                {label}
            </h3>
            <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
                {subtext}
            </p>
        </div>
    );
};

export default ServiceCard;
