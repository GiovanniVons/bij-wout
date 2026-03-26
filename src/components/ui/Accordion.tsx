"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div>
      {items.map((item, i) => (
        <div
          key={i}
          className="border-t border-[var(--accordion-border)]"
          style={i === items.length - 1 ? { borderBottom: "var(--border-width-thin) solid var(--accordion-border)" } : undefined}
        >
          <button
            id={`faq-btn-${i}`}
            onClick={() => toggle(i)}
            className="flex w-full items-center justify-between py-[var(--space-5)] cursor-pointer hover:bg-[var(--accordion-hover-bg)] transition-colors duration-200 text-left"
            aria-expanded={openIndex === i}
            aria-controls={`faq-panel-${i}`}
          >
            <span
              className="font-[var(--font-display)] text-[length:var(--accordion-question-size)] font-[number:var(--accordion-question-weight)] text-[var(--accordion-question-color)]"
            >
              {item.question}
            </span>
            <span
              className="text-[length:var(--font-size-body-lg)] text-[var(--accordion-icon-color)] ml-[var(--space-4)] shrink-0 transition-transform duration-250 ease-out"
              style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
                initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="font-[var(--font-body)] text-[length:var(--accordion-answer-size)] leading-[var(--accordion-answer-line-height)] text-[var(--accordion-answer-color)] pt-[var(--space-2)] pb-[var(--space-4)] max-w-[36em]">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
