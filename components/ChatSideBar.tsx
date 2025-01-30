import React, { useEffect } from 'react';
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { useTheme } from 'next-themes' // Adjust the import path as needed
import { MessageSquare } from 'lucide-react'; 
import ReactDOMServer from 'react-dom/server'; // Import ReactDOMServer
import { useCopilotReadable } from "@copilotkit/react-core"; 
import { supabase } from '@/lib/supabaseClient';
const CopilotSideBarComponent: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [profile, setProfile] = React.useState<any | null>(null);
  useCopilotReadable({
    description: "The current user's information if null then the user is not logged in",
    value: profile,
  });
  React.useEffect(() => {
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const fetchProfile = async () => {
          const { data, error } = await supabase
            .from('profiles')
            .select('first_name,last_name,gross_salary, income_from_other_sources, income_from_house_property, net_salary')
            .eq('id', user.id)
            .single();
          if (error) {
            console.error(error);
          } else {
            setProfile(data);
          }
        };

        fetchProfile();
      }
    };
    fetchData();
  }, []);
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
      <CopilotPopup
        instructions={"You are a friendly and knowledgeable assistant for the FinSeva app, guiding users through income tax filing, providing personalized tax recommendations, and connecting them to expert support when needed. Answer in accordance to Indian taxation laws and rules. Respond to user queries in short and conise way. Talk in a human way, not like a robot. Ask and respond in bullet points."}        
        labels={{
          title: "FinSeva Assistant",
          initial: "Welcome to FinSeva! Your personal assistant for hassle-free income tax filing and smart tax recommendations. How can I assist you today?",
        }}
        clickOutsideToClose={true}
      />
      {/*
      <style>
        {`copilotKitSidebar
.copilotKitHeader {
  background-color: ${isDarkMode ? '#2d3748' : 'rgb(199 210 254)'} !important;
  color: ${isDarkMode ? 'white' : 'rgb(55 48 163)'} !important;
}
.copilotKitButton {
  background-color: rgb(99 ,102 ,241) !important; 
  color: white !important; 
  width: 4rem !important; 
  height: 4rem !important; 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1); 
  padding: 1rem 2rem;
  border-radius: 50%; 
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: rgb(79 70 229) !important; 
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
    background-color: rgb(99,102,241) !important; 
  }

  .dark &:hover {
    background-color: rgb(67 56 202) !important; 
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

.copilotKitWindow {
  top:10% !important; // Added top
  height: 50% !important; // Added height
  max-height: 50% !important;
  overflow: hidden !important;
}
.copilotKitMessages {
    height: 50% !important; 
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
      */}
      <div className={`copilotKitStyles ${isDarkMode ? 'dark' : 'light'}`}></div>
    </>
  );
};

export default CopilotSideBarComponent;