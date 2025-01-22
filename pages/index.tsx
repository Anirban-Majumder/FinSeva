'use client'

import { Button } from "@nextui-org/button"
import { Card } from "@nextui-org/card"
import { Link } from "@nextui-org/link"
import { ShieldCheck, Menu } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <Link href="/" className="font-bold text-xl">
          <Image src="/logo.jpeg" alt="FinSeva" width={120} height={40} />
        </Link>
        <Button isIconOnly variant="light" aria-label="Menu" className="sm:hidden">
          <Menu className="w-6 h-6 text-[#37b50c]" />
        </Button>
        <nav className="hidden sm:flex space-x-4">
          <Link href="#" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">Services</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mb-16 mt-32">
        <div className="relative">
          <div className="absolute -z-10 top-0 left-0 w-full h-96 bg-[#EEF2FF] rounded-full blur-3xl opacity-50" />
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-[#37b50c] mb-3">
              FinSeva
            </h1>
            <p className="text-2xl sm:text-3xl text-black font-semibold mb-6">
              File <span className="text-[#37b50c]">taxes</span> the way you want
            </p>
            <Button 
              color="primary" 
              size="lg" 
              radius="full" 
              className="w-full sm:w-1/3 bg-[#37b50c] mx-auto"
            >
              Save taxes now
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="text-center mb-16 bg-[#EEF2FF] text-black py-8 px-4 rounded-3xl">
        <div className="max-w-4xl mx-auto">
          <p className="mb-2">More than</p>
          <p className="text-4xl sm:text-5xl font-bold text-[#37b50c] mb-2">42000</p>
          <p className="mb-2">people from over</p>
          <p className="text-4xl sm:text-5xl font-bold text-[#37b50c] mb-2">2000</p>
          <p className="mb-2">towns trust</p>
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
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-black text-center">
          Decrease your tax liability up to 69% by:
        </h2>
        <Card className="p-6 bg-[#EEF2FF]">
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
          <div className="p-3 bg-[#EEF2FF] rounded-xl">
            <ShieldCheck className="w-6 h-6 text-[#37b50c]" />
          </div>
          <p className="text-sm sm:text-base text-black">
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
    </main>
  );
}

