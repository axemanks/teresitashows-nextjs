// The contact form
'use client';

import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef, useState } from 'react';
import { Loader } from '@/components/Loader';
import emailjs from '@emailjs/browser';
import Disco from '@/models/Disco';

type Props = {};

const Contact = (props: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsLoading(true);

    // Send the email with emailjs
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: 'Keith',
          from_email: form.email,
          to_email: 'keith@keithscheldt.com',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      .then(() => {
        setIsLoading(false);
        // TODO: Show a success message
        // TODO: hide the alert after 5 seconds

        setTimeout(() => {
          //hideAlert();
          //setCurrentAnimation('idle'); // stop animations
          setForm({ name: '', email: '', message: '' }); // clear form fields
        }, 3000);
      })
      .catch((error: Error) => {
        setIsLoading(false);
        //setCurrentAnimation('idle');
        console.log(error.message);
        //showAlert({ show: true, text: 'I did not receive your message, please try again.', type: 'error'})
      });
  };

  return (
    <section>
      <div className='relative flex lg:flex-row flex-col container h-max pb-10 '>
        {/* TODO: Alert */}

        <div className='flex-1 min-w-[50%] flex flex-col'>
          <h1 className='heading2 text-primary text-center'>Contact Us</h1>

          <form
            action=''
            className='w-full flex flex-col gap-7 mt-14'
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <label className='text-black-500 font-semibold'>
              Name
              <input
                type='text'
                name='name'
                className='input'
                placeholder='John Doe'
                required
                value={form.name}
                onChange={handleChange}
                onFocus={() => {}}
                onBlur={() => {}}
              />
            </label>
            {/* Email */}
            <label className='text-black-500 font-semibold'>
              Email
              <input
                type='email'
                name='email'
                className='input'
                placeholder='JohnDoe@email.com'
                required
                value={form.email}
                onChange={handleChange}
              />
            </label>
            {/* Message */}
            <label className='text-black-500 font-semibold'>
              Your Message
              <textarea
                rows={4}
                name='message'
                className='input'
                placeholder='Your message here...'
                required
                value={form.message}
                onChange={handleChange}
              /></label>

                {/* Submit */}
                <button
                type='submit'
                className='btn mx-auto'
                disabled={isLoading}
                >
                    {isLoading ? 'Sending...' : 'Send Message'}
                </button>
            
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
