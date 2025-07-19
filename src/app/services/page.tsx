import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Billing Expert Witness Services | Healthcare Litigation Support",
  description: "Professional medical billing expert witness services including fraud investigation, coding audits, compliance analysis, and expert testimony for healthcare litigation cases nationwide.",
  keywords: "medical billing audit expert, healthcare fraud investigation, coding compliance expert witness, billing litigation support, medical billing testimony services, CPC expert witness services",
};

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Witness Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive medical billing and coding expert witness services for complex litigation cases, 
            insurance disputes, fraud investigations, and regulatory compliance matters
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Medical Billing Audits</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive analysis of medical billing practices, coding accuracy, and compliance with healthcare regulations.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                CPT/ICD-10 Coding Analysis
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                HCPCS Level II Review
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Modifier Usage Assessment
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Documentation Review
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Testimony</h3>
            <p className="text-gray-600 mb-4">
              Professional expert witness testimony for court proceedings, depositions, and arbitration cases.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Deposition Testimony
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Trial Testimony
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Expert Report Preparation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Cross-Examination Support
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012-2h1a2 2 0 012 2v1a1 1 0 102 0V3a2 2 0 012-2 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fraud Investigation</h3>
            <p className="text-gray-600 mb-4">
              Investigation and analysis of suspected healthcare fraud, billing irregularities, and pattern identification.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Billing Pattern Analysis
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Statistical Analysis
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Damage Calculations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Whistleblower Support
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Case Consultation</h3>
            <p className="text-gray-600 mb-4">
              Strategic consultation and case preparation assistance for attorneys handling healthcare disputes.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Case Strategy Development
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Discovery Planning
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Document Review
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Settlement Analysis
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Analysis</h3>
            <p className="text-gray-600 mb-4">
              Assessment of healthcare billing compliance with federal and state regulations and industry standards.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                CMS Guidelines Review
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                HIPAA Compliance
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                OIG Risk Assessment
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                State Medicaid Analysis
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Insurance Disputes</h3>
            <p className="text-gray-600 mb-4">
              Expert analysis for insurance claim disputes, denials, and reimbursement controversies.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Claim Denial Analysis
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Prior Authorization Review
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Medical Necessity Assessment
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Coverage Determination
              </li>
            </ul>
          </div>
        </div>

        {/* Specialized Services */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specialized Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Revenue Cycle Management</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>End-to-end revenue cycle analysis and optimization recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>Claims processing workflow evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>Denial management and appeals process review</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>Accounts receivable analysis and aging reports</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>Medical coding accuracy assessments and error rate analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>Provider credentialing and enrollment verification</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>Billing software and system functionality review</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>Staff training and competency evaluations</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Regulatory Compliance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>Medicare and Medicaid billing compliance audits</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>Anti-kickback and Stark Law violation assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>False Claims Act liability analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>HITECH Act and data breach impact studies</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Damage Assessment</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>Financial impact calculations for billing errors and fraud</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>Lost revenue analysis due to system failures or breaches</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>Remediation cost estimates and implementation timelines</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>Restitution calculations and payment plan assessments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Case Types Section */}
        <div className="bg-gray-100 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Cases We Handle</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Healthcare Fraud</h4>
              <p className="text-gray-600 text-sm">
                Medicare/Medicaid fraud, upcoding, unbundling, phantom billing, and kickback schemes
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Insurance Litigation</h4>
              <p className="text-gray-600 text-sm">
                Claim denials, bad faith insurance practices, coverage disputes, and reimbursement issues
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Employment Disputes</h4>
              <p className="text-gray-600 text-sm">
                Wrongful termination, whistleblower retaliation, and healthcare industry employment law
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Contract Disputes</h4>
              <p className="text-gray-600 text-sm">
                Provider agreements, billing service contracts, and vendor relationship disputes
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Regulatory Violations</h4>
              <p className="text-gray-600 text-sm">
                OIG investigations, CMS audits, state licensing board actions, and compliance failures
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Data Breaches</h4>
              <p className="text-gray-600 text-sm">
                HIPAA violations, cybersecurity incidents, and patient data protection failures
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Initial Consultation</h4>
              <p className="text-gray-600 text-sm">
                Case evaluation and expert assignment based on specific expertise requirements
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Document Review</h4>
              <p className="text-gray-600 text-sm">
                Comprehensive analysis of medical records, billing data, and relevant documentation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Analysis</h4>
              <p className="text-gray-600 text-sm">
                Detailed investigation, coding review, and preparation of findings and opinions
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Report & Testimony</h4>
              <p className="text-gray-600 text-sm">
                Written expert reports and live testimony as needed for your case
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with our expert witnesses for your next case. Available nationwide for federal and state court proceedings.
          </p>
          <div className="space-x-4">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 py-3 px-8 rounded-md hover:bg-gray-100 transition-colors inline-block font-semibold"
            >
              Request Expert Consultation
            </a>
            <a 
              href="/experts" 
              className="border-2 border-white text-white py-3 px-8 rounded-md hover:bg-white hover:text-blue-600 transition-colors inline-block font-semibold"
            >
              View Our Expert Profiles
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}