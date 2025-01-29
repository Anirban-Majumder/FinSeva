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

      <Card className="p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6">
        <h3 className="text-xl mb-4">Log In</h3>
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

      <Card className="p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6">
        <h3 className="text-xl mb-4">E-File: Income Tax Returns</h3>

        <Select
          className="mb-4"
          label="Select Current Assessment Year"
          value={assessmentYear}
          onChange={handleAssessmentYearChange}
          fullWidth
          bordered={false}
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

        <RadioGroup
          className="mb-4"
          label="Select Mode of Filing"
          value={filingMode}
          onChange={setFilingMode}
          bordered={false}
        >
          <Radio value="online">Online (Recommended)</Radio>
          <Radio value="offline">Offline</Radio>
        </RadioGroup>

        <RadioGroup className="mb-4" value={status} onChange={setStatus} bordered={false}>
          <Radio value="individual">Individual</Radio>
          <Radio value="huf">HUF</Radio>
          <Radio value="others">Others</Radio>
          <Radio value="notApplicable">Not Applicable (e.g., Family Pension, etc.)</Radio>
          </RadioGroup>

        <RadioGroup className="mb-4" value={itrForm} onChange={setItrForm} bordered={false}>
          <Radio value="itr1">ITR 1 (for salaried employees)</Radio>
          <Radio value="itr2">ITR 2</Radio>
          <Radio value="itr3">ITR 3</Radio>
          <Radio value="itr4">ITR 4</Radio>
        </RadioGroup>

        <RadioGroup
          className="mb-4"
          value={filingReason}
          onChange={setFilingReason}
          bordered={false}
        >
          <Radio value="taxableIncome">
            Taxable income is more than basic exemption limit
          </Radio>
          <Radio value="condition">
            Filing due to conditions as per Section 139(1)
          </Radio>
          <Radio value="others">Others</Radio>
        </RadioGroup>
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

      <Card className="p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6">
        <h3 className="text-xl mb-4">Personal Information</h3>
        <h4 className="text-lg mb-2">Profile</h4>
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

        <h4 className="text-lg mt-4 mb-2">Contact</h4>
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

        <h4 className="text-lg mt-4 mb-2">Nature of Employment</h4>
        <RadioGroup className="mb-4" bordered={false}>
          <Radio value="centralGovt">Central Govt</Radio>
          <Radio value="stateGovt">State Govt</Radio>
          <Radio value="psu">Public Sector Undertaking</Radio>
          <Radio value="cgPensioner">CG Pensioner</Radio>
          <Radio value="sgPensioner">SG Pensioner</Radio>
          <Radio value="psuPensioner">PSU Pensioner</Radio>
          <Radio value="otherPensioners">Other Pensioners</Radio>
          <Radio value="others">Others</Radio>
          <Radio value="notApplicable">Not Applicable (e.g., Family Pension, etc.)</Radio>
        </RadioGroup>
      </Card>

      <Card className="p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6">
        <h3 className="text-xl mb-4">Gross Total Income</h3>
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

      <Card className="p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6">
        <h3 className="text-xl mb-4">Total Deductions</h3>
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

      <Card className="p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6">
        <h3 className="text-xl mb-4">Tax Paid</h3>
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

      <Card className="p-4 bg-gray-100 backdrop-blur-md rounded-lg shadow-md mb-6">
        <h3 className="text-xl mb-4">Total Tax Liability</h3>
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