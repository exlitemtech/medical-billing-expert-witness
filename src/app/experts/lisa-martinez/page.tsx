import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lisa Martinez CPC CPMA | Oncology Medical Billing Expert Witness",
  description: "Lisa Martinez - Oncology medical billing expert witness with 18+ years experience. CPC, CPMA certified specialist in oncology, radiology, and chemotherapy billing expert testimony.",
  keywords: "Lisa Martinez expert witness, oncology billing expert, CPC expert witness, chemotherapy billing expert, radiology coding expert witness, cancer center billing expert",
};

export default function LisaMartinezProfile() {
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
            <span className="text-gray-900">Lisa Martinez</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Expert Profile Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                LM
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Lisa Martinez</h1>
              <div className="text-xl text-purple-600 font-semibold mb-4">CPC, CPMA | Oncology Medical Billing Expert Witness</div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">CPC Certified</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">CPMA Certified</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Oncology Specialist</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">18+ Years Experience</span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Lisa Martinez is a specialized oncology medical billing expert witness with 18+ years of experience in 
                cancer center billing, chemotherapy administration coding, and radiation oncology billing. She has provided 
                expert testimony in 65+ cases involving complex oncology billing disputes and compliance matters.
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
                    <li>• BS Health Information Management, University of Illinois Chicago</li>
                    <li>• Certificate in Oncology Coding, AAPC</li>
                    <li>• Certificate in Radiation Oncology Management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Certifications</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Certified Professional Coder (CPC) - AAPC</li>
                    <li>• Certified Professional Medical Auditor (CPMA) - AAPC</li>
                    <li>• Certified in ICD-10-CM/PCS - AHIMA</li>
                    <li>• AAPC Certified - Medical Coding Educator</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Areas of Expertise</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-600">
                      <li>• Oncology Billing & Coding</li>
                      <li>• Chemotherapy Administration</li>
                      <li>• Radiation Oncology</li>
                      <li>• Hematology Procedures</li>
                    </ul>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Cancer Center Operations</li>
                      <li>• Drug Billing Compliance</li>
                      <li>• OCM Program Analysis</li>
                      <li>• Radiology Coding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Testimony Experience */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Testimony Experience</h2>
              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">65+ Expert Witness Cases</h3>
                  <p className="text-gray-600">
                    Specialized expertise in oncology billing disputes, chemotherapy coding compliance, and cancer center 
                    billing practices. Experienced in both deposition and trial testimony.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Case Examples</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Chemotherapy Billing Compliance</h4>
                      <p className="text-gray-600">
                        Expert witness in major oncology practice billing compliance case involving chemotherapy administration 
                        coding and drug billing practices. Provided analysis of proper J-code usage and administration procedures.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Cancer Center Audit Defense</h4>
                      <p className="text-gray-600">
                        Provided expert testimony defending cancer center against Medicare audit findings. Case involved 
                        complex analysis of radiation oncology billing and treatment planning procedures.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Oncology Drug Billing Dispute</h4>
                      <p className="text-gray-600">
                        Expert analysis of oncology drug billing practices in insurance reimbursement dispute. Successfully 
                        defended proper billing practices for high-cost specialty drugs and biologics.
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
                  <h3 className="text-lg font-semibold text-gray-900">Oncology Billing Consultant</h3>
                  <p className="text-purple-600 font-medium">Martinez Healthcare Consulting | 2018-Present</p>
                  <p className="text-gray-600 mt-2">
                    Independent consultant specializing in oncology billing compliance and expert witness services. 
                    Provides training and auditing services to cancer centers and oncology practices nationwide.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Director of Revenue Cycle</h3>
                  <p className="text-purple-600 font-medium">Comprehensive Cancer Center | 2010-2018</p>
                  <p className="text-gray-600 mt-2">
                    Managed revenue cycle operations for 200-physician comprehensive cancer center. Oversaw billing for 
                    medical oncology, radiation oncology, and surgical oncology departments with annual revenue of $150M.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Senior Oncology Coder</h3>
                  <p className="text-purple-600 font-medium">Regional Cancer Institute | 2006-2010</p>
                  <p className="text-gray-600 mt-2">
                    Specialized coder for complex oncology procedures including chemotherapy administration, radiation therapy, 
                    and surgical oncology. Achieved 99.5% coding accuracy rate for oncology services.
                  </p>
                </div>
                <div className="pb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Medical Coder</h3>
                  <p className="text-purple-600 font-medium">University Medical Center | 2005-2006</p>
                  <p className="text-gray-600 mt-2">
                    General medical coding with specialization in complex medical procedures. Trained in multiple specialties 
                    before focusing on oncology billing and coding.
                  </p>
                </div>
              </div>
            </div>

            {/* Specialized Knowledge */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Specialized Oncology Knowledge</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Chemotherapy Billing</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• J-Code assignment and billing</li>
                    <li>• Drug wastage documentation</li>
                    <li>• Administration coding (96413-96417)</li>
                    <li>• Hydration and push procedures</li>
                    <li>• Biosimilar vs. originator billing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Radiation Oncology</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Treatment planning (77261-77263)</li>
                    <li>• IMRT and IGRT procedures</li>
                    <li>• Brachytherapy coding</li>
                    <li>• Simulation procedures</li>
                    <li>• Treatment delivery codes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Specialty Programs</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• OCM (Oncology Care Model)</li>
                    <li>• MIPS reporting for oncology</li>
                    <li>• Clinical trial billing</li>
                    <li>• CAR-T cell therapy</li>
                    <li>• Precision medicine coding</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Compliance Areas</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Medicare Part B drug billing</li>
                    <li>• 340B program compliance</li>
                    <li>• FDA drug approval tracking</li>
                    <li>• Off-label use documentation</li>
                    <li>• Prior authorization requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Request Lisa Martinez</h3>
              <p className="text-gray-600 mb-6">
                Available for oncology billing expert testimony and compliance consultation.
              </p>
              <Link 
                href="/contact" 
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium text-center block"
              >
                Request Consultation
              </Link>
              <div className="mt-4 text-sm text-gray-500 text-center">
                24-hour response • Oncology specialist
              </div>
            </div>

            {/* Key Statistics */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Statistics</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">65+</div>
                  <div className="text-sm text-gray-600">Expert Witness Cases</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">18+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">$150M</div>
                  <div className="text-sm text-gray-600">Annual Revenue Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">99.5%</div>
                  <div className="text-sm text-gray-600">Coding Accuracy Rate</div>
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Specializations</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">Chemotherapy Billing</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">Radiation Oncology</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">Oncology Drug Billing</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">Cancer Center Operations</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">OCM Program Compliance</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">340B Program Analysis</span>
                </div>
              </div>
            </div>

            {/* Other Experts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Experts</h3>
              <div className="space-y-3">
                <Link href="/experts/sarah-rodriguez" className="block hover:bg-gray-50 p-2 rounded">
                  <div className="font-medium text-gray-900">Dr. Sarah Rodriguez</div>
                  <div className="text-sm text-gray-600">CPC, CCS, CPMA</div>
                </Link>
                <Link href="/experts/michael-johnson" className="block hover:bg-gray-50 p-2 rounded">
                  <div className="font-medium text-gray-900">Michael Johnson</div>
                  <div className="text-sm text-gray-600">CCS, RHIA, CPC</div>
                </Link>
                <Link href="/experts" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
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