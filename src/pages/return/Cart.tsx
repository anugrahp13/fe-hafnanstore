/* eslint-disable react/prop-types */

import { ReturnTermsProps } from "../../types/ReturnTerms.type";

interface ReturnTermsType {
  returnterms: ReturnTermsProps[];
}
export const Cart: React.FC<ReturnTermsType> = ({ returnterms }) => {
  return (
    <>
      <div className="space-y-6">
        {returnterms.map((term) => (
          <div key={term.id} className="border-b pb-4">
            <h2 className="font-bold text-xl">{term.question}</h2>
            <div className="mt-2 text-gray-600 dark:text-white">
              {Array.isArray(term.answer) ? (
                <ul className="list-disc list-inside space-y-2">
                  {term.answer.map((subItem) => (
                    <li key={subItem.id} className="text-base">
                      {subItem.answer}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm">{term.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
