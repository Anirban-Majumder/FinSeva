// @ts-nocheck
import { useState } from 'react';
import DefaultLayout from '@/layouts/default';
import { Card } from '@nextui-org/react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/router';

const questions = [
  { id: 1, label: "Gross salary", type: "text" },
  { id: 2, label: "Income from other source?", type: "radio", options: ["Yes", "No"] },
  { id: 3, label: "Income from house property?", type: "checkbox" },
  { id: 4, label: "Professional tax", type: "text" },
];

export default function GetUserInfo() {
<<<<<<< HEAD
  const router = useRouter();
  const [responses, setResponses] = useState({});
=======

  const [responses, setResponses] = useState<{ [key: number]: string | boolean }>({});
>>>>>>> 8efc6bb (made ui better)
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (id, value) => setResponses({ ...responses, [id]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const grossSalary = responses[1];
    const incomeFromOtherSource = responses[2];
    const incomeFromHouseProperty = responses[3];
    const professionalTax = responses[4];

    if (isNaN(grossSalary) || isNaN(professionalTax)) {
      setError('Gross salary and Professional tax must be valid numbers.');
      return;
    }
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('User not found');}
      const { data, error } = await supabase
        .from('profiles')
        .update(
          {
            
            gross_salary: parseInt(grossSalary),
            income_from_other_sources: incomeFromOtherSource,
            income_from_house_property: incomeFromHouseProperty,
            professional_tax: parseInt(professionalTax),
          },
      ).eq('id', user.id);

      if (error) {
        setError('Failed to submit data. Please try again.');
      } else {
        setError('');
        setIsSubmitted(true);  // Set the submitted state to true
        router.push('/dashboard');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case "text":
        return (
          <input
            type="text"
            placeholder={question.label}
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => handleChange(question.id, e.target.value)}
          />
        );
      case "radio":
        return question.options.map((option) => (
          <div key={option} className="flex items-center">
            <input
              type="radio"
              name={question.label}
              value={option}
              className="mr-2"
              checked={responses[question.id] === option}
              onChange={() => handleChange(question.id, option)}
            />
            <label>{option}</label>
          </div>
        ));
      case "checkbox":
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={responses[question.id] || false}
              onChange={(e) => handleChange(question.id, e.target.checked)}
            />
            <label>{question.label}</label>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="flex flex-col justify-center text-4xl font-bold text-zinc-400 my-8">HELP US TO KNOW YOU !!</h1>
        <Card className="max-w-xl w-full bg-[#EEF2FF] text-black p-6 shadow-lg rounded">
          <h2 className="text-2xl font-bold mb-6 text-[#37b50c]"><i>Fill Your Information</i></h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {questions.map((question) => (
              <div key={question.id}>
                <label className="block text-sm font-medium text-gray-700 mb-2">{question.label}</label>
                {renderQuestion(question)}
              </div>
            ))}
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="bg-[#37b50c] text-white w-full py-3 border-4 border-double rounded-lg border-black-500">Submit</button>
          </form>
        </Card>
        {isSubmitted && (
          <div className="mt-6">
            <img src="/path-to-your-done-animation.gif" alt="Done" />
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}
