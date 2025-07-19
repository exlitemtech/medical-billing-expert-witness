'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-purple-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-amber-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-slate-300 text-sm font-medium">Certified Medical Billing Expert Witnesses</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-thin text-white mb-6 leading-tight">
            Expert Witness Services for
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-light">
              Medical Billing
            </span>
            <span className="block text-white font-thin">& Healthcare Litigation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Certified medical billing and coding specialists providing expert testimony 
            for complex healthcare litigation cases. Fast response, qualified experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/contact" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-semibold text-lg shadow-2xl shadow-blue-400/20"
            >
              <span className="flex items-center justify-center">
                Request Expert Consultation
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link 
              href="/experts" 
              className="border border-slate-600 text-slate-300 py-4 px-8 rounded-xl hover:border-slate-500 hover:text-white hover:bg-slate-800/50 transition-all duration-300 font-semibold text-lg backdrop-blur"
            >
              View Our Experts
            </Link>
          </div>

          {/* Credentials */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="text-slate-300 text-sm font-medium">CPC Certified</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <span className="text-slate-300 text-sm font-medium">Court Qualified</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <span className="text-slate-300 text-sm font-medium">Expert Testimony</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <span className="text-slate-300 text-sm font-medium">Fast Response</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur border border-slate-700/50 rounded-2xl p-6 text-center hover:border-blue-400/30 transition-all duration-500 hover:-translate-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">250+</div>
            <div className="text-slate-300 font-medium">Cases Reviewed</div>
            <div className="text-xs text-slate-500 mt-1">Expert Analysis</div>
          </div>
          <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur border border-slate-700/50 rounded-2xl p-6 text-center hover:border-purple-400/30 transition-all duration-500 hover:-translate-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">15+</div>
            <div className="text-slate-300 font-medium">Certified Experts</div>
            <div className="text-xs text-slate-500 mt-1">Ready to Testify</div>
          </div>
          <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur border border-slate-700/50 rounded-2xl p-6 text-center hover:border-green-400/30 transition-all duration-500 hover:-translate-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">98%</div>
            <div className="text-slate-300 font-medium">Success Rate</div>
            <div className="text-xs text-slate-500 mt-1">Favorable Outcomes</div>
          </div>
          <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur border border-slate-700/50 rounded-2xl p-6 text-center hover:border-amber-400/30 transition-all duration-500 hover:-translate-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">24hr</div>
            <div className="text-slate-300 font-medium">Response Time</div>
            <div className="text-xs text-slate-500 mt-1">Initial Consultation</div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-blue-400 text-sm font-medium">Professional Expert Services</span>
          </div>
          <h2 className="text-5xl font-thin text-white mb-6">Comprehensive
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-light">
              Medical Billing Expertise
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Our certified medical billing and coding specialists provide thorough analysis 
            and expert testimony for complex healthcare litigation cases.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur border border-slate-700/50 rounded-2xl p-8 text-center hover:border-blue-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-400/10">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Medical Billing Audits</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Comprehensive review of medical billing practices, coding accuracy, and compliance 
              with healthcare regulations for litigation support.
            </p>
            <div className="flex items-center justify-center mb-4 space-x-2">
              <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">CPC Certified</span>
              <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">Detailed Reports</span>
            </div>
            <Link href="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300">
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur border border-slate-700/50 rounded-2xl p-8 text-center hover:border-purple-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-400/10">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Expert Testimony</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Court-qualified experts providing clear, professional testimony on medical billing 
              standards, coding practices, and industry compliance requirements.
            </p>
            <div className="flex items-center justify-center mb-4 space-x-2">
              <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">Court Qualified</span>
              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Professional</span>
            </div>
            <Link href="/experts" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300">
              Meet Our Experts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur border border-slate-700/50 rounded-2xl p-8 text-center hover:border-amber-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-400/10">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012-2h1a2 2 0 012 2v1a1 1 0 102 0V3a2 2 0 012-2 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Fraud Analysis</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Detailed analysis of billing patterns and practices to identify potential fraud, 
              upcoding, unbundling, and other compliance violations.
            </p>
            <div className="flex items-center justify-center mb-4 space-x-2">
              <span className="bg-amber-500/20 text-amber-400 px-2 py-1 rounded text-xs">Pattern Analysis</span>
              <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs">Fraud Detection</span>
            </div>
            <Link href="/services" className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium transition-colors duration-300">
              View Services
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* FAQ Section for SEO */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What qualifications do your medical billing expert witnesses have?
              </h3>
              <p className="text-gray-600">
                All our medical billing expert witnesses hold current certifications from AAPC (CPC), AHIMA (CCS, RHIA), 
                or similar recognized organizations. They have extensive experience in medical billing, coding, compliance, 
                and healthcare litigation with proven track records in federal and state court testimony.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How quickly can you provide an expert witness for my case?
              </h3>
              <p className="text-gray-600">
                We provide initial consultation and expert matching within 24 hours of your request. Our nationwide 
                network of certified medical billing experts ensures we can quickly identify the right professional 
                for your specific case requirements and timeline.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What types of medical billing cases do you handle?
              </h3>
              <p className="text-gray-600">
                Our experts handle healthcare fraud investigations, billing compliance audits, coding accuracy disputes, 
                insurance claim denials, Medicare/Medicaid billing issues, HIPAA violations, and medical malpractice billing analysis. 
                We cover all specialties including cardiology, oncology, orthopedics, and hospital billing systems.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Are your experts qualified to testify in federal court?
              </h3>
              <p className="text-gray-600">
                Yes, our senior medical billing expert witnesses are qualified to provide testimony in both federal and 
                state courts. They have extensive experience with depositions, trial testimony, and cross-examination in 
                complex healthcare litigation cases.
              </p>
            </div>
            <div className="pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What is included in your expert witness services?
              </h3>
              <p className="text-gray-600">
                Our comprehensive services include case analysis, expert report preparation, deposition testimony, 
                trial testimony, billing audit analysis, fraud investigation, compliance assessment, and damage calculations. 
                We also provide litigation support and consultation throughout your case.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials & Case Studies */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Client Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    $8.2M
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 italic mb-4">
                    "Dr. Rodriguez's expert testimony was instrumental in our $8.2M settlement. Her ability to explain 
                    complex billing regulations to the jury was exceptional, and she remained composed under aggressive 
                    cross-examination. Her detailed analysis of the billing patterns was the cornerstone of our case."
                  </p>
                  <div className="font-semibold text-gray-900">— Senior Partner, National Law Firm</div>
                  <div className="text-sm text-blue-600">Healthcare Fraud Defense Case</div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    WIN
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 italic mb-4">
                    "Michael Johnson's detailed coding analysis uncovered billing irregularities that the opposing side 
                    couldn't refute. His 25 years of experience showed in every aspect of his expert report. The case 
                    was dismissed based on his expert testimony."
                  </p>
                  <div className="font-semibold text-gray-900">— Healthcare Defense Attorney</div>
                  <div className="text-sm text-green-600">Medical Malpractice Billing Analysis</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    24H
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 italic mb-4">
                    "We needed an oncology billing expert on short notice for a complex chemotherapy billing case. 
                    Lisa Martinez was available within 24 hours and provided exceptional analysis that helped us 
                    achieve a favorable settlement. Her expertise saved our client millions."
                  </p>
                  <div className="font-semibold text-gray-900">— Litigation Partner</div>
                  <div className="text-sm text-purple-600">Oncology Billing Compliance</div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                    98%
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 italic mb-4">
                    "Our firm has used their expert witness services for 12 cases over 3 years. They have a 100% 
                    court qualification rate and have helped us achieve favorable outcomes in 98% of cases. Their 
                    expertise is unmatched in the industry."
                  </p>
                  <div className="font-semibold text-gray-900">— Managing Partner, Regional Law Firm</div>
                  <div className="text-sm text-orange-600">Multiple Healthcare Cases</div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study Highlights */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Recent Case Results</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">$15M</div>
                <div className="text-sm text-gray-600">Medicare Fraud Recovery</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">$8.2M</div>
                <div className="text-sm text-gray-600">Settlement Achieved</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">$12M</div>
                <div className="text-sm text-gray-600">Audit Defense Success</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Court Admissibility</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Trusted by Leading Law Firms
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
              <div className="text-gray-900 font-semibold mb-1">Law Firms Served</div>
              <div className="text-sm text-gray-600">Nationwide legal partnerships</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-900 font-semibold mb-1">Cases Completed</div>
              <div className="text-sm text-gray-600">Expert testimony provided</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-900 font-semibold mb-1">Success Rate</div>
              <div className="text-sm text-gray-600">Favorable case outcomes</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              "The most trusted medical billing expert witness service in the industry" 
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
              <span>⭐⭐⭐⭐⭐</span>
              <span>Rated by 200+ attorneys</span>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Attorneys Choose Our Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the competitive advantage with expert witnesses who deliver results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Court-Tested</h3>
              <p className="text-gray-600 text-sm">500+ successful testimonies in federal and state courts</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Response</h3>
              <p className="text-gray-600 text-sm">24-hour expert matching and case assessment</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Elite Credentials</h3>
              <p className="text-gray-600 text-sm">CPC, CCS, RHIA certified with 15+ years experience</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Reports</h3>
            <p className="text-gray-600 text-sm">Detailed expert opinions that withstand scrutiny</p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur border border-slate-700/50 rounded-3xl p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-400/30 rounded-full px-6 py-2 mb-6">
              <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="text-green-400 text-sm font-medium">Trusted Expert Witness Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
              Why Choose Our
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-light">
                Medical Billing Experts?
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Our certified professionals bring years of experience and deep expertise 
              to provide reliable, thorough analysis for your healthcare litigation needs.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="group">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Certified Professionals</h3>
                  <p className="text-slate-300 leading-relaxed">
                    All our experts hold current CPC certifications and have extensive experience 
                    in medical billing, coding, and healthcare compliance.
                  </p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">CPC Certified</span>
                    <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">Experienced</span>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Court-Qualified Testimony</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Our experts are qualified to provide testimony in federal and state courts, 
                    with proven track records in complex healthcare litigation.
                  </p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">Court Qualified</span>
                    <span className="bg-pink-500/20 text-pink-400 px-2 py-1 rounded text-xs">Proven Record</span>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Fast Response Times</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We understand litigation timelines. Get initial consultation within 24 hours 
                    and comprehensive analysis delivered on your schedule.
                  </p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">24hr Response</span>
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">On Schedule</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-semibold shadow-2xl shadow-blue-400/20"
              >
                <span className="flex items-center justify-center">
                  Get Expert Consultation
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link 
                href="/services" 
                className="border border-slate-600 text-slate-300 py-4 px-8 rounded-xl hover:border-slate-500 hover:text-white hover:bg-slate-800/50 transition-all duration-300 font-semibold backdrop-blur"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}