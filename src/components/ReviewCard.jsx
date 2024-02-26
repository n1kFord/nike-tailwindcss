import React from "react";
import { star } from "../assets/icons";
import { generateRating } from "../utils/utils";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <h3 className="font-palanquin text-2xl text-center font-bold">
                {customerName}
            </h3>
            <img
                src={imgURL}
                alt="customer"
                className="mt-5 rounded-full object-cover w-[120px] h-[120px]"
            />
            <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img
                    src={star}
                    alt="rating"
                    width={24}
                    height={24}
                    className="object-contain m-0"
                />
                <p className="text-xl font-montserrat text-slate-gray">
                    {generateRating()}
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;
