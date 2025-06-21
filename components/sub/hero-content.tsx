"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      dir="rtl"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      {/* טקסט ותוכן */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-right">
        {/* תיבת פתיחה */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex items-center gap-2 py-[8px] px-[10px] border border-[#7042f88b] opacity-90 w-fit"
        >
          <h1 className="Welcome-text text-[13px] whitespace-nowrap">
            השותפים הדיגיטליים שמגדילים לך את ההכנסות
          </h1>
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
        </motion.div>

        {/* כותרת ראשית */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl font-extrabold text-white max-w-[650px]">
          <span>
            ביחד יוצרים{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              שיווק מדויק
            </span>{" "}
            שמביא לקוחות איכותיים.
          </span>


        </motion.div>

        {/* תיאור קצר */}
        <motion.p
          variants={slideInFromRight(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          אתר חד שמציג אתכם בדיוק כמו שרציתם, פיד שיגרום לאנשים לעצור וללחוץ, סרטונים שמספיקים חמש שניות כדי לגרום לשיתוף, וקמפיינים ממומנים שמחזירים את ההשקעה עוד לפני שהחודש נגמר — כולם מתחברים למערכת אחת שמביאה לכם לקוחות באופן קבוע ומגדילה את ההכנסות בלי שתצטרכו לרדוף אחריהם.
        </motion.p>

        {/* כפתור פעולה */}
        <motion.a
          variants={slideInFromRight(1)}
          href="#contact"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          קבעו פגישת ייעוץ חינם
        </motion.a>
      </div >

      {/* תמונה / אילוסטרציה */}
      < motion.div
        variants={slideInFromLeft(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="אילוסטרציה של שפות תכנות"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
          priority
        />
      </motion.div >
    </motion.div >
  );
};
