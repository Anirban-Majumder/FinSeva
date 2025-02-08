import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card } from '@nextui-org/react';
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function DocsPage() {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    if (router.query.code) {
      router.replace(router.pathname, undefined, { shallow: true });
    }
  }, [router.isReady, router.query.code]);
  return (
    <DefaultLayout>
      <style jsx>{`
        .title-container {
          transform: translateY(-10px); /* Shift text upwards by 10 pixels */
        }
        .title-text {
          white-space: nowrap; /* Ensure text stays in a single line */
        }
      `}</style>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 z-0">
          
        </div>
        <section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10 z-10">
          <div className="inline-block max-w-lg text-center justify-center mb-4 title-container">
            <h1 className={`${title()} mb-10 mr-15 text-left flex flex-col items-center justify-center title-text`}>Dashboard</h1>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg text-center max-w-lg w-full">
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Card className=" text-grey-300 p-4 rounded-lg flex-1 rounded-lg ring-2 ring-blue-500 mx-2">
<div className="flex justify-center bg-blue-500 ">
                <img src="https://i.postimg.cc/pVkr05Kj/tax-payment-10822996.png" alt="File ITR yourself icon" className="mx-auto mb-2" />
</div>
                <h2 className="text-xl font-bold">File ITR Yourself</h2>
                <p>It's quick, easy to file your income tax return.Plans start at just ₹0.</p>
                <a className="mb-2 text-white bg-blue-500 px-4 py-2 rounded inline-block" href="/fileityourself">File ITR Now</a>
              </Card>
              <Card className=" mr-5 text-grey-300 p-4 rounded-lg flex-1 rounded-lg ring-2 ring-green-500 mx-5">
                <div className="flex justify-center bg-green-500">
                <img src="https://i.postimg.cc/GtMp96bK/investor-18178466.png" alt="Get eCA for ITR Filing icon" className="mx-auto mb-2" />
                </div>
                <h2 className="text-xl font-bold">Get eCA for ITR Filing</h2>
                <p>Hire a personal eCA to do Income Tax Filing for you.</p>
                <a className="mt-5 text-white bg-green-500 px-4 py-2 rounded inline-block" href="/eca">Book eCA Now</a>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}