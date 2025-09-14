'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <button
            className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <h3 className="text-lg font-medium text-gray-900 pr-4">{item.question}</h3>
            <ChevronDown 
              className={cn(
                'h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0',
                openIndex === index && 'rotate-180'
              )} 
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5">
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}