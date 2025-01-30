import { Link } from "@nextui-org/link";
import "@copilotkit/react-ui/styles.css";
import { Head } from "./head";
import { CopilotKit } from "@copilotkit/react-core"; 
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from 'next-themes'
import CopilotSideBarComponent from "@/components/ChatSideBar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden scrollbar-hide">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-8 overflow-auto">
        <CopilotKit runtimeUrl="/api/copilotkit">
          <ThemeProvider>{children}</ThemeProvider>
          <CopilotSideBarComponent />
        </CopilotKit>
      </main>
    </div>
  );
}
