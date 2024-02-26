import React from "react";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import { motion } from "framer-motion";

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <motion.h3
                className="font-palanquin text-center text-4xl font-bold"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                }}
            >
                What Our <span className="text-coral-red">Customers</span> Say?
            </motion.h3>
            <motion.p
                className="info-text m-auto mt-4 max-w-lg text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                }}
            >
                Hear genuine stories from our satisfied customers about their
                exceptional experiences with us
            </motion.p>
            <motion.div
                className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"
                initial={{
                    opacity: 0,
                    scale: 0.9,
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
            >
                {reviews.map((review, i) => (
                    <ReviewCard key={`review_${i}`} {...review} />
                ))}
            </motion.div>
        </section>
    );
};

export default CustomerReviews;
