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
    <main className="min-h-screen bg-linear-to-br from-[#ebe7e4] to-[#ddd9d6] text-gray-950">
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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Title */}
        <h1
          className={`${atkinsonMono.className} fade-in text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold underline tracking-tight`}
        >
          ABOUT ME
        </h1>

        {/* Content */}
        <div className="mt-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center fade-in">
            <img
              src="/myself.avif"
              alt="Akash"
              className="rounded-lg object-cover max-w-[320px] md:max-w-full shadow-md transition-shadow duration-200 hover:shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3 space-y-4 fade-in-delay">
            <h2 className="text-xl sm:text-2xl font-semibold">
              HI! I'M AKASH
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              I am a highly committed and results-oriented Business Central
              Functional Consultant with over a decade of proven expertise in
              implementing, configuring, and supporting Microsoft Dynamics 365
              Business Central and Dynamics NAV.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              With extensive experience managing end-to-end project lifecycles,
              I specialize in requirements analysis, system configuration,
              integration, testing, and user training. My goal is to deliver
              tailored solutions that streamline business processes and ensure
              successful system adoption.
            </p>

            {/* Skills */}
            <div className="pt-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Professional Skills
              </h3>

              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    Microsoft Dynamics 365 Business Central:
                  </span>{" "}
                  Comprehensive expertise in Business Central functionalities,
                  modules, and configurations.
                </li>

                <li>
                  <span className="font-semibold text-gray-900">
                    ERP Implementation:
                  </span>{" "}
                  Proven experience in end-to-end ERP implementations, including
                  project scoping, requirements gathering, system configuration,
                  testing, user training, and post-go-live support.
                </li>

                <li>
                  <span className="font-semibold text-gray-900">
                    Financial Management:
                  </span>{" "}
                  In-depth knowledge of general ledger, accounts payable and
                  receivable, bank reconciliation, and financial reporting.
                </li>

                <li>
                  <span className="font-semibold text-gray-900">
                    Supply Chain & Inventory Management:
                  </span>{" "}
                  Proficient in inventory control, procurement, sales, and
                  distribution processes.
                </li>

                <li>
                  <span className="font-semibold text-gray-900">
                    Manufacturing:
                  </span>{" "}
                  Strong understanding of production processes, including BOM,
                  production orders, and shop floor management.
                </li>

                <li>
                  <span className="font-semibold text-gray-900">
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
        <div className="flex justify-center mt-6 fade-in">
          <Link
            href="/#contact"
            className="text-black underline transition-colors duration-200 hover:text-gray-700"
          >
            Contact me
          </Link>
        </div>

        {/* Achievements */}
        <div className="mt-20 py-12">
          <h2
            className={`${atkinsonMono.className} fade-in text-center text-2xl sm:text-3xl font-semibold mb-12 underline`}
          >
            MY ACHIEVEMENTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="achievement-card bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500 transition-shadow duration-200 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
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
