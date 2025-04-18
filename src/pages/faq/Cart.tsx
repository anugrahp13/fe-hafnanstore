// components/Cart.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useFaqStore } from "../../stores/useFaqStore";

export const Cart = () => {
  const { faqs } = useFaqStore();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {faqs.map((faq, index) => (
        <div key={faq.id} className="border-b border-gray-300">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left py-3 flex justify-between items-center focus:outline-none"
          >
            <span className="font-semibold">{faq.question}</span>
            <span>{openIndex === index ? <ChevronUp /> : <ChevronDown />}</span>
          </button>
          <motion.div
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={
              openIndex === index
                ? { maxHeight: 500, opacity: 1 }
                : { maxHeight: 0, opacity: 0 }
            }
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-3 text-gray-600 dark:text-gray-300">
              {Array.isArray(faq.answer) ? (
                <ul className="list-disc pl-5 space-y-2">
                  {faq.answer.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <strong>{subItem.name}:</strong> {subItem.answer}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{faq.answer}</p>
              )}
            </div>
          </motion.div>
        </div>
      ))}
    </>
  );
};
