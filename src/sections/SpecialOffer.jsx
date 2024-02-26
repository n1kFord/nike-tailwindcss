import React from "react";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { motion } from "framer-motion";

const SpecialOffer = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <motion.div
                className="flex-1"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <img
                    src={offer}
                    alt="offer"
                    width={773}
                    height={687}
                    className="object-contain w-full"
                />
            </motion.div>
            <div className="flex flex-col flex-1">
                <motion.h2
                    className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <span className="text-coral-red">Special</span> Offer
                </motion.h2>
                <motion.p
                    className="mt-4 ml-1 lg:max-w-lg info-text"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa ex consequatur fugiat blanditiis ea, cum, voluptatem
                    accusamus doloremque in
                </motion.p>
                <motion.p
                    className="mt-4 ml-1 lg:max-w-lg info-text"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    Necessitatibus cupiditate, magnam tempora corporis! Qui
                    repudiandae blanditiis rerum odit facere!
                </motion.p>

                <motion.div
                    className="mt-11 flex flex-wrap gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                >
                    <Button label="Shop now" iconUrl={arrowRight} />
                    <Button
                        label="Learn more"
                        bgColor="bg-white"
                        borderColor="border-slate-gray"
                        textColor="text-slate-gray"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default SpecialOffer;
