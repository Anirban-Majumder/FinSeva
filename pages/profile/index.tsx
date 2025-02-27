import { useEffect, useState, useContext } from 'react';
import DefaultLayout from '@/layouts/default';
import { Card } from '@nextui-org/react';
import { supabase } from '../../lib/supabaseClient';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { SessionContext } from "@/lib/usercontext";


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
  const session = useContext(SessionContext);
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);



  useEffect(() => {
    if (!session) return;

    // If no user id is in the session, redirect to login
    if (!session.user?.id) {
      router.push('/login');
      return;
    }
    console.log(session?.user?.id)

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select(
          'first_name, last_name, phone, gross_salary, income_from_other_sources, income_from_house_property, professional_tax'
        )
        .eq('id', session?.user?.id);

      if (error || !data) {
        router.push('/login');
      } else {
        setProfile(data[0]);
      }
    };

    fetchProfile();
  }, [router, session]);

  if (!profile) {
    return null; // Don't show anything if profile doesn't exist
  }

  return (
    <DefaultLayout>
      <Card className={`max-w-sm mx-auto text-black dark:text-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex flex-col items-center">
          <div className="rounded-full h-40 w-40 bg-indigo-500 flex items-center justify-center mt-6">
            <span className="text-6xl text-white font-bold">
              {profile.first_name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="p-12 text-center">
            <div className="uppercase tracking-wide text-xl text-indigo-500 dark:text-indigo-400 font-semibold">
              {profile.first_name} {profile.last_name}
            </div>
            <p className={`mt-2 text-2xl leading-tight font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Phone: {profile.phone}
            </p>
            <p className={`mt-2 text-2xl leading-tight font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Email:{session?.user?.email}
            </p>
            <p className={`mt-4 text-2xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Gross Salary: {profile.gross_salary}
            </p>
            <p className={`mt-4 text-2xl antialiased hover:subpixel-antialiased ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Income from Other Sources: {profile.income_from_other_sources ? 'Yes' : 'No'}
            </p>
            <p className={`mt-4 text-2xl antialiased hover:subpixel-antialiased ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Income from House Property: {profile.income_from_house_property ? 'Yes' : 'No'}
            </p>
            <p className={`mt-4 text-2xl antialiased hover:subpixel-antialiased ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Professional Tax: {profile.professional_tax}
            </p>
          </div>
        </div>
      </Card>
    </DefaultLayout>
  );
};

export default ProfileWidget;
