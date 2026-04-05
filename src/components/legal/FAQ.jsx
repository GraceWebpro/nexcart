import { useState } from "react";
import { Helmet } from "react-helmet";

export const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Browse our products, add the items you like to your cart, and proceed to checkout. You can pay securely using credit/debit cards, PayPal, or other supported payment methods.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, PayPal, Apple Pay, and Google Pay. All payments are processed securely.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes! Once your order is confirmed, you will receive a tracking number via email to monitor your shipment until it arrives at your doorstep.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on most products. Items must be in their original condition and packaging. Please contact our support team to initiate a return.",
  },
  {
    question: "Is your website mobile-friendly?",
    answer:
      "Absolutely. Our e-commerce store is fully responsive and optimized for desktop, tablet, and mobile devices for a smooth shopping experience.",
  },
  {
    question: "Can I use products purchased for commercial purposes?",
    answer:
      "Depending on the product, commercial use may be allowed. Please check the product description or contact our support team for clarification.",
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 mt-10">

      <Helmet>
        <title>FAQ | NexCart</title>
        <meta
          name="description"
          content="Frequently asked questions about the QuickBite food ordering template."
        />
      </Helmet>

      <h1 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border dark:border-white/20 rounded-xl p-5 cursor-pointer transition hover:shadow-md"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">

              <h3 className="font-semibold text-lg">
                {faq.question}
              </h3>

              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>

            </div>

            {openIndex === index && (
              <p className="mt-4 text-gray-500">
                {faq.answer}
              </p>
            )}

          </div>
        ))}

      </div>

      <div className="text-center mt-16">
        <p className="text-gray-500 mb-4">
            Still have questions?
        </p>

        <a
            href="/contact"
            className="bg-primary text-white px-6 py-3 rounded-xl"
        >
            Contact Support
        </a>
        </div>
    </div>
  );
};

export default FAQ;