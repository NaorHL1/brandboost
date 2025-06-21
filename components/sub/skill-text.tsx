"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      {/* Badge */}
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] rounded-lg mb-4"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[16px] font-semibold">
          הדיגיטל שלכם – בידיים מנוסות
        </h1>
      </motion.div>

      {/* Main Heading */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        בולטים בדיגיטל, גם בלי להיות מומחים
      </motion.div>

      {/* Motto */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="amatic text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        תנו לנו לטפל בדיגיטל, אתם תתמקדו בצמיחה
      </motion.div>
    </div>
  );
};