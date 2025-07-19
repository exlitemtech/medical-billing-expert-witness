import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dr. Sarah Rodriguez CPC CCS CPMA | Medical Billing Expert Witness",
  description: "Dr. Sarah Rodriguez - Lead medical billing expert witness with 22+ years experience. CPC, CCS, CPMA certified. 85+ expert testimony cases including Medicare fraud and billing disputes.",
  keywords: "Dr Sarah Rodriguez expert witness, CPC expert witness, medical billing fraud expert, cardiology billing expert, emergency medicine billing expert witness",
};

export default function SarahRodriguezProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/experts" className="hover:text-blue-600">Experts</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Dr. Sarah Rodriguez</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Expert Profile Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                SR
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Dr. Sarah Rodriguez</h1>
              <div className="text-xl text-blue-600 font-semibold mb-4">CPC, CCS, CPMA | Lead Medical Billing Expert Witness</div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">CPC Certified</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">CCS Certified</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">CPMA Certified</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Federal Court Qualified</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">22+ Years Experience</span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Dr. Rodriguez is our lead medical billing expert witness with over two decades of experience in healthcare 
                billing, coding, and compliance. She holds advanced degrees in healthcare administration and has provided 
                expert testimony in 85+ complex litigation cases, including high-profile Medicare fraud investigations and 
                major hospital billing class actions.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience & Qualifications */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience & Qualifications</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• MBA Healthcare Administration, Johns Hopkins University</li>
                    <li>• BS Health Information Management, University of Maryland</li>
                    <li>• Certificate in Healthcare Compliance, HCCA</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Certifications</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Certified Professional Coder (CPC) - AAPC</li>
                    <li>• Certified Coding Specialist (CCS) - AHIMA</li>
                    <li>• Certified Professional Medical Auditor (CPMA) - AAPC</li>
                    <li>• Certified Healthcare Compliance Officer (CHC) - HCCA</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Areas of Expertise</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-600">
                      <li>• Cardiology Billing & Coding</li>
                      <li>• Emergency Medicine Billing</li>
                      <li>• Surgery Center Operations</li>
                      <li>• Hospital Revenue Cycle</li>
                    </ul>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Medicare/Medicaid Billing</li>
                      <li>• Healthcare Fraud Investigation</li>
                      <li>• Compliance Auditing</li>
                      <li>• Billing Software Analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Testimony Experience */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Testimony Experience</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">85+ Expert Witness Cases</h3>
                  <p className="text-gray-600">
                    Extensive experience providing expert testimony in federal and state courts, including depositions, 
                    trial testimony, and expert report preparation for complex healthcare litigation cases.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Notable Cases</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900">$15M Medicare Fraud Case</h4>
                      <p className="text-gray-600">
                        Lead expert witness in major Medicare fraud investigation involving cardiology practice billing irregularities. 
                        Provided comprehensive analysis of billing patterns and testified on industry standards.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Hospital Billing Class Action</h4>
                      <p className="text-gray-600">
                        Expert witness in class action lawsuit against major hospital system regarding emergency room billing practices. 
                        Analyzed thousands of claims and provided testimony on proper coding procedures.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Insurance Fraud Defense</h4>
                      <p className="text-gray-600">
                        Provided expert testimony defending healthcare provider against insurance fraud allegations. 
                        Case resulted in complete dismissal of charges based on expert analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Background */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Background</h2>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Senior Medical Billing Consultant</h3>
                  <p className="text-blue-600 font-medium">Healthcare Compliance Associates | 2018-Present</p>
                  <p className="text-gray-600 mt-2">
                    Lead consultant for healthcare billing compliance audits and expert witness services. Manage team of 
                    15+ medical coding specialists and oversee complex litigation support projects.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Director of Revenue Cycle Management</h3>
                  <p className="text-blue-600 font-medium">Regional Medical Center | 2010-2018</p>
                  <p className="text-gray-600 mt-2">
                    Oversaw $200M annual revenue cycle for 500-bed hospital system. Implemented compliance programs 
                    that reduced billing errors by 40% and improved collection rates by 25%.
                  </p>
                </div>
                <div className="pb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Senior Medical Coder</h3>
                  <p className="text-blue-600 font-medium">Cardiology Associates | 2002-2010</p>
                  <p className="text-gray-600 mt-2">
                    Specialized in cardiology and interventional procedures coding. Achieved 99.2% coding accuracy rate 
                    and served as coding compliance officer for 25-physician practice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Request Dr. Rodriguez</h3>
              <p className="text-gray-600 mb-6">
                Available for expert witness testimony, consultation, and case analysis nationwide.
              </p>
              <Link 
                href="/contact" 
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center block"
              >
                Request Consultation
              </Link>
              <div className="mt-4 text-sm text-gray-500 text-center">
                24-hour response • Nationwide coverage
              </div>
            </div>

            {/* Key Statistics */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Statistics</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">85+</div>
                  <div className="text-sm text-gray-600">Expert Witness Cases</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">22+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">$50M+</div>
                  <div className="text-sm text-gray-600">Cases Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600">Court Qualification Rate</div>
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Specializations</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">Healthcare Fraud Investigation</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">Cardiology Billing Expert</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">Emergency Medicine Coding</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">Medicare/Medicaid Compliance</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">Hospital Revenue Cycle</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">Billing Compliance Audits</span>
                </div>
              </div>
            </div>

            {/* Other Experts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Experts</h3>
              <div className="space-y-3">
                <Link href="/experts/michael-johnson" className="block hover:bg-gray-50 p-2 rounded">
                  <div className="font-medium text-gray-900">Michael Johnson</div>
                  <div className="text-sm text-gray-600">CCS, RHIA, CPC</div>
                </Link>
                <Link href="/experts/lisa-martinez" className="block hover:bg-gray-50 p-2 rounded">
                  <div className="font-medium text-gray-900">Lisa Martinez</div>
                  <div className="text-sm text-gray-600">CPC, CPMA</div>
                </Link>
                <Link href="/experts" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All Experts →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}