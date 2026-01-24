'use client';

import React from "react";
import { Atkinson_Hyperlegible_Mono } from "next/font/google";
import Link from "next/link";

const atkinsonMono = Atkinson_Hyperlegible_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Page = () => {
  const achievements = [
    {
      id: 1,
      title: "10+ Years Experience",
      description:
        "Over a decade of expertise in Microsoft Dynamics 365 Business Central",
      icon: "🏆",
    },
    {
      id: 2,
      title: "ERP Expert",
      description:
        "Specialized in end-to-end ERP implementations and configurations",
      icon: "⚙️",
    },
    {
      id: 3,
      title: "Financial Management",
      description:
        "Deep expertise in financial systems and reporting",
      icon: "💰",
    },
    {
      id: 4,
      title: "Supply Chain Specialist",
      description:
        "Proficient in inventory control and procurement processes",
      icon: "📦",
    },
    {
      id: 5,
      title: "Project Leader",
      description:
        "Successfully managed end-to-end project lifecycles",
      icon: "📊",
    },
    {
      id: 6,
      title: "Team Player",
      description:
        "Currently working with LTIMindtree as Specialist Package Implementation",
      icon: "👥",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 0.4s ease-out both;
        }

        .fade-in-delay {
          animation: fadeIn 0.4s ease-out both;
          animation-delay: 0.1s;
        }

        .achievement-card {
          animation: fadeIn 0.4s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-in,
          .fade-in-delay,
          .achievement-card {
            animation: none;
          }
        }
      `}</style>

      <section className="container mx-auto px-4 py-12">
        {/* Title */}
        <h1
          className={`${atkinsonMono.className} fade-in text-center text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white`}
        >
          About Me
        </h1>

        {/* Content */}
        <div className="mt-12 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center fade-in">
            <img
              src="/myself.avif"
              alt="Akash"
              className="rounded-lg object-cover max-w-[320px] md:max-w-full shadow-lg dark:shadow-gray-900/50 transition-shadow duration-200 hover:shadow-xl"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3 space-y-4 fade-in-delay">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Hi! I'm Akash
            </h2>

            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a highly committed and results-oriented Business Central
              Functional Consultant with over a decade of proven expertise in
              implementing, configuring, and supporting Microsoft Dynamics 365
              Business Central and Dynamics NAV.
            </p>

            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              With extensive experience managing end-to-end project lifecycles,
              I specialize in requirements analysis, system configuration,
              integration, testing, and user training. My goal is to deliver
              tailored solutions that streamline business processes and ensure
              successful system adoption.
            </p>

            {/* Skills */}
            <div className="pt-6">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Professional Skills
              </h3>

              <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Microsoft Dynamics 365 Business Central:
                  </span>{" "}
                  Comprehensive expertise in Business Central functionalities,
                  modules, and configurations.
                </li>

                <li>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    ERP Implementation:
                  </span>{" "}
                  Proven experience in end-to-end ERP implementations, including
                  project scoping, requirements gathering, system configuration,
                  testing, user training, and post-go-live support.
                </li>

                <li>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Financial Management:
                  </span>{" "}
                  In-depth knowledge of general ledger, accounts payable and
                  receivable, bank reconciliation, and financial reporting.
                </li>

                <li>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Supply Chain & Inventory Management:
                  </span>{" "}
                  Proficient in inventory control, procurement, sales, and
                  distribution processes.
                </li>

                <li>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Manufacturing:
                  </span>{" "}
                  Strong understanding of production processes, including BOM,
                  production orders, and shop floor management.
                </li>

                <li>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Project Management:
                  </span>{" "}
                  Skilled in managing timelines, resources, and client
                  expectations. Currently working with{" "}
                  <span className="font-medium">LTIMindtree</span> as a
                  Specialist Package Implementation professional.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="flex justify-center mt-8 fade-in">
          <Link
            href="/contact"
            className="text-blue-600 dark:text-blue-400 underline transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
          >
            Contact me
          </Link>
        </div>

        {/* Achievements */}
        <div className="mt-20 py-12">
          <h2
            className={`${atkinsonMono.className} fade-in text-center text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white`}
          >
            My Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="achievement-card bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 border-t-4 border-blue-600 transition-shadow duration-200 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
