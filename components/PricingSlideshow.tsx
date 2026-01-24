"use client"

import { useState } from "react"

interface PricingPlan {
  name: string
  price: number
  features: string[]
}

const plans: PricingPlan[] = [
  {
    name: "Basic",
    price: 9,
    features: ["5 Projects", "10GB Storage", "Basic Support"],
  },
  {
    name: "Pro",
    price: 29,
    features: ["20 Projects", "50GB Storage", "Priority Support", "Custom Domain"],
  },
  {
    name: "Enterprise",
    price: 99,
    features: ["Unlimited Projects", "Unlimited Storage", "24/7 Dedicated Support", "Advanced Analytics"],
  },
]

export default function PricingSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? plans.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === plans.length - 1 ? 0 : prevIndex + 1))
  }

  const currentPlan = plans[currentIndex]

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Slideshow Container */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-sm flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{currentPlan.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-4xl font-extrabold mb-6">
          ${currentPlan.price}<span className="text-xl font-medium">/month</span>
        </p>
        <ul className="text-gray-500 dark:text-gray-300 mb-8 space-y-3 w-full">
          {currentPlan.features.map((feature, index) => (
            <li key={index} className="flex items-center justify-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 w-full">
          Choose {currentPlan.name}
        </button>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-4 w-full max-w-sm">
        <button
          onClick={goToPrevious}
          className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          ← Previous
        </button>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 flex-1">
          {plans.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <button
          onClick={goToNext}
          className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Next →
        </button>
      </div>

      {/* Slide Counter */}
      <div className="text-center text-sm text-gray-600 dark:text-gray-400 w-full max-w-sm">
        {currentIndex + 1} of {plans.length}
      </div>
    </div>
  )
}
