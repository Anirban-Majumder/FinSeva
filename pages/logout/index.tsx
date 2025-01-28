import React from "react";
import { Button, Divider, Link } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/router';
import { title } from "@/components/primitives";

export default function SignOut() {
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
              <div className="flex flex-col gap-1">
                <h1 className={title()}>Sign Out</h1>
                <p className="text-small text-default-500">Are you sure you want to sign out?</p>
              </div>

              <Button color="primary" onPress={handleSignOut}>
                Yes, Sign Out
              </Button>

              <div className="flex items-center gap-4 py-2">
                <Divider className="flex-1" />
                <p className="shrink-0 text-tiny text-default-500">OR</p>
                <Divider className="flex-1" />
              </div>

              <Link href="/" size="sm" className="text-default-500">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}