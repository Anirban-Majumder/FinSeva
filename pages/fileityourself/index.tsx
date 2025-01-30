// @ts-nocheck
import { useState } from 'react';
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {
  Card,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Button,
  RadioGroup,
  Radio,
} from '@nextui-org/react';

export default function DocsPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [assessmentYear, setAssessmentYear] = useState('2024-25');
  const [filingMode, setFilingMode] = useState('online');
  const [status, setStatus] = useState('individual');
  const [itrForm, setItrForm] = useState('itr1');
  const [filingReason, setFilingReason] = useState('taxableIncome');
  const [filingCondition, setFilingCondition] = useState([]);
  const [natureOfEmployment, setNatureOfEmployment] = useState(''); 
  const [exemptions, setExemptions] = useState({
    travel: '',
    compensatory: '',
    houseRent: '',
    leaveTravel: '',
  });

  const handleAssessmentYearChange = (event) => {
    setAssessmentYear(event.target.value);
  };

  const handleFilingConditionChange = (value) => {
    setFilingCondition(
      value.includes('condition') ? [...value, ...filingCondition] : value
    );
  };

  const handleExemptionChange = (field, value) => {
    setExemptions((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    return userId && password && assessmentYear && filingMode && status && itrForm && filingReason;
  };

  return (
    <DefaultLayout>
      <h2 className="text-2xl mb-4">E-Filing : Income Tax Returns</h2>

      <Card className="p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6 ring-2 ring-green-500 ring-offset-4">
        <h3 className="text-xl mb-4 text-blue-500 underline decoration-double  underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4  ">Log In</h3>
        <Input
          className="mb-4"
          label="User ID (PAN number)"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          fullWidth
          placeholder="Enter your PAN number"
        />
        <Input
          className="mb-4"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          bordered={false}
          placeholder="Enter your password"
        />
      </Card>

      <Card className="p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6 ring-2 ring-green-500 ring-offset-4 ">
        <h3 className="text-xl mb-4 text-blue-500 underline decoration-double  underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4  ">E-File: Income Tax Returns</h3>

        <Select
          className="mb-4"
          label="Select Current Assessment Year"
          value={assessmentYear}
          onChange={handleAssessmentYearChange}
          fullWidth
          bordered={false}
          color="inherit" // Set text color to inherit from theme
        >
          <SelectItem key="2024-25" value="2024-25">
            2024-25 (Current AY)
          </SelectItem>
          <SelectItem key="2023-24" value="2023-24">
            2023-24
          </SelectItem>
          <SelectItem key="2022-23" value="2022-23">
            2022-23
          </SelectItem>
        </Select>

        <Select
          className="mb-4"
          label="Select Mode of Filing"
          value={filingMode}
          onChange={setFilingMode}
          fullWidth
          bordered={false}
          color="inherit" // Set text color to inherit from theme
        >
          <SelectItem key="online" value="online">
            Online (Recommended)
          </SelectItem>
          <SelectItem key="offline" value="offline">
            Offline
          </SelectItem>
        </Select>

        <Select
          className="mb-4"
          label="Select Status"
          value={status}
          onChange={setStatus}
          fullWidth
          bordered={false}
          color="inherit" // Set text color to inherit from theme
        >
          <SelectItem key="individual" value="individual">
            Individual
          </SelectItem>
          <SelectItem key="huf" value="huf">
            HUF
          </SelectItem>
          <SelectItem key="others" value="others">
            Others
          </SelectItem>
        </Select>

        <Select
          className="mb-4"
          label="Select ITR Form"
          value={itrForm}
          onChange={setItrForm}
          fullWidth
          bordered={false}
          color="inherit" // Set text color to inherit from theme
        >
          <SelectItem key="itr1" value="itr1">
            ITR 1 (for salaried employees)
          </SelectItem>
          <SelectItem key="itr2" value="itr2">
            ITR 2
          </SelectItem>
          <SelectItem key="itr3" value="itr3">
            ITR 3
          </SelectItem>
          <SelectItem key="itr4" value="itr4">
            ITR 4
          </SelectItem>
        </Select>

        <Select
          className="mb-4"
          label="Select Filing Reason"
          value={filingReason}
          onChange={setFilingReason}
          fullWidth
          bordered={false}
          color="inherit" // Set text color to inherit from theme
        >
          <SelectItem key="taxableIncome" value="taxableIncome">
            Taxable income is more than basic exemption limit
          </SelectItem>
          <SelectItem key="condition" value="condition">
            Filing due to conditions as per Section 139(1)
          </SelectItem>
          <SelectItem key="others" value="others">
            Others
          </SelectItem>
        </Select>
        {filingReason === 'condition' && (
          <div className="mb-4">
            <Checkbox value="foreignTravel">
              Incurred expenditure exceeding ₹2 lakhs for travel to a foreign country
            </Checkbox>
            <Checkbox value="electricity">
              Incurred expenditure exceeding ₹1 lakh on electricity
            </Checkbox>
            <Checkbox value="otherConditions">
              Other conditions as per Section 139(1)
            </Checkbox>
          </div>
        )}
      </Card>

      <Card className="p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6 ring-2 ring-green-500 ring-offset-4">
        <h3 className="text-xl mb-4  text-blue-500 underline decoration-double  ">Personal Information</h3>
        <h4 className="text-lg mb-2 text-blue-500 underline decoration-double  ">Profile</h4>
        <Input
          className="mb-4"
          label="First Name"
          fullWidth
          bordered={false}
          placeholder="Enter your First Name"
        />
        <Input
          className="mb-4"
          label="Middle Name"
          fullWidth
          bordered={false}
          placeholder="Enter your Middle Name"
        />
        <Input
          className="mb-4"
          label="Last Name"
          fullWidth
          bordered={false}
          placeholder="Enter your Last Name"
        />
        <Input className="mb-4" label="PAN" fullWidth bordered={false} placeholder="Enter your PAN" />
        <Input className="mb-4" label="DOB" type="date" fullWidth bordered={false} />
        <Input
          className="mb-4"
          label="Aadhaar No."
          fullWidth
          bordered={false}
          placeholder="Enter your Aadhaar Number"
        />
        <Input
          className="mb-4"
          label="Aadhaar Enrollment ID"
          fullWidth
          bordered={false}
          placeholder="Enter your Aadhaar Enrollment ID"
        />

        <h4 className="text-lg mt-4 mb-2 text-blue-500 underline decoration-double  ">Contact</h4>
        <Input
          className="mb-4"
          label="Address"
          fullWidth
          bordered={false}
          placeholder="Enter your Address"
        />
        <Input
          className="mb-4"
          label="Mobile No."
          type="tel"
          fullWidth
          bordered={false}
          placeholder="Enter your Mobile Number"
        />
        <Input
          className="mb-4"
          label="Email Address"
          type="email"
          fullWidth
          bordered={false}
          placeholder="Enter your Email Address"
        />

        <h4 className="text-lg mt-4 mb-2 text-blue-500 underline decoration-double  ">Nature of Employment</h4>
        
        <Select
  className="mb-4"
  label="Nature of Employment"
  value={natureOfEmployment} // Assuming you have a state variable for this
  onChange={(value) => setNatureOfEmployment(value)} 
  fullWidth
  bordered={false}
  color="inherit" // Set text color to inherit from theme
>
  <SelectItem key="centralGovt" value="centralGovt">
    Central Govt
  </SelectItem>
  <SelectItem key="stateGovt" value="stateGovt">
    State Govt
  </SelectItem>
  <SelectItem key="psu" value="psu">
    Public Sector Undertaking
  </SelectItem>
  <SelectItem key="cgPensioner" value="cgPensioner">
    CG Pensioner
  </SelectItem>
  <SelectItem key="sgPensioner" value="sgPensioner">
    SG Pensioner
  </SelectItem>
  <SelectItem key="psuPensioner" value="psuPensioner">
    PSU Pensioner
  </SelectItem>
  <SelectItem key="otherPensioners" value="otherPensioners">
    Other Pensioners
  </SelectItem>
  <SelectItem key="others" value="others">
    Others
  </SelectItem>
  <SelectItem key="notApplicable" value="notApplicable">
    Not Applicable (e.g., Family Pension, etc.)
  </SelectItem>
</Select>
      </Card>

      <Card className="p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6 ring-2 ring-green-500 ring-offset-4">
        <h3 className="text-xl mb-4 text-blue-500 underline decoration-double  underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 ">Gross Total Income</h3>
        <Input
          className="mb-4"
          label="Gross Salary"
          fullWidth
          bordered={false}
          placeholder="Enter your Gross Salary"
        />
        <Input
          className="mb-4"
          label="Exempt Allowances"
          fullWidth
          bordered={false}
          placeholder="Enter Exempt Allowances"
        />
        <Input
          className="mb-4"
          label="Income Claimed for Relief from Taxation u/s 89A"
          fullWidth
          bordered={false}
          placeholder="Enter Income Claimed for Relief from Taxation u/s 89A"
        />
        <Input
          className="mb-4"
          label="Net Salary"
          fullWidth
          bordered={false}
          placeholder="Enter Net Salary"
        />
        <Input
          className="mb-4"
          label="Deductions u/s 16"
          fullWidth
          bordered={false}
          placeholder="Enter Deductions u/s 16"
        />
      </Card>

      <Card className="p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6 ring-2 ring-green-500 ring-offset-4">
        <h3 className="text-xl mb-4 text-blue-500 underline decoration-double  underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 ">Total Deductions</h3>
        <Input
          className="mb-4"
          label="Donations Paid"
          fullWidth
          bordered={false}
          placeholder="Enter Donations Paid"
        />
        <Input
          className="mb-4"
          label="Scientific Research or Rural Development"
          fullWidth
          bordered={false}
          placeholder="Enter Scientific Research or Rural Development"
        />
        <Input
          className="mb-4"
          label="Deduction under Section 80GG"
          fullWidth
          bordered={false}
          placeholder="Enter Deduction under Section 80GG"
        />
        <Input
          className="mb-4"
          label="Employee’s Share of Provident Fund"
          fullWidth
          bordered={false}
          placeholder="Enter Employee’s Share of Provident Fund"
        />
        <Input
          className="mb-4"
          label="Deduction under Section 80CCD(2)"
          fullWidth
          bordered={false}
          placeholder="Enter Deduction under Section 80CCD(2)"
        />
        <Input
          className="mb-4"
          label="Medical Insurance Premium"
          fullWidth
          bordered={false}
          placeholder="Enter Medical Insurance Premium"
        />
        <Input
          className="mb-4"
          label="Interest on Loan for Higher Education"
          fullWidth
          bordered={false}
          placeholder="Enter Interest on Loan for Higher Education"
        />
        <Input
          className="mb-4"
          label="Interest on Savings Bank Accounts"
          fullWidth
          bordered={false}
          placeholder="Enter Interest on Savings Bank Accounts"
        />
      </Card>

      <Card className="p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6 ring-2 ring-green-500 ring-offset-4">
        <h3 className="text-xl mb-4 text-blue-500 underline decoration-double  underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 ">Tax Paid</h3>
        <Input
          className="mb-4"
          label="Income Tax Paid"
          fullWidth
          bordered={false}
          placeholder="Enter Income Tax Paid"
        />
        <Input
          className="mb-4"
          label="TDS"
          fullWidth
          bordered={false}
          placeholder="Enter TDS"
        />
        <Input
          className="mb-4"
          label="Self Assessment Tax"
          fullWidth
          bordered={false}
          placeholder="Enter Self Assessment Tax"
        />
        <Input
          className="mb-4"
          label="Advance Tax"
          fullWidth
          bordered={false}
          placeholder="Enter Advance Tax"
        />
      </Card>

      <Card className="p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6 ring-2 ring-green-500 ring-offset-4">
        <h3 className="text-xl mb-4 text-blue-500 underline decoration-double  underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 underline-offset-4 ">Total Tax Liability</h3>
        <Input
          className="mb-4"
          label="Taxable Income"
          fullWidth
          bordered={false}
          placeholder="Enter Taxable Income"
        />
        <Input
          className="mb-4"
          label="Tax Payable"
          fullWidth
            bordered={false}
            placeholder="Enter Tax Payable"
          />
          <Input
          className="mb-4"
          label="Rebate"
          fullWidth
          bordered={false}
          placeholder="Enter Rebate"
        />
        <Input
          className="mb-4"
          label="Surcharge"
          fullWidth
          bordered={false}
          placeholder="Enter Surcharge"
        />
        <Input
          className="mb-4"
          label="Health and Education Cess"
          fullWidth
          bordered={false}
          placeholder="Enter Health and Education Cess"
        />
        <Input
          className="mb-4"
          label="Total Tax Liability"
          fullWidth
          bordered={false}
          placeholder="Enter Total Tax Liability"
        />
      </Card>

      <Button
        className={`mt-6 w-full ${isFormValid() ? 'bg-green-500' : 'bg-gray-400'} hover:bg-green-600 text-white font-bold py-2 px-4 rounded`}
        disabled={!isFormValid()}
      >
        File Now
      </Button>
    </DefaultLayout>
  );
}