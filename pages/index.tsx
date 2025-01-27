'use client'
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { ShieldCheck, Menu } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <DefaultLayout>

      {/* Hero Section */}
      <section className="mb-16 mt-32">
        <div className="relative">
          <div className="absolute -z-10 top-0 left-0 w-full h-96 bg-[#EEF2FF] rounded-full blur-3xl opacity-50" />
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-[#37b50c] mb-3">
              FinSeva
            </h1>
            <p className="text-2xl sm:text-3xl  font-semibold mb-6">
              File <span className="text-[#37b50c]">taxes</span> the way you want
            </p>
            <Button 
              color="primary" 
              size="lg" 
              radius="full" 
              className="w-full sm:w-1/3 bg-[#37b50c] mx-auto"
              href="/signup"
            >
              Save taxes now
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="text-center mb-16 bg-[#EEF2FF]      py-8 px-4 rounded-3xl">
        <div className="max-w-4xl mx-auto">
          <p className="mb-2 text-green-500">More than</p>
          <p className="text-4xl sm:text-5xl font-bold text-[#37b50c] mb-2">42000</p>
          <p className="mb-2 text-green-500">people from over</p>
          <p className="text-4xl sm:text-5xl font-bold text-[#37b50c] mb-2">2000</p>
          <p className="mb-2 text-green-500">towns trust</p>
          <p className="text-4xl sm:text-5xl text-[#37b50c] font-bold">FinSeva</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16 text-center">
        <h2 className="text-xl sm:text-2xl text-[#37b50c] leading-relaxed max-w-3xl mx-auto">
          Led by a team of ex IRS and ex-IRS officers for your maximum Tax Saving.
        </h2>
      </section>

      {/* Tax Liability Section */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6      text-center">
          Decrease your tax liability up to 69% by:
        </h2>
        <Card className="p-6 bg-[#EEF2FF] rounded-none w-full">
          <h3 className="font-semibold mb-2 text-lg sm:text-xl">1. Your personal tax support</h3>
          <p className="text-gray-600">lorem ipsum</p>
        </Card>
      </section>

      {/* Security Section */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#37b50c] mb-6 text-center">
          Security and Privacy
        </h2>
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#EEF2FF] rounded-none w-full">
            <ShieldCheck className="w-6 h-6 text-[#37b50c]" />
          </div>
          <p className="text-sm sm:text-base     ">
            Your Safety is our primary Concern. Having said that, users can rest assured that your information is encrypted and protected.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mb-8 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#37b50c] mb-6 text-center">
          So, what are you waiting for?
        </h2>
        <Button 
          color="primary" 
          size="lg" 
          radius="full" 
          className="w-full sm:w-1/3 bg-[#37b50c] mx-auto block"
        >
          Save taxes 
        </Button>
      </section>

    </DefaultLayout>
  );
}
