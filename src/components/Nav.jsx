import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { motion } from "framer-motion";

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <motion.a
                    href="/"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={headerLogo} alt="logo" width={130} height={29} />
                </motion.a>
                <motion.ul
                    className="flex-1 flex justify-center items-center gap-16 max-lg:hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-normal text-lg text-slate-gray"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </motion.ul>
                <motion.button
                    type="button"
                    className="font-montserrat py-3 px-8 text-white bg-orange-600/80 rounded-sm shadow-xl max-lg:hidden"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Sign in
                </motion.button>
                <div className="hidden max-lg:block">
                    <img src={hamburger} alt="menu" width={25} height={25} />
                </div>
            </nav>
        </header>
    );
};

export default Nav;
