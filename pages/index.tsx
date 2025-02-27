'use client'

import DefaultLayout from "@/layouts/default"
import { Button } from "@nextui-org/button"
import { ShieldCheck, ClipboardCheck, CircleDollarSign, Users } from 'lucide-react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="mb-16 mt-32">
        <div className="relative">
          <div className="absolute -z-10 top-0 left-0 w-full h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl opacity-50" />
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-[#37b50c] mb-3">
              FinSeva
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold mb-6 text-foreground">
              File <span className="text-[#37b50c]">taxes</span> the way you want
            </p>
            <Button 
              color="primary" 
              size="lg" 
              radius="full" 
              className="w-full sm:w-1/3 bg-[#37b50c] text-white hover:bg-[#2f9708]"
              onClick={() => router.push('/signup')}
            >
              Save taxes now
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="text-center mb-16 bg-default-100 dark:bg-[#121212] py-8 px-4 rounded-3xl">
        <div className="max-w-4xl mx-auto">
          <p className="mb-2 text-[#37b50c]/80">More than</p>
          <p className="text-4xl sm:text-5xl font-bold text-[#37b50c] mb-2">42000</p>
          <p className="mb-2 text-[#37b50c]/80">people from over</p>
          <p className="text-4xl sm:text-5xl font-bold text-[#37b50c] mb-2">2000</p>
          <p className="mb-2 text-[#37b50c]/80">towns trust</p>
          <p className="text-4xl sm:text-5xl text-[#37b50c] font-bold">FinSeva</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16 text-center">
        <h2 className="text-xl sm:text-2xl text-[#37b50c] leading-relaxed max-w-3xl mx-auto">
          Led by a team of IRS and ex-IRS officers for your maximum Tax Saving.
        </h2>
      </section>

      {/* Tax Liability Section */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-foreground">
          Decrease your tax liability up to 69% by:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <ClipboardCheck className="w-8 h-8" />,
              title: "Tax Filing",
              description:
                "Maximize your savings and simplify your tax filing process with our personalized tax solutions.",
            },
            {
              icon: <CircleDollarSign className="w-8 h-8" />,
              title: "Financial Planning",
              description:
                "Empower yourself with the right financial planning strategies to make informed decisions.",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Expert Support",
              description:
                "Seamlessly file your taxes with expert support and ECA assistance every step of the way.",
            },
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: "Security and Privacy",
              description:
                "Your Safety is our primary Concern. Having said that, users can rest assured that your information is encrypted and protected.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/5 flex items-center justify-center text-[#37b50c]">
                {feature.icon}
              </div>
              <h3 className="text-foreground font-semibold text-lg">
                {feature.title}
              </h3>
              <p className="text-foreground/70 text-sm">{feature.description}</p>
            </div>
          ))}
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
          className="w-full sm:w-1/3 bg-[#37b50c] text-white hover:bg-[#2f9708] mx-auto block"
          onClick={() => router.push('/signup')}
        >
          Save taxes 
        </Button>
      </section>
    </DefaultLayout>
  )
}

