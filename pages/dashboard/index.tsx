import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card } from '@nextui-org/react';

export default function DocsPage() {
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
          <img
            src="https://t4.ftcdn.net/jpg/04/27/87/95/360_F_427879544_udSmTuaPzJQzoFimiFZB7IsQ4r8193Lu.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10 z-10">
          <div className="inline-block max-w-lg text-center justify-center mb-4 title-container">
            <h1 className={`${title()} mb-10 mr-15 text-left flex flex-col items-center justify-center title-text`}>FinSeva apki seva mein hazir !!</h1>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg text-center max-w-lg w-full">
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Card className="bg-blue-500 text-white p-4 rounded-lg flex-1">
                <img src="" alt="File ITR yourself icon" className="mx-auto mb-2" />
                <h2 className="text-xl font-bold">File ITR Yourself</h2>
                <p>It's quick, easy, and takes only 4 minutes to file your income tax return. ITR filing plans start at just ₹49.</p>
                <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded">File ITR Now</button>
              </Card>
              <Card className="bg-green-500 mr-5 text-white p-4 rounded-lg flex-1">
                <img src="" alt="Get eCA for ITR Filing icon" className="mx-auto mb-2" />
                <h2 className="text-xl font-bold">Get eCA for ITR Filing</h2>
                <p>Hire a personal eCA to do Income Tax Filing for you. It is convenient & fast with maximum refund calculated for you.</p>
                <button className="mt-4 bg-white text-green-500 px-4 py-2 rounded">Book eCA Now</button>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
