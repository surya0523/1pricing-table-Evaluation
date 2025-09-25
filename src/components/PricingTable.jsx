// src/components/PricingTable.jsx
import React from "react";

const PricingTable = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-2">
        Choose Your Plan
      </h1>
      <p className="text-center text-slate-500 mb-12">
        Pick the best plan for your needs. Cancel anytime.
      </p>

      {/* Pricing Cards */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Basic */}
        <article className="bg-gradient-to-br from-blue-400 to-blue-700 rounded-2xl p-8 flex flex-col justify-between text-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <div>
            <div className="text-xl font-bold flex items-center">
              Basic
              <span className="ml-3 px-3 py-1 text-xs font-bold rounded-full bg-white/20">
                Popular
              </span>
            </div>
            <div className="text-sm opacity-90 mt-1">For personal projects</div>
            <div className="text-3xl font-extrabold mt-6">
              ₹499 <small className="text-sm opacity-80">/month</small>
            </div>
            <ul className="mt-6 space-y-2 text-sm">
              <li>✔ 1 user license</li>
              <li>✔ 5 projects</li>
              <li>✔ Email support</li>
            </ul>
          </div>
          <button className="mt-8 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-50 transition">
            Get Basic
          </button>
        </article>

        {/* Standard */}
        <article className="bg-gradient-to-br from-green-400 to-green-700 rounded-2xl p-8 flex flex-col justify-between text-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <div>
            <div className="text-xl font-bold flex items-center">
              Standard
              <span className="ml-3 px-3 py-1 text-xs font-bold rounded-full bg-white/20">
                Best Value
              </span>
            </div>
            <div className="text-sm opacity-90 mt-1">Perfect for small teams</div>
            <div className="text-3xl font-extrabold mt-6">
              ₹999 <small className="text-sm opacity-80">/month</small>
            </div>
            <ul className="mt-6 space-y-2 text-sm">
              <li>✔ Up to 5 users</li>
              <li>✔ 50 projects</li>
              <li>✔ Priority support</li>
            </ul>
          </div>
          <button className="mt-8 bg-white text-green-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-green-50 transition">
            Start Standard
          </button>
        </article>

        {/* Premium */}
        <article className="bg-gradient-to-br from-pink-400 to-pink-700 rounded-2xl p-8 flex flex-col justify-between text-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <div>
            <div className="text-xl font-bold flex items-center">
              Premium
              <span className="ml-3 px-3 py-1 text-xs font-bold rounded-full bg-white/20">
                Advanced
              </span>
            </div>
            <div className="text-sm opacity-90 mt-1">For enterprises</div>
            <div className="text-3xl font-extrabold mt-6">
              ₹1999 <small className="text-sm opacity-80">/month</small>
            </div>
            <ul className="mt-6 space-y-2 text-sm">
              <li>✔ Unlimited users</li>
              <li>✔ Unlimited projects</li>
              <li>✔ Dedicated support</li>
            </ul>
          </div>
          <button className="mt-8 bg-white text-pink-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-pink-50 transition">
            Contact Sales
          </button>
        </article>
      </section>

      {/* Footer */}
      <p className="text-center text-slate-600 mt-12">
        All plans include a 14-day free trial.
      </p>
    </main>
  );
};

export default PricingTable;
