import React, { useEffect } from 'react';
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { useTheme } from 'next-themes' // Adjust the import path as needed
import { MessageSquare } from 'lucide-react'; 
import ReactDOMServer from 'react-dom/server'; // Import ReactDOMServer

const CopilotSideBarComponent: React.FC = () => {
  const { theme ,setTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const iconContainer = document.querySelector('.copilotKitButtonIcon');
    if (iconContainer) {
      iconContainer.innerHTML = ''; // Clear any existing content
      const iconElement = ReactDOMServer.renderToString(<MessageSquare size={32} className="icon-responsive text-white" />);
      iconContainer.innerHTML = iconElement;
    }
  }, []);

  return (
    <>
      <CopilotSidebar
        instructions={"You are an AI assistant for a Med-Aid app that scans prescriptions and provides medication info. Interpret prescriptions, offer detailed med info including dosages and precautions, and answer user queries in concise about their prescriptions and medications clearly and safely."}
        labels={{
          title: "ChatBot",
          initial: "Hello there, How can I help You today?",
        }}
        clickOutsideToClose={false}
      />
      <style>
        {`
.copilotKitHeader {
  background-color: ${isDarkMode ? '#2d3748' : 'rgb(199 210 254)'} !important;
  color: ${isDarkMode ? 'white' : 'rgb(55 48 163)'} !important;
}
.copilotKitButton {
  background-color: rgb(99 ,102 ,241) !important; /* bg-indigo-600 */
  color: white !important; /* text-white */
  width: 4rem !important; 
  height: 4rem !important; 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1); 
  padding: 1rem 2rem;
  border-radius: 50%; 
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: rgb(79 70 229) !important; /* hover:bg-indigo-700 */
  }

  @media (min-width: 640px) {
    width: 4.2rem !important;
    height: 4.2rem !important;
  }
  @media (min-width: 768px) { 
    width: 5rem !important;
    height: 5rem !important;
  }

  .dark & {
    background-color: rgb(99,102,241) !important; /* dark:bg-indigo-500 */
  }

  .dark &:hover {
    background-color: rgb(67 56 202) !important; /* dark:hover:bg-indigo-600 */
  }
}
.copilotKitSidebar {
  top: 80% !important;
  right: 10% !important;
  color: ${isDarkMode ? 'white' : 'rgb(55 48 163)'} !important;
}

.copilotKitDevConsole > :nth-child(3), .copilotKitDevConsoleLog, .copilotKitDevConsole{
  display: none;
}

.copilotKitVersionInfo {
  color: ${isDarkMode ? 'rgb(226 232 240)' : 'rgb(55 48 163)'};
}


.copilotKitMessages,.copilotKitWindow  {
  background-color: ${isDarkMode ? '#182130' : 'rgb(238 242 255)'} !important;
}

.copilotKitMessage.copilotKitUserMessage {
  background-color: ${isDarkMode ? '#2d3748' : 'rgb(165 180 252)'} !important;
  color: ${isDarkMode ? 'rgb(226 232 240)' : 'rgb(55 48 163)'} !important;
}

.copilotKitMessage.copilotKitAssistantMessage {
  background-color: ${isDarkMode ? '#2a3b53' : 'rgb(224 231 255)'} !important;
  color: ${isDarkMode ? 'rgb(226 232 240)' : 'rgb(55 48 163)'} !important;
}
  .copilotKitInput {
  background-color: ${isDarkMode ? '#1e2a3e' : 'rgb(248 250 252)'} !important;
  border-top: 1px solid ${isDarkMode ? '#2d3748' : 'rgb(226 232 240)'} !important;
  padding: 12px !important;
}

.copilotKitInput > textarea {
   background-color: ${isDarkMode ? '#1e2a3e' : 'rgb(248 250 252)'} !important;
  color: ${isDarkMode ? 'rgb(226 232 240)' : 'rgb(55 48 163)'} !important;

}

.copilotKitInput > textarea:focus {
  outline: none !important;
}
  .copilotKitResponseButton {
  background-color: ${isDarkMode ? 'rgb(79 70 229)' : 'rgb(99 102 241)'} !important;
  color: white !important;
  border: none !important;
  border-radius: 6px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  cursor: pointer !important;
  transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out !important;
}

.copilotKitResponseButton:hover {
  background-color: ${isDarkMode ? 'rgb(67 56 202)' : 'rgb(79 70 229)'} !important;
  transform: translateY(-1px) !important;
}

.copilotKitResponseButton:active {
  transform: translateY(1px) !important;
}

.copilotKitResponseButton:disabled {
  background-color: ${isDarkMode ? 'rgb(74 85 104)' : 'rgb(203 213 224)'} !important;
  cursor: not-allowed !important;
  transform: none !important;
}
        `}
      </style>
    </>
  );
};

export default CopilotSideBarComponent;