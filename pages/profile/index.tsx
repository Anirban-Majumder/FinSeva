import { useEffect, useState } from 'react';
import DefaultLayout from '@/layouts/default';
import { Card } from '@nextui-org/react';
import { supabase } from '../../lib/supabaseClient';
import { useTheme } from 'next-themes';

interface Profile {
  first_name: string;
  last_name: string;
  phone: string;
  gross_salary: number;
  income_from_other_sources: boolean;
  income_from_house_property: boolean;
  professional_tax: number;
}

const ProfileWidget = () => {
  const { theme } = useTheme();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('first_name, last_name, phone, gross_salary, income_from_other_sources, income_from_house_property, professional_tax')
        .single();

      if (error) {
        console.error(error);
      } else {
        setProfile(data);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <DefaultLayout>
      <Card className={`max-w-sm mx-auto text-black dark:text-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex flex-col items-center">
          <div className="rounded-full h-40 w-40 bg-indigo-500 flex items-center justify-center mt-6">
            <span className="text-8xl text-white font-bold">
              {profile.first_name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="p-12 text-center">
            <div className="uppercase tracking-wide text-2xl text-indigo-500 dark:text-indigo-400 font-semibold">{profile.first_name} {profile.last_name}</div>
            <p className={`mt-2 text-3xl leading-tight font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Phone: {profile.phone}</p>
            <p className={`mt-2 text-3xl leading-tight font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Email: xxxxxxxx@gmail.com</p>
            <p className="mt-4 text-3xl text-gray-500 dark:text-gray-400">Gross Salary: {profile.gross_salary}</p>
            <p className="mt-4 text-3xl antialiased hover:subpixel-antialiased text-gray-500 dark:text-gray-400">Income from Other Sources: {profile.income_from_other_sources ? 'Yes' : 'No'}</p>
            <p className="mt-4 text-3xl antialiased hover:subpixel-antialiased text-gray-500 dark:text-gray-400">Income from House Property: {profile.income_from_house_property ? 'Yes' : 'No'}</p>
            <p className="mt-4 text-3xl antialiased hover:subpixel-antialiased text-gray-500 dark:text-gray-400">Professional Tax: {profile.professional_tax}</p>
          </div>
        </div>
      </Card>
    </DefaultLayout>
  );
};

export default ProfileWidget;
