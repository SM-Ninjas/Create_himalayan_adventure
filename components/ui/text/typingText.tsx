"use client";

import { textContainer, textVariant2 } from "@/lib/motion";
import { motion } from "framer-motion";

interface TextProps {
  title: string;
  textStyles?: string;
}

export const TypingText = ({ title, textStyles }: TextProps) => (
  <motion.p
    variants={textContainer}
    className={`text-sm ${textStyles} text-blue-600`}
  >
    {Array.from(title).map((letter, i) => (
      <motion.span variants={textVariant2} key={i}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: TextProps) => (
  <motion.h3
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`${textStyles} text-lg font-bold md:text-2xl`}
  >
    {title}
  </motion.h3>
);
