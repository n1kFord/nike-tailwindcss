import React from "react";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { motion } from "framer-motion";

const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
            <div className="flex flex-col flex-1">
                <motion.h2
                    className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    We provide you <span className="text-coral-red">Super</span>{" "}
                    <span className="text-coral-red">Quality</span> Shoes
                </motion.h2>
                <motion.p
                    className="mt-4 ml-1 lg:max-w-lg info-text"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa ex consequatur fugiat blanditiis ea, cum, voluptatem
                    accusamus doloremque in necessitatibus cupiditate, magnam
                    tempora corporis! Qui repudiandae blanditiis rerum odit
                    facere!
                </motion.p>

                <motion.div
                    className="mt-11"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <Button label="View Details" />
                </motion.div>
            </div>
            <motion.div
                className="flex flex-1 justify-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <img
                    src={shoe8}
                    alt="shoe 8"
                    width={570}
                    height={522}
                    className="object-contain"
                />
            </motion.div>
        </section>
    );
};

export default SuperQuality;
