import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Michael Johnson CCS RHIA CPC | Medical Coding Expert Witness",
  description: "Michael Johnson - Senior medical coding expert witness with 25+ years experience. CCS, RHIA, CPC certified. 110+ expert testimony cases in orthopedics, neurology, and coding disputes.",
  keywords: "Michael Johnson expert witness, CCS expert witness, RHIA expert testimony, orthopedic coding expert, neurology billing expert witness, coding compliance expert",
};

export default function MichaelJohnsonProfile() {
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
            <span className="text-gray-900">Michael Johnson</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Expert Profile Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                MJ
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Michael Johnson</h1>
              <div className="text-xl text-green-600 font-semibold mb-4">CCS, RHIA, CPC | Senior Medical Coding Expert Witness</div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">CCS Certified</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">RHIA Certified</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">CPC Certified</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">State Court Qualified</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">25+ Years Experience</span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Michael Johnson is a senior medical coding expert witness with over 25 years of experience in health information 
                management and medical coding compliance. As a former Director of Coding Compliance at a major health system, 
                he brings deep operational knowledge to complex litigation cases involving coding accuracy and billing disputes.
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
                    <li>• MS Health Informatics, University of Pittsburgh</li>
                    <li>• BS Medical Records Administration, Penn State University</li>
                    <li>• Certificate in Healthcare Quality Management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Certifications</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Certified Coding Specialist (CCS) - AHIMA</li>
                    <li>• Registered Health Information Administrator (RHIA) - AHIMA</li>
                    <li>• Certified Professional Coder (CPC) - AAPC</li>
                    <li>• Certified Healthcare Privacy and Security (CHPS) - AHIMA</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Areas of Expertise</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-600">
                      <li>• Orthopedic Surgery Coding</li>
                      <li>• Neurology & Neurosurgery</li>
                      <li>• Physician Practice Management</li>
                      <li>• Audit Defense & Appeals</li>
                    </ul>
                    <ul className="space-y-2 text-gray-600">
                      <li>• ICD-10-PCS Coding</li>
                      <li>• DRG Analysis & Optimization</li>
                      <li>• Health Information Management</li>
                      <li>• Coding Quality Assurance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Testimony Experience */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Testimony Experience</h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">110+ Expert Witness Cases</h3>
                  <p className="text-gray-600">
                    Extensive experience in depositions and trial testimony for medical malpractice cases involving coding 
                    and billing analysis, coding accuracy disputes, and healthcare compliance matters.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Case Specializations</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Medical Malpractice Billing Analysis</h4>
                      <p className="text-gray-600">
                        Expert analysis of medical coding and billing practices in malpractice cases. Provides detailed 
                        analysis of procedure coding accuracy and compliance with billing standards.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Orthopedic Coding Disputes</h4>
                      <p className="text-gray-600">
                        Specialized expertise in complex orthopedic and spine surgery coding disputes, including analysis 
                        of surgical procedure documentation and appropriate code assignment.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Healthcare Audit Defense</h4>
                      <p className="text-gray-600">
                        Provides expert testimony in healthcare audit defense cases, including Medicare RAC audits, 
                        private payor audits, and state Medicaid reviews.
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
                  <h3 className="text-lg font-semibold text-gray-900">Senior Coding Compliance Consultant</h3>
                  <p className="text-green-600 font-medium">Healthcare Coding Solutions | 2020-Present</p>
                  <p className="text-gray-600 mt-2">
                    Independent consultant specializing in coding compliance audits and expert witness services. 
                    Provides coding education and compliance training to healthcare organizations nationwide.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Director of Coding Compliance</h3>
                  <p className="text-green-600 font-medium">Metropolitan Health System | 2005-2020</p>
                  <p className="text-gray-600 mt-2">
                    Led coding compliance program for 800-bed health system with 15+ facilities. Managed team of 
                    40+ coding professionals and implemented quality assurance programs achieving 98% coding accuracy.
                  </p>
                </div>
                <div className="pb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Senior Health Information Analyst</h3>
                  <p className="text-green-600 font-medium">Regional Medical Center | 1999-2005</p>
                  <p className="text-gray-600 mt-2">
                    Specialized in complex inpatient coding including orthopedic and neurosurgical procedures. 
                    Served as coding trainer and quality reviewer for department of 25+ coding specialists.
                  </p>
                </div>
              </div>
            </div>

            {/* Publications & Speaking */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Publications & Speaking</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Recent Publications</h4>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• "ICD-10-PCS Coding for Complex Spine Procedures" - AHIMA Journal, 2023</li>
                    <li>• "Audit Defense Strategies for Orthopedic Practices" - Medical Coding Today, 2022</li>
                    <li>• "Quality Assurance in Medical Coding" - Health Information Management Quarterly, 2021</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Speaking Engagements</h4>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• AHIMA National Convention - "Expert Witness Best Practices" (2023)</li>
                    <li>• AAPC Regional Conference - "Orthopedic Coding Updates" (2022)</li>
                    <li>• Healthcare Compliance Summit - "Audit Defense Strategies" (2021)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Request Michael Johnson</h3>
              <p className="text-gray-600 mb-6">
                Available for expert witness testimony, coding analysis, and compliance consultation.
              </p>
              <Link 
                href="/contact" 
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium text-center block"
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
                  <div className="text-2xl font-bold text-green-600">110+</div>
                  <div className="text-sm text-gray-600">Expert Witness Cases</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">15</div>
                  <div className="text-sm text-gray-600">Years Health System Leadership</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">98%</div>
                  <div className="text-sm text-gray-600">Coding Accuracy Achieved</div>
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Specializations</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">Orthopedic Surgery Coding</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">Neurology & Neurosurgery</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">ICD-10-PCS Expert</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">DRG Analysis</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">Audit Defense</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className="text-gray-600 text-sm">Physician Practice Coding</span>
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
                <Link href="/experts/lisa-martinez" className="block hover:bg-gray-50 p-2 rounded">
                  <div className="font-medium text-gray-900">Lisa Martinez</div>
                  <div className="text-sm text-gray-600">CPC, CPMA</div>
                </Link>
                <Link href="/experts" className="text-green-600 hover:text-green-800 text-sm font-medium">
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