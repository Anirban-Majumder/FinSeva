import DefaultLayout from "@/layouts/default";
import { Card } from '@nextui-org/react';
import { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const tips = [
  "Under Section 80GG, you can claim up to ₹50,000 per month (₹60,000 per year) if you're a salaried employee and don't get HRA. Have you considered claiming this deduction if you're a salaried employee without HRA?",

"The rebate has been increased from ₹5 Lakhs to ₹7 Lakhs for people under the New Tax Regime. This means no income tax if you earn up to ₹7 Lakhs. The ₹5 Lakhs rebate still applies under the old tax system. Are you aware of these changes in the rebate amounts under the different tax regimes?",

"You are eligible under Section 10 of the Income Tax Act, which offers exemptions for certain incomes, like house rent allowance (HRA), leave travel allowance (LTA), agricultural income, and gratuity. Gratuity for non-government employees can be exempt up to ₹20,00,000. Do you know about the exemptions available under Section 10 of the Income Tax Act?",

"Chapter VI-A of the Income Tax Act allows deductions to help you save and invest. For example, Section 80C lets you deduct up to ₹1,50,000 for investments like PPF, ELSS, and LIC. Section 80D gives deductions for health insurance premiums (₹25,000 or ₹50,000 for senior citizens), and Section 80E offers deductions on education loan interest with no limit. Are you utilizing the deductions available under Chapter VI-A of the Income Tax Act?",

"Under Section 80C, you will get a deduction of up to ₹1,50,000 for investments and expenses like PPF, EPF, life insurance, ELSS, NSC, and home loan principal repayment. This benefit is available to individuals and Hindu Undivided Families (HUFs). Have you considered using Section 80C deductions to reduce your taxable income?",

"Did you know that tax savings through Flexi Benefits in India depend on things like meal vouchers (tax-free up to ₹50 per meal), leave travel allowance (LTA, which is exempt based on actual travel costs), and transport allowance (₹1,600 per month, or ₹19,200 per year)? These components can help reduce your taxable income when structured properly. Are you taking advantage of Flexi Benefits to maximize your tax savings?",

"Tax savings for housing income in India include deductions like Section 24(b), which allows up to ₹2,00,000 for home loan interest on self-occupied properties. There are also exemptions on rental income, such as a 30% standard deduction on annual rental value. For other incomes, you can get exemptions for agricultural income and deductions under Section 80TTB, which offers up to ₹50,000 for interest earned by senior citizens on deposits. Have you explored the tax savings options for housing income and other incomes in India?"
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
