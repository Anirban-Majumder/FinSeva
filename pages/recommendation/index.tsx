import DefaultLayout from "@/layouts/default";
import { Card } from '@nextui-org/react';
import { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const tips = [
  "Did you know that under Section 80GG, you can claim up to ₹50,000 per month (₹60,000 per year) if you're a salaried employee and don't get HRA?",
  "Did you know the rebate has increased from ₹5 Lakhs to ₹7 Lakhs for people under the New Tax Regime? This means no income tax if you earn up to ₹7 Lakhs. The ₹5 Lakhs rebate still applies under the old tax system.",
  "Did you know that Section 10 of the Income Tax Act offers exemptions for certain incomes, like house rent allowance (HRA), leave travel allowance (LTA), agricultural income, and gratuity? For example, you can get an HRA exemption of up to ₹1,00,000 a year or 40%-50% of your basic salary, depending on where you live. Gratuity for non-government employees can be exempt up to ₹20,00,000.",
  "Did you know Chapter VI-A of the Income Tax Act allows deductions to help you save and invest? For example, Section 80C lets you deduct up to ₹1,50,000 for investments like PPF, ELSS, and LIC. Section 80D gives deductions for health insurance premiums (₹25,000 or ₹50,000 for senior citizens), and Section 80E offers deductions on education loan interest with no limit.",

  "Did you know that under Section 80C, you can get a deduction of up to ₹1,50,000 for investments and expenses like PPF, EPF, life insurance, ELSS, NSC, and home loan principal repayment? This benefit is available to individuals and Hindu Undivided Families (HUFs)",

  
"Did you know that tax savings through Flexi Benefits in India depend on things like meal vouchers (tax-free up to ₹50 per meal), leave travel allowance (LTA, which is exempt based on actual travel costs), and transport allowance (₹1,600 per month, or ₹19,200 per year)? These components can help reduce your taxable income when structured properly.",
  " Did you know that under Section 80C, you can get a deduction of up to ₹1,50,000 for investments and expenses like PPF, EPF, life insurance, ELSS, NSC, and home loan principal repayment? This benefit is available to individuals and Hindu Undivided Families (HUFs).you know tax savings under housing income in India include deductions like **Section 24(b)**, which allows up to ₹2,00,000 on home loan interest for self-occupied properties, and exemptions for rental income, such as a 30% standard deduction on annual rental value. For other income, savings include exemptions for agricultural income and deductions under **Section 80TTB**, allowing up to ₹50,000 for interest earned by senior citizens on deposits."
];

export default function DocsPage() {
  const [currentTip, setCurrentTip] = useState(0);

  const handleNext = () => {
    setCurrentTip((prevTip) => (prevTip + 1) % tips.length);
  };

  const handlePrevious = () => {
    setCurrentTip((prevTip) => (prevTip - 1 + tips.length) % tips.length);
  };

  return (
    <DefaultLayout>
      <div className="flex items-center justify-center min-h-screen">
        <Card
          className="glass-morphism p-8 rounded-lg shadow-lg ring-1 ring-green-500"
          style={{ width: '400px', height: '600px', position: 'relative', overflow: 'hidden' }}
        >
          <div className="absolute top-2 right-2 text-gray-500 text-xs">
            {currentTip + 1} of {tips.length}
          </div>
          <h2 className="text-2xl font-bold flex items-center justify-center">
            <FaLightbulb className="mr-2" /> Recommendations
          </h2>
          <p className="mt-4 text-center">{tips[currentTip]}</p>
          <button 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
            onClick={handlePrevious}
          >
            <FaArrowLeft />
          </button>
          <button 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full"
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
          <img src="https://i.postimg.cc/gjxWfZdc/saving.png"  alt='saving' className="mx-auto " />
        </Card>
      </div>
    </DefaultLayout>
  );
}
