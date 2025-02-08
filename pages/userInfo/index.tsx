// @ts-nocheck
import DefaultLayout from "@/layouts/default"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/router"

import { useState } from "react"

export default function TaxInformationForm() {
  const [formData, setFormData] = useState({
    grossSalary: "",
    fdIncome: { has: "no", amount: "" },
    rentalIncome: "",
    tds: { has: "no", amount: "" },
    investments: { has: "no", amount: "" },
    healthInsurance: { has: "no", amount: "" },
    educationLoan: { has: "no", amount: "" },
    homeLoanInterest: { has: "no", amount: "" },
    hraLta: { has: "no", amount: "" },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleRadioChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

  return (
    <DefaultLayout>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-2xl bg-gray-100 dark:bg-gray-900 rounded-3xl shadow-2xl p-10">
          <h2 className="text-center text-4xl font-extrabold text-green-700 dark:text-green-400 mb-6">HELP US TO KNOW YOU !!</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Gross Salary</label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white shadow-md focus:ring-2 focus:ring-green-500"
                value={formData.grossSalary}
                onChange={(e) => setFormData({ ...formData, grossSalary: e.target.value })}
              />
            </div>

            {[
              { label: "Income from FDs", name: "fdIncome" },
              { label: "TDS (Tax Deducted at Source)", name: "tds" },
              { label: "Total Investments in PF PPF LIC", name: "investments" },
              { label: "Health Insurance Premium", name: "healthInsurance" },
              { label: "Education Loan", name: "educationLoan" },
              { label: "Home Loan Interest", name: "homeLoanInterest" },
              { label: "HRA LTA (Leave Travel Allowance)", name: "hraLta" },
            ].map(({ label, name }) => (
              <div key={name} className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">{label}</label>
                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="yes"
                      checked={formData[name].has === "yes"}
                      onChange={() => handleRadioChange(name, { has: "yes", amount: formData[name].amount })}
                      className="w-5 h-5 text-green-500 focus:ring-green-400"
                    />
                    <span className="text-gray-700 dark:text-gray-300">Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="no"
                      checked={formData[name].has === "no"}
                      onChange={() => handleRadioChange(name, { has: "no", amount: "" })}
                      className="w-5 h-5 text-green-500 focus:ring-green-400"
                    />
                    <span className="text-gray-700 dark:text-gray-300">No</span>
                  </label>
                </div>
                {formData[name].has === "yes" && (
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={formData[name].amount}
                    onChange={(e) => handleRadioChange(name, { has: "yes", amount: e.target.value })}
                    className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white shadow-md focus:ring-2 focus:ring-green-500"
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full p-4 text-white font-bold bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 rounded-xl shadow-lg text-lg transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </DefaultLayout>
  )
}