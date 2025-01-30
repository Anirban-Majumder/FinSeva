'use client';

import { NextPage } from "next";
import { useState, FormEvent } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Textarea,
  Button,
  Select,
  SelectItem,
  Chip
} from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  department: string;
}

const ContactPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    department: "",
  });
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const departments = [
    { label: "Customer Support", value: "support" },
    { label: "Technical Help", value: "technical" },
    { label: "Billing", value: "billing" },
    { label: "General Inquiry", value: "general" },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Here you would typically make an API call to your backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setSubmitStatus({
        type: "success",
        message: "Thank you for your message. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        department: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Sorry, something went wrong. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <section className="flex justify-center items-start min-h-screen p-4 md:p-8">
        <div className="w-full max-w-2xl">
          <Card className="w-full">
            <CardHeader className="flex flex-col gap-2 px-8 pt-8">
              <h1 className="text-3xl font-bold text-center">Contact Us</h1>
              <p className="text-default-500 text-center">
                Have a question? We'd love to hear from you.
              </p>
            </CardHeader>
            <CardBody className="px-8 py-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    label="Email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    type="email"
                    variant="bordered"
                    isRequired
                  />
                </div>

                <Input
                  label="Subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  variant="bordered"
                  isRequired
                />

                <Textarea
                  label="Message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  variant="bordered"
                  minRows={4}
                  isRequired
                />

                {submitStatus.type && (
                  <Chip
                    color={submitStatus.type === "success" ? "success" : "danger"}
                    variant="flat"
                    className="w-full"
                  >
                    {submitStatus.message}
                  </Chip>
                )}

                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  className="w-full"
                  isLoading={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <div className="mt-8 text-center space-y-2">
                <p className="text-default-500">
                  Need immediate assistance?
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    as="a"
                    href="tel:+1234567890"
                    variant="flat"
                    color="secondary"
                    startContent={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    }
                  >
                    Call Us
                  </Button>
                  <Button
                    as="a"
                    href="mailto:support@finseva.com"
                    variant="flat"
                    color="secondary"
                    startContent={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    }
                  >
                    Email Us
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ContactPage;