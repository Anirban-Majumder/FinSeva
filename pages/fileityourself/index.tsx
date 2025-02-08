// @ts-nocheck
import DefaultLayout from "@/layouts/default";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabaseClient'; // Make sure to configure Supabase client
import DefaultLayout from "@/layouts/default";
import { 
  Card, 
  Input, 
  Select, 
  SelectItem, 
  Checkbox, 
  Button, 
} from '@nextui-org/react';
import { useTheme } from 'next-themes';
const DocsPage = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [assessmentYear, setAssessmentYear] = useState('2024-25');
  const [filingMode, setFilingMode] = useState('online');
  const [status, setStatus] = useState('individual');
  const [itrForm, setItrForm] = useState('itr1');
  const [filingReason, setFilingReason] = useState('taxableIncome');
  const [filingCondition, setFilingCondition] = useState([]);
  const [natureOfEmployment, setNatureOfEmployment] = useState(''); 
  const [grossSalary, setGrossSalary] = useState('');
  const [exemptAllowances, setExemptAllowances] = useState('');
  const [reliefIncome, setReliefIncome] = useState('');
  const [netSalary, setNetSalary] = useState('');
  const [deductions16, setDeductions16] = useState('');    
  const [donationsPaid, setDonationsPaid] = useState('');
  const [scientificResearch, setScientificResearch] = useState('');
  const [deduction80GG, setDeduction80GG] = useState('');
  const [providentFund, setProvidentFund] = useState('');
  const [deduction80CCD2, setDeduction80CCD2] = useState('');
  const [medicalInsurance, setMedicalInsurance] = useState('');
  const [higherEducationLoan, setHigherEducationLoan] = useState('');
  const [savingsInterest, setSavingsInterest] = useState('');
  const [incomeTaxPaid, setIncomeTaxPaid] = useState('');
  const [tds, setTds] = useState('');
  const [selfAssessmentTax, setSelfAssessmentTax] = useState('');
  const [advanceTax, setAdvanceTax] = useState('');
  const [taxableIncome, setTaxableIncome] = useState('');
  const [taxPayable, setTaxPayable] = useState('');
  const [rebate, setRebate] = useState('');
  const [surcharge, setSurcharge] = useState('');
  const [healthCess, setHealthCess] = useState('');
  const [totalTaxLiability, setTotalTaxLiability] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        try {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

          if (error) {
            setError('Failed to fetch data.');
            console.error('Error fetching data:', error); 
          } else {
            // Populate form fields with fetched data
            setUserId(data.userId || ''); 
            setPassword(data.password || ''); 
            setAssessmentYear(data.assessmentYear || '2024-25'); 
            setFilingMode(data.filingMode || 'online'); 
            setStatus(data.status || 'individual'); 
            setItrForm(data.itrForm || 'itr1'); 
            setFilingReason(data.filingReason || 'taxableIncome'); 
            setFilingCondition(data.filingCondition || []); 
            setNatureOfEmployment(data.natureOfEmployment || ''); 
            setGrossSalary(data.grossSalary || ''); 
            setExemptAllowances(data.exemptAllowances || ''); 
            setReliefIncome(data.reliefIncome || ''); 
            setNetSalary(data.netSalary || ''); 
            setDeductions16(data.deductions16 || ''); 
            setDonationsPaid(data.donationsPaid || ''); 
            setScientificResearch(data.scientificResearch || ''); 
            setDeduction80GG(data.deduction80GG || ''); 
            setProvidentFund(data.providentFund || ''); 
            setDeduction80CCD2(data.deduction80CCD2 || ''); 
            setMedicalInsurance(data.medicalInsurance || ''); 
            setHigherEducationLoan(data.higherEducationLoan || ''); 
            setSavingsInterest(data.savingsInterest || ''); 
            setIncomeTaxPaid(data.incomeTaxPaid || ''); 
            setTds(data.tds || ''); 
            setSelfAssessmentTax(data.selfAssessmentTax || ''); 
            setAdvanceTax(data.advanceTax || ''); 
            setTaxableIncome(data.taxableIncome || ''); 
            setTaxPayable(data.taxPayable || ''); 
            setRebate(data.rebate || ''); 
            setSurcharge(data.surcharge || ''); 
            setHealthCess(data.healthCess || ''); 
            setTotalTaxLiability(data.totalTaxLiability || ''); 
          }
        } catch (error) {
          setError('An error occurred while fetching data.');
          console.error('Error fetching data:', error); 
        }
      }
    };

    fetchData();
  }, []);

  const handleAssessmentYearChange = (event) => {
    setAssessmentYear(event.target.value);
  };

  const handleFilingConditionChange = (value) => {
    setFilingCondition(value.includes('condition') ? [...value, ...filingCondition] : value);
  };

  // ... (Other handlers)

  const isFormValid = () => {
    // Implement more robust validation logic here
    return (
      userId && 
      password && 
      assessmentYear && 
      filingMode && 
      status && 
      itrForm && 
      filingReason 
      // Add more validation checks as needed
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setError('Please fill out all required fields.');
      return;
    }

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('User not found');
      }

      const { data, error } = await supabase
        .from('income_tax_returns')
        .update({ 
          userId, 
          password, 
          assessmentYear, 
          filingMode, 
          status, 
          itrForm, 
          filingReason, 
          filingCondition, 
          natureOfEmployment, 
          grossSalary, 
          exemptAllowances, 
          reliefIncome, 
          netSalary, 
          deductions16, 
          donationsPaid, 
          scientificResearch, 
          deduction80GG, 
          providentFund, 
          deduction80CCD2, 
          medicalInsurance, 
          higherEducationLoan, 
          savingsInterest, 
          incomeTaxPaid, 
          tds, 
          selfAssessmentTax, 
          advanceTax, 
          taxableIncome, 
          taxPayable, 
          rebate, 
          surcharge, 
          healthCess, 
          totalTaxLiability 
        })
        .eq('id', user.id); 

      if (error) {
        setError('Failed to submit data. Please try again.');
        console.error('Error submitting data:', error); 
      } else {
        setError(''); 
        setIsSubmitted(true);
        router.push('/dashboard'); 
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Error submitting data:', error); 
    }
  }
 
  return (
    <DefaultLayout>
      <h2 className="text-2xl mb-4">E-Filing: Income Tax Returns</h2>
      <form onSubmit={handleSubmit}>

        <Card className={`p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6 ring-2 ring-green-500 ring-offset-2 ${theme === 'dark' ? 'bg-zinc-600' : 'bg-white'}`}>
          <h3 className="text-xl mb-4 text-blue-500 underline decoration-double underline-offset-4">E-File: Income Tax Returns</h3>

          <Select
            className="mb-4  bg-slate-400"
            label="Select Current Assessment Year"
            value={assessmentYear}
            onChange={handleAssessmentYearChange}
            fullWidth
          >
            <SelectItem   key="2024-25" value="2024-25">
              2024-25 (Current AY)
            </SelectItem>
            <SelectItem   key="2023-24" value="2023-24">
              2023-24
            </SelectItem>
            <SelectItem   key="2022-23" value="2022-23">
              2022-23
            </SelectItem>
          </Select>

          <Select
            className="mb-4  bg-slate-400"
            label="Select Mode of Filing"
            value={filingMode}
            fullWidth
          >
            <SelectItem   key="online" value="online">
              Online (Recommended)
            </SelectItem>
            <SelectItem   key="offline" value="offline">
              Offline
            </SelectItem>
          </Select>

          <Select
            className="mb-4  bg-slate-400"
            label="Select Status"
            value={status}
            fullWidth
          >
            <SelectItem   key="individual" value="individual">
              Individual
            </SelectItem>
            <SelectItem   key="huf" value="huf">
              HUF
            </SelectItem>
            <SelectItem   key="others" value="others">
              Others
            </SelectItem>
          </Select>

          <Select
            className="mb-4  bg-slate-400"
            label="Select ITR Form"
            value={itrForm}
            fullWidth
          >
            <SelectItem   key="itr1" value="itr1">
              ITR 1 (for salaried employees)
            </SelectItem>
            <SelectItem   key="itr2" value="itr2">
              ITR 2
            </SelectItem>
            <SelectItem   key="itr3" value="itr3">
              ITR 3
            </SelectItem>
            <SelectItem   key="itr4" value="itr4">
              ITR 4
            </SelectItem>
          </Select>

          <Select
            className="mb-4  bg-slate-400"
            label="Select Filing Reason"
            value={filingReason}
            fullWidth
          >
            <SelectItem   key="taxableIncome" value="taxableIncome">
              Taxable income is more than basic exemption limit
            </SelectItem>
            <SelectItem   key="condition" value="condition">
              Filing due to conditions as per Section 139(1)
            </SelectItem>
            <SelectItem   key="others" value="others">
              Others
            </SelectItem>
          </Select>
          {filingReason === 'condition' && (
            <div className="mb-4  bg-slate-400">
              <Checkbox value="foreignTravel" onChange={(e) => handleFilingConditionChange(e.target.checked ? [...filingCondition, 'foreignTravel'] : filingCondition.filter(item => item !== 'foreignTravel'))}>
                Incurred expenditure exceeding ₹2 lakhs for travel to a foreign country
              </Checkbox>
              <Checkbox value="electricity" onChange={(e) => handleFilingConditionChange(e.target.checked ? [...filingCondition, 'electricity'] : filingCondition.filter(item => item !== 'electricity'))}>
                Incurred expenditure exceeding ₹1 lakh on electricity
              </Checkbox>
              <Checkbox value="otherConditions" onChange={(e) => handleFilingConditionChange(e.target.checked ? [...filingCondition, 'otherConditions'] : filingCondition.filter(item => item !== 'otherConditions'))}>
                Other conditions as per Section 139(1)
              </Checkbox>
            </div>
          )}
        </Card>

        <Card className={`p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6 ring-2 ring-green-500 ring-offset-2  ${theme === 'dark' ? 'bg-zinc-600' : 'bg-white'}`}>
          <h3 className="text-xl mb-4 text-blue-500 underline decoration-double">Personal Information</h3>
          <h4 className="text-lg mb-2 text-blue-500 underline decoration-double">Profile</h4>
          <Input
            className="mb-4  bg-slate-400"
            label="First Name"
            fullWidth
            bordered={false}
            placeholder="Enter your First Name"
          />
          <Input
            className="mb-4  bg-slate-400"
            label="Middle Name"
            fullWidth
            bordered={false}
            placeholder="Enter your Middle Name"
          />
          <Input
            className="mb-4  bg-slate-400"
            label="Last Name"
            fullWidth
            bordered={false}
            placeholder="Enter your Last Name"
          />
          <Input className="mb-4  bg-slate-400" label="PAN" fullWidth bordered={false} placeholder="Enter your PAN" />
          <Input className="mb-4  bg-slate-400" label="DOB" type="date" fullWidth bordered={false} />
          <Input
            className="mb-4  bg-slate-400"
            label="Aadhaar No."
            fullWidth
            bordered={false}
            placeholder="Enter your Aadhaar Number"
          />
          <Input
            className="mb-4  bg-slate-400"
            label="Aadhaar Enrollment ID"
            fullWidth
            bordered={false}
            placeholder="Enter your Aadhaar Enrollment ID"
          />

          <h4 className="text-lg mt-4 mb-2 text-blue-500 underline decoration-double">Contact</h4>
          <Input
            className="mb-4  bg-slate-400"
            label="Address"
            fullWidth
            bordered={false}
            placeholder="Enter your Address"
          />
          <Input
            className="mb-4  bg-slate-400"
            label="Mobile No."
            type="tel"
            fullWidth
            bordered={false}
            placeholder="Enter your Mobile Number"
          />
          <Input
            className="mb-4  bg-slate-400"
            label="Email Address"
            type="email"
            fullWidth
            bordered={false}
            placeholder="Enter your Email Address"
          />

          <h4 className="text-lg mt-4 mb-2 text-blue-500 underline decoration-double">Nature of Employment</h4>
          <Select
            className="mb-4  bg-slate-400"
            label="Nature of Employment"
            value={natureOfEmployment}
            onChange={(value) => setNatureOfEmployment(value)} 
            fullWidth
            bordered={false}
            color="inherit"
          >
            <SelectItem   key="centralGovt" value="centralGovt">
              Central Govt
            </SelectItem>
            <SelectItem   key="stateGovt" value="stateGovt">
              State Govt
            </SelectItem>
            <SelectItem   key="psu" value="psu">
              Public Sector Undertaking
            </SelectItem>
            <SelectItem   key="cgPensioner" value="cgPensioner">
              CG Pensioner
            </SelectItem>
            <SelectItem   key="sgPensioner" value="sgPensioner">
              SG Pensioner
            </SelectItem>
            <SelectItem   key="psuPensioner" value="psuPensioner">
              PSU Pensioner
            </SelectItem>
            <SelectItem   key="otherPensioners" value="otherPensioners">
              Other Pensioners
            </SelectItem>
            <SelectItem   key="others" value="others">
              Others
            </SelectItem>
            <SelectItem   key="notApplicable" value="notApplicable">
              Not Applicable (e.g., Family Pension, etc.)
            </SelectItem>
          </Select>
        </Card>

        <Card className={`p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6 ring-2 ring-green-500 ring-offset-2 ${theme === 'dark' ? 'bg-zinc-600' : 'bg-white'}`}>
          <h3 className="text-xl mb-4 text-blue-500 underline decoration-double">Gross Total Income</h3>
          <Input
            className="mb-4  bg-slate-400"
            label="Gross Salary"
            fullWidth
            bordered={false}
            placeholder="Enter your Gross Salary"
            value={grossSalary}
            onChange={(e) => setGrossSalary(e.target.value)}
          />
          <Input
            className="mb-4  bg-slate-400"
            label="Exempt Allowances"
            fullWidth
            bordered={false}
            placeholder="Enter Exempt Allowances"
            value={exemptAllowances}
            onChange={(e) => setExemptAllowances(e.target.value)}
          />
          <Input
            className="mb-4  bg-slate-400"
            label="Income Claimed for Relief from Taxation u/s 89A"
            fullWidth
            bordered={false}
            placeholder="Enter Income Claimed for Relief from Taxation u/s 89A"
            value={reliefIncome}
            onChange={(e) => setReliefIncome(e.target.value)}
          />
          <Input
            className="mb-4  bg-slate-400"
            label="Net Salary"
            fullWidth
            bordered={false}
            placeholder="Enter Net Salary"
            value={netSalary}
            onChange={(e) => setNetSalary(e.target.value)}
          />
          <Input
            className="mb-4  bg-slate-400"
            label="Deductions u/s 16"
            fullWidth
            bordered={false}
            placeholder="Enter Deductions u/s 16"
            value={deductions16}
            onChange={(e) => setDeductions16(e.target.value)}
          />
        </Card>

        <Card className={`p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6 ring-2 ring-green-500 ring-offset-2 ${theme === 'dark' ? 'bg-zinc-600' : 'bg-white'}`}>
          <h3 className="text-xl mb-4 text-blue-500 underline decoration-double">Total Deductions</h3>
          <Input
            className="mb-4  bg-slate-400"
            label="Donations Paid"
            fullWidth
            bordered={false}
            placeholder="Enter Donations Paid"
            value={donationsPaid}
            onChange={(e) => setDonationsPaid(e.target.value)}
          />
          <Input
            className="mb-4  bg-slate-400"
            label="Scientific Research or Rural Development"
            fullWidth
            bordered={false}
            placeholder="Enter Scientific Research or Rural Development"
            value={scientificResearch}
            onChange={(e) => setScientificResearch(e.target.value)}
          />
          <Input
            className="mb-4  bg-slate-400"
            label="Deduction under Section 80GG"
            fullWidth
            bordered={false}
            placeholder="Enter Deduction under Section 80GG"
            value={deduction80GG}
            onChange={(e) => setDeduction80GG(e.target.value)}
          />
          <Input
            className="mb-4  bg-slate-400"
            label="Employee’s Share of Provident Fund"
            fullWidth
            bordered={false}
            placeholder="Enter Employee’s Share of Provident Fund"
            value={providentFund}
            onChange={(e) => setProvidentFund(e.target.value)}
          />
          <Input
            className="mb-4  bg-slate-400"
            label="Deduction under Section 80CCD(2)"
            fullWidth
            bordered={false}
            placeholder="Enter Deduction under Section 80CCD(2)"
            value={deduction80CCD2}
            onChange={(e) => setDeduction80CCD2(e.target.value)}
          />
          <Input
            className="mb-4  bg-slate-400"
            label="Medical Insurance Premium"
            fullWidth
            bordered={false}
            placeholder="Enter Medical Insurance Premium"
            value={medicalInsurance}
            onChange={(e) => setMedicalInsurance(e.target.value)}
          />
                    <Input
            className="mb-4  bg-slate-400"
            label="Interest on Loan for Higher Education"
            fullWidth
            bordered={false}
            placeholder="Enter Interest on Loan for Higher Education"
            value={higherEducationLoan}
            onChange={(e) => setHigherEducationLoan(e.target.value)}
          />
          <Input
            className="mb-4  bg-slate-400"
            label="Interest on Savings Bank Accounts"
            fullWidth
            bordered={false}
            placeholder="Enter Interest on Savings Bank Accounts"
            value={savingsInterest}
            onChange={(e) => setSavingsInterest(e.target.value)}
          />
        </Card>
        <Button
          className={`mt-6 w-full ${isFormValid() ? 'bg-green-500' : 'bg-gray-400'} hover:bg-green-600 text-white font-bold py-2 px-4 rounded`}
           onClick={() => { router.push('/incometaxtable'); }}
        >
          File Now
        </Button>
        {error && <p className="text-red-500">{error}</p>}
        {isSubmitted && <p className="text-green-500">Form submitted successfully!</p>}
      </form>
    </DefaultLayout>
  );
}

export default DocsPage;