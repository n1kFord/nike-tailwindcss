import React, { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

    return (
        <section
            id="home"
            className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container p-2"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <motion.p
                    className="text-xl font-montserrat text-coral-red"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    Our Summer collection
                </motion.p>
                <motion.h1
                    className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
                    initial={{ opacity: 0, x: -10, zIndex: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                        The New Arrival
                    </span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">
                        Nike
                    </span>{" "}
                    Shoes
                </motion.h1>
                <motion.p
                    className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    Discover stylish Nike arrivals, quality comfort, and
                    innovation for your active life.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                    <Button label="Shop now" iconUrl={arrowRight} />
                </motion.div>

                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: -10, zIndex: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                                delay: 0.2 * i,
                            }}
                        >
                            <p className="text-4xl font-palanquin font-bold">
                                {stat.value}
                            </p>
                            <p className="leading-7 font-montserrat text-slate-gray">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <motion.img
                    src={bigShoeImg}
                    alt="shoe collection"
                    width={610}
                    height={500}
                    className="object-contain relative z-10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe, i) => (
                        <motion.div
                            key={shoe.thumbnail}
                            initial={{ opacity: 0, x: -10, zIndex: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                                delay: 0.5 * i,
                            }}
                        >
                            <ShoeCard
                                imgUrl={shoe}
                                changeBigShoeImage={(newShoe) => {
                                    setBigShoeImg(newShoe);
                                }}
                                bigShoeImage={bigShoeImg}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
