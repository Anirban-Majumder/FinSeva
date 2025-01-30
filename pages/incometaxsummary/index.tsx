'use client';

import React, { useState, FormEvent } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
  Spinner,
  Divider
} from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";

interface ApiResponse {
  status: string;
  data?: {
    user: {
      number: string;
      assessmentYear: string;
      details: string;
    };
  };
  message?: string;
}

const DetailsPage: React.FC = () => {
  const [number, setNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [assessmentYear, setAssessmentYear] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResponseData(null);

    try {
      const response = await fetch("/api/getDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number,
          password,
          assessmentYear,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data: ApiResponse = await response.json();
      setResponseData(data);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DefaultLayout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-default-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-center">Get Details</h2>
          <p className="text-default-500 text-center text-sm">
            Enter your credentials to fetch your details
          </p>
        </CardHeader>
        <Divider/>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="PAN Number"
              placeholder="Enter your PAN number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              variant="bordered"
              isRequired
              labelPlacement="outside"
              classNames={{
                label: "text-default-700 font-medium"
              }}
            />

            <Input
              label="ITR Password"
              placeholder="Enter your ITR password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="bordered"
              isRequired
              labelPlacement="outside"
              classNames={{
                label: "text-default-700 font-medium"
              }}
            />

            <Input
              label="Assessment Year"
              placeholder="Enter assessment year (e.g., 2023-24)"
              value={assessmentYear}
              onChange={(e) => setAssessmentYear(e.target.value)}
              variant="bordered"
              isRequired
              labelPlacement="outside"
              classNames={{
                label: "text-default-700 font-medium"
              }}
            />

            <Button
              type="submit"
              color="primary"
              className="w-full mt-2"
              isDisabled={isLoading}
              isLoading={isLoading}
              spinner={<Spinner size="sm" color="white" />}
            >
              {isLoading ? "Processing..." : "Submit"}
            </Button>
          </form>

          {responseData && (
            <div className="mt-4 p-3 bg-success-50 dark:bg-success-900/20 rounded-lg">
              <p className="text-success font-medium mb-2">Success</p>
              <pre className="text-sm overflow-auto p-2 bg-background rounded-md border border-success-200 dark:border-success-900">
                {JSON.stringify(responseData, null, 2)}
              </pre>
            </div>
          )}

          {error && (
            <div className="mt-4 p-3 bg-danger-50 dark:bg-danger-900/20 rounded-lg">
              <p className="text-danger font-medium">Error</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
</DefaultLayout>
  );
};

export default DetailsPage;