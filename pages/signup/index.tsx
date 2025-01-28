import DefaultLayout from "@/layouts/default";
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/router';
import React from "react";
import { Button, Input, Link, Checkbox, Form, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";

const SignUp = () => {
  const [form, setForm] = React.useState({ firstName: '', lastName: '', email: '', phone: '', password: '' });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    const user = data?.user;

    if (user) {
      await supabase.from('profiles').insert({
        id: user.id,
        first_name: form.firstName,
        last_name: form.lastName,
        phone: form.phone,
      });
      router.push('/userInfo');
    }
    if (error) alert(error.message);
  };

  const handleGoogleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/userInfo'
      }
    });
    if (error) alert(error.message)
};

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
              <div className="flex flex-col gap-1">
              <h1 className="text-large font-bold">Welcome</h1>
                <p className="text-small text-default-500">Create your FinSeva account</p>
              </div>

              <Form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <Input
                  isRequired
                  label="First Name"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={form.firstName}
                  onChange={handleChange}
                  isClearable
                  fullWidth
                />
                <Input
                  isRequired
                  label="Last Name"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={form.lastName}
                  onChange={handleChange}
                  isClearable
                  fullWidth
                />
                <Input
                  isRequired
                  label="Email Address"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                isClearable
                  fullWidth
                />
                <Input
                  isRequired
                  label="Phone Number"
                  name="phone"
                  placeholder="Enter your phone number"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                isClearable
                  fullWidth
                />
                <Input
                  isRequired
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                isClearable
                  fullWidth
                />
                <Button type="submit" color="primary" fullWidth>
                  Sign Up
                </Button>
              </Form>
              <Checkbox isRequired className="py-4" size="sm">
            I agree with the&nbsp;
            <Link href="#" size="sm">
              Terms
            </Link>
            &nbsp; and&nbsp;
            <Link href="#" size="sm">
              Privacy Policy
            </Link>
          </Checkbox>
              <Button onPress={handleGoogleSignIn} variant="bordered" color="primary">
                <Icon icon="flat-color-icons:google" width={24} />
                &nbsp; Sign Up with Google
              </Button>
              <div className="flex items-center gap-4 py-2">
                <Divider className="flex-1" />
                <p className="shrink-0 text-tiny text-default-500">OR</p>
                <Divider className="flex-1" />
              </div>
              <p className="text-center text-small">
                Already have an account?&nbsp;
                <Link href="/login" size="sm">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default SignUp;