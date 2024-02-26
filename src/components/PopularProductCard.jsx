import React from "react";
import { star } from "../assets/icons";
import { generateRating } from "../utils/utils";

const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="rating" width={24} height={24} />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">
                    {generateRating()}
                </p>
            </div>
            <h3 className="mt-2 font-palanquin text-gray-400 text-lg">
                {name}
            </h3>
            <p className="mt-1 font-montserrat text-sm">{price}</p>
        </div>
    );
};

export default PopularProductCard;
