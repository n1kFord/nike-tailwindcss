import React from "react";
import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
import { motion } from "framer-motion";

const PopularProducts = () => {
    return (
        <section id="products" className="max-container max-sm:mt-12">
            <div className="flex flex-col justify-start gap-5">
                <motion.h2
                    className="text-4xl font-palanquin font-bold"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    Our <span className="text-coral-red">Popular</span> Products
                </motion.h2>
                <motion.p
                    className="lg:max-w-lg mt-2 font-montserrat text-slate-gray"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Libero reiciendis maiores modi. Corrupti eos quia explicabo
                    doloremque quaerat quos laudantium error, inventore, qui
                    earum beatae autem adipisci. Commodi, error debitis!
                </motion.p>
            </div>

            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                {products.map((product, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.2,
                            ease: "easeInOut",
                            delay: 0.2 * i,
                        }}
                        key={product.name}
                        className="max-sm:m-auto"
                    >
                        <PopularProductCard {...product} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PopularProducts;
