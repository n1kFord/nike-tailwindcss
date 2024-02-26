import React from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Subscribe = () => {
    return (
        <section
            className="max-container flex justify-between items-center max-lg:flex-col gap-10"
            id="contact-us"
        >
            <motion.h3
                className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                }}
            >
                Sign Up for <span className="text-coral-red">Updates</span> &
                Newsletter
            </motion.h3>
            <motion.div
                className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray/20 rounded-full"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                }}
            >
                <input
                    type="text"
                    placeholder="subscribe@nike.com"
                    className="input"
                />
                <div className="flex max-sm:justify-end items-center max-sm:w-full">
                    <Button label="Sign Up" fullWidth />
                </div>
            </motion.div>
        </section>
    );
};

export default Subscribe;
