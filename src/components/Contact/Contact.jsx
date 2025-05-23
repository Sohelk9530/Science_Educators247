import { useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'
import emailjs from '@emailjs/browser';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

const Contact = () => {
  const [agreed, setAgreed] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qqffcse', 'template_ardpge8', form.current, {
        publicKey: 'DjCV2qNcIMXcCYeyu',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <Navbar />

      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-xl text-center border-2 border-r-8 border-b-8 rounded-3xl border-gray-500">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Get in touch</h2>
          <p className="mt-2 text-lg/8 text-gray-600">We Secure Your Genuine Review.</p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20 " ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                First name
              </label>
              <div className="mt-2.5 border-2 rounded-[5px] border-gray-500">
                <input
                  id="first-name"
                  type="text"
                  name="from_name"
                  autoComplete="given-name"
                  placeholder='Enter Firstname'
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                Last name
              </label>
              <div className="mt-2.5 border-2 rounded-[5px] border-gray-500">
                <input
                  id="last-name"
                  name="last-name"
                  placeholder='Enter Lastname'
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                Email
              </label>
              <div className="mt-2.5 border-2 rounded-[5px] border-gray-500">
                <input
                  id="email"
                  type="email"
                  name="from_email"
                  autoComplete="email"
                  placeholder='Enter Email'
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                Message
              </label>
              <div className="mt-2.5 border-2 rounded-[5px] border-gray-500">
                <textarea
                  id="message"
                  name="message"
                  placeholder='Enter your Feedback'
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  defaultValue={''}
                />
              </div>
            </div>
            <Field className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <input type="checkbox"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  required
                />
                <span className="sr-only">Agree to policies</span>
              </div>
              <Label className="text-sm/6 text-gray-600">
                By selecting this, you agree to our{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>

              </Label>
            </Field>
          </div>
          <div className="mt-10 border-2 rounded-[5px] border-gray-500">
            <button
              type="submit"
              value="Send"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => alert("Your Response will be send Succesfully.")}
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}
export default Contact;