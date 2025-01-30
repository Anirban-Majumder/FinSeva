import DefaultLayout from "@/layouts/default";
import { Card } from '@nextui-org/react';
import { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const tips = [
  "Do you know under section 80GG you can claim up to ₹5000 per month (₹60000 per annum) if you are a salaried employee but do not get HRA.",
  "Do you know rebate has been increased from 5 Lakhs to 7 Lakhs for assesses under New Tax Regime, which means there is no Income tax up to income of 7 Lakhs. Rebate up to 5 lakhs Income would continue under the old tax Regime.",
  "Do you know under Section 10 of the Income Tax Act, India provides exemptions for specific types of income, such as house rent allowance (HRA), leave travel allowance (LTA), agricultural income, and gratuity. For example, HRA is exempt up to the least of ₹1,00,000 per annum or 40%-50% of basic salary (based on location), and gratuity for non-government employees is exempt up to ₹20,00,000.",
  "Do you know under Chapter VI-A of the Income Tax Act, India allows deductions from gross total income to encourage savings and investments. Key sections include Section 80C, which provides a deduction of up to ₹1,50,000 for investments in instruments like PPF, ELSS, and LIC; Section 80D, allowing deductions for health insurance premiums up to ₹25,000 (₹50,000 for senior citizens); and Section 80E, offering deductions on interest paid on education loans without any upper limit.",
  "Do you know under Section 80C of the Income Tax Act, India allows a maximum deduction of ₹1,50,000 from taxable income for investments and expenses such as Public Provident Fund (PPF), Employee Provident Fund (EPF), Life Insurance Premiums, Equity Linked Savings Schemes (ELSS), National Savings Certificates (NSC), and repayment of principal on home loans. This benefit is available to individual taxpayers and Hindu Undivided Families (HUFs).",
  "Do you know tax savings under Flexi Benefits in India depend on specific allowances and exemptions, such as meal vouchers (tax-free up to ₹50 per meal), leave travel allowance (LTA, exempt based on actual travel costs for eligible trips), and transport allowance (₹1,600 per month, or ₹19,200 annually). These components, when structured effectively within a salary package, can significantly reduce taxable income within the prescribed limits.",
  "Do you know tax savings under housing income in India include deductions like **Section 24(b)**, which allows up to ₹2,00,000 on home loan interest for self-occupied properties, and exemptions for rental income, such as a 30% standard deduction on annual rental value. For other income, savings include exemptions for agricultural income and deductions under **Section 80TTB**, allowing up to ₹50,000 for interest earned by senior citizens on deposits."
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
