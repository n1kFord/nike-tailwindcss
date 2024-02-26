import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="max-container flex justify-center flex-wrap gap-9">
            {services.map((service, i) => (
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                        delay: 0.2 * i,
                    }}
                    key={service.label}
                    className="w-full sm:max-w-[400px]"
                >
                    <ServiceCard {...service} />
                </motion.div>
            ))}
        </section>
    );
};

export default Services;
