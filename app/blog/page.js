'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BlogPage = () => {
  // Sample blog array
  const blogs = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      description: 'Learn how to use React Hooks to manage state and side effects in your functional components. This comprehensive guide covers useState, useEffect, and custom hooks.',
      slug: 'getting-started-with-react-hooks',
      date: 'January 10, 2026',
      author: 'Akash Shukla',
      image: '/one.png',
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      description: 'Discover the power of utility-first CSS with Tailwind. Learn how to build responsive designs quickly and efficiently without leaving your HTML.',
      slug: 'mastering-tailwind-css',
      date: 'January 8, 2026',
      author: 'Akash Shukla',
      image: '/two.png',
    },
    {
      id: 3,
      title: 'Next.js Best Practices',
      description: 'Explore best practices for building production-ready applications with Next.js. From performance optimization to deployment strategies.',
      slug: 'nextjs-best-practices',
      date: 'January 5, 2026',
      author: 'Akash Shukla',
      image: '/three.png',
    },
    {
      id: 4,
      title: 'JavaScript ES6+ Features',
      description: 'Dive deep into modern JavaScript features including arrow functions, destructuring, async/await, and more. Essential knowledge for modern development.',
      slug: 'javascript-es6-features',
      date: 'December 28, 2025',
      author: 'Akash Shukla',
      image: '/one.png',
    },
    {
      id: 5,
      title: 'Web Performance Optimization',
      description: 'Tips and tricks to improve your website performance. Learn about lazy loading, code splitting, caching strategies, and more.',
      slug: 'web-performance-optimization',
      date: 'December 20, 2025',
      author: 'Akash Shukla',
      image: '/two.png',
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & Articles
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore insightful articles about web development, programming, and technology
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col grow">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 grow line-clamp-3">
                  {blog.description}
                </p>

                {/* Meta Information */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-4">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {blog.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {blog.author}
                  </div>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blogpost/${blog.slug}`}
                  className="inline-block mt-auto bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-center"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State (Optional) */}
        {blogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No blog posts available yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogPage
