"use client"
import Image from "next/image";
import Link from "next/link"; // Make sure Link is imported for the "Read More" buttons
import PricingSlideshow from "@/components/PricingSlideshow";

export default function Home() {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">practical guide</span> to mastering {" "}
            <span className="font-semibold underline decoration-primary">
              Dynamics 365 Business Central
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Here i share my functional knowledge on Dynamics NAV 
            <br className="hidden lg:block" />
            and Business Central with all of you.
          </p>

          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary focus-within:ring-opacity-20 dark:focus-within:border-primary">
            <form
              action=""
              className="flex flex-wrap justify-between md:flex-row"
            >
              <input
                type="search"
                name="query"
                placeholder="Search Components"
                required
                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Pricing Options Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Choose Your Plan
          </h2>
          {/* Slideshow for small screens, Grid for md and above */}
          <div className="md:hidden">
            <PricingSlideshow />
          </div>
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pricing Card 1: Basic */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Basic</h3>
              <p className="text-gray-600 dark:text-gray-400 text-4xl font-extrabold mb-6">
                $9<span className="text-xl font-medium">/month</span>
              </p>
              <ul className="text-gray-500 dark:text-gray-300 mb-8 space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>5 Projects</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>10GB Storage</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Basic Support</span>
                </li>
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Choose Basic
              </button>
            </div>

            {/* Pricing Card 2: Pro */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center border-2 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Pro</h3>
              <p className="text-gray-600 dark:text-gray-400 text-4xl font-extrabold mb-6">
                $29<span className="text-xl font-medium">/month</span>
              </p>
              <ul className="text-gray-500 dark:text-gray-300 mb-8 space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>20 Projects</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>50GB Storage</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Custom Domain</span>
                </li>
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Choose Pro
              </button>
            </div>

            {/* Pricing Card 3: Enterprise */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Enterprise</h3>
              <p className="text-gray-600 dark:text-gray-400 text-4xl font-extrabold mb-6">
                $99<span className="text-xl font-medium">/month</span>
              </p>
              <ul className="text-gray-500 dark:text-gray-300 mb-8 space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Unlimited Projects</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Unlimited Storage</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>24/7 Dedicated Support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Advanced Analytics</span>
                </li>
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Choose Enterprise
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Client Testimonial Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12 animate-fade-in">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-8 animate-slide-in-up delay-100">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                "Practical insights and real-world guidance on Microsoft Dynamics 365 Business Central implementation and optimization."
              </p>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="Client Avatar"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Veeru Shukla</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Tech Solutions</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-8 animate-slide-in-up delay-200">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                "Best practices for configuration, extensions, and integrations to streamline ERP processes."
              </p>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="Client Avatar"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Ayush Singh</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Director, Global Corp</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-8 animate-slide-in-up delay-300">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                "Lessons learned from real implementations and how to avoid common Business Central pitfalls."
              </p>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="Client Avatar"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Aman Shukla</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Independent Blogger</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Top Blogs Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            My Top Blogs
            <p className="text-center text-sm font-normal pt-2 text-gray-600">Check out my recent blogs</p>
          </h2>
           
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col transform transition-transform duration-300 hover:scale-105">
              <img
                src="/one.png"
                alt="Blog Post Image 1"
                width={400}
                height={200}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                The Future of Web Development with Next.js
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 grow">
                Explore the latest trends and features in Next.js that are shaping the landscape of modern web development. Learn how to build faster and more scalable applications.
              </p>
              <Link href="/blogpost1" className="text-blue-600 hover:underline inline-flex items-center">
                Read More &rarr;
              </Link>
            </div>

            {/* Blog Post Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col transform transition-transform duration-300 hover:scale-105">
              <img
                src="/two.png"
                alt="Blog Post Image 2"
                width={400}
                height={200}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Mastering Tailwind CSS: A Comprehensive Guide
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 grow">
                Dive deep into Tailwind CSS and learn how to efficiently style your applications with utility-first classes. Tips, tricks, and best practices included.
              </p>
              <Link href="/blogpost2" className="text-blue-600 hover:underline inline-flex items-center">
                Read More &rarr;
              </Link>
            </div>

            {/* Blog Post Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col transform transition-transform duration-300 hover:scale-105">
              <img
                src="/three.png"
                alt="Blog Post Image 3"
                width={400}
                height={200}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Optimizing React Performance: Beyond the Basics
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 grow">
                Uncover advanced techniques to boost the performance of your React applications. From memoization to virtualized lists, get your app running smoothly.
              </p>
              <Link href="/blogpost3" className="text-blue-600 hover:underline inline-flex items-center">
                Read More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}