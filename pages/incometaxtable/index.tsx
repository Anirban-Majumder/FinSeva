'use client'
import DefaultLayout from "@/layouts/default";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Card,
  CardHeader,
  CardBody
} from "@nextui-org/react"

export default function IncomeTaxTable() {
  return (
    <DefaultLayout>
    <div className="container mx-auto p-8">
      <Card className="w-full">
        <CardHeader className="flex justify-center">
          <h1 className="text-2xl font-bold">Income Tax Comparison</h1>
        </CardHeader>
        <CardBody>
          <Table 
            aria-label="Income tax comparison table"
            shadow="none"
            className="min-w-full"
          >
            <TableHeader>
              <TableColumn>Particulars</TableColumn>
              <TableColumn className="text-right ring ring-green-500 border border-green-500">Old Regime (₹)</TableColumn>
              <TableColumn className="text-right ring ring-blue-500 border border-blue-500">New Regime (₹)</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Gross Undeducted Income</TableCell>
                <TableCell className="text-right ring ring-green-500 border border-green-500">12,00,000</TableCell>
                <TableCell className="text-right ring ring-blue-500 border border-blue-500">12,00,000</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Section 10 Exemptions</TableCell>
                <TableCell className="text-right ring ring-green-500 border border-green-500">1,20,000</TableCell>
                <TableCell className="text-right ring ring-blue-500 border border-blue-500">20,000</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Chapter VI-A Deductions</TableCell>
                <TableCell className="text-right ring ring-green-500 border border-green-500">50,000</TableCell>
                <TableCell className="text-right ring ring-blue-500 border border-blue-500">40,000</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>80C Deductions</TableCell>
                <TableCell className="text-right ring ring-green-500 border border-green-500">1,50,000</TableCell>
                <TableCell className="text-right ring ring-blue-500 border border-blue-500">0</TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell>Housing/Other Income</TableCell>
                <TableCell className="text-right ring ring-green-500 border border-green-500">40,000</TableCell>
                <TableCell className="text-right ring ring-blue-500 border border-blue-500">30,000</TableCell>
              </TableRow>
              <TableRow key="6">
                <TableCell>Flexi Benefits</TableCell>
                <TableCell className="text-right ring ring-green-500 border border-green-500">5,000</TableCell>
                <TableCell className="text-right ring ring-blue-500 border border-blue-500">3,000</TableCell>
              </TableRow>
              <TableRow key="7" className="bg-content2">
                <TableCell className="font-bold">Net Calculated Income</TableCell>
                <TableCell className="text-right font-bold ring ring-green-500 border border-green-500">9,35,000</TableCell>
                <TableCell className="text-right font-bold ring ring-blue-500 border border-blue-500">11,07,000</TableCell>
              </TableRow>
              <TableRow key="8" className="bg-primary-50 dark:bg-primary-900">
                <TableCell className="font-bold">Total Tax Payable</TableCell>
                <TableCell className="text-right font-bold ring ring-green-500 border border-green-500">29,500</TableCell>
                <TableCell className="text-right font-bold ring ring-blue-500 border border-blue-500">33,917</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
    </DefaultLayout>
  )
}
