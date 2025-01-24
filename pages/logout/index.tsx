import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'next/router'

export default function SignOut() {
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Signout</h1>
          <div className="flex flex-col items-center">
            <p>Are you sure you want to sign out?</p>
            <button onClick={handleSignOut}>Yes, Sign Out</button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
