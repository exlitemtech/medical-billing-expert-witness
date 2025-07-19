import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certified Medical Billing Expert Witnesses | CPC, CCS, RHIA Experts",
  description: "Meet our certified medical billing expert witnesses. CPC, CCS, and RHIA certified professionals with 15+ years experience in healthcare litigation and expert testimony.",
  keywords: "certified medical billing experts, CPC expert witness, CCS expert witness, RHIA expert testimony, medical coding expert witness, healthcare litigation experts, billing fraud experts",
};

export default function Experts() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Meet Our Expert Witnesses
            </h1>
            <p className="text-xl max-w-4xl mx-auto mb-8">
              Certified medical billing and coding specialists with extensive litigation experience, 
              ready to provide expert testimony and analysis for your complex healthcare cases.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-500/30 px-4 py-2 rounded-full">100+ Combined Years Experience</span>
              <span className="bg-blue-500/30 px-4 py-2 rounded-full">500+ Cases Testified</span>
              <span className="bg-blue-500/30 px-4 py-2 rounded-full">All Major Specialties Covered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Qualifications Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our Experts?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Our team combines deep technical expertise with proven courtroom experience to provide 
            compelling expert testimony that stands up to cross-examination.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Professionals</h3>
            <p className="text-gray-600">All experts hold current certifications from AAPC, AHIMA, and other recognized organizations.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nationwide Coverage</h3>
            <p className="text-gray-600">Experts available across all 50 states with experience in federal and state court systems.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Response</h3>
            <p className="text-gray-600">Quick turnaround on case reviews and expert opinions to meet your litigation deadlines.</p>
          </div>
        </div>

        {/* Expert Profiles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Expert Witnesses
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Dr. Sarah Rodriguez - Lead Expert */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  SR
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Sarah Rodriguez, CPC, CCS, CPMA</h3>
                  <p className="text-blue-600 font-semibold mb-3">Lead Medical Billing Expert | 22+ Years Experience</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-gray-900">Education:</strong>
                      <span className="text-gray-600 ml-2">MBA Healthcare Administration, Johns Hopkins | BS Health Information Management</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Specialties:</strong>
                      <span className="text-gray-600 ml-2">Cardiology, Emergency Medicine, Surgery Centers, Hospital Billing</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Expert Testimony:</strong>
                      <span className="text-gray-600 ml-2">85+ cases including fraud investigations, billing disputes, compliance audits</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Notable Cases:</strong>
                      <span className="text-gray-600 ml-2">$15M Medicare fraud case, Major hospital billing class action</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">CPC Certified</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">CCS Certified</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">CPMA Certified</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Federal Court Qualified</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Request Dr. Rodriguez
                </button>
              </div>
            </div>

            {/* Michael Johnson */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  MJ
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Michael Johnson, CCS, RHIA, CPC</h3>
                  <p className="text-green-600 font-semibold mb-3">Senior Coding Expert | 25+ Years Experience</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-gray-900">Education:</strong>
                      <span className="text-gray-600 ml-2">MS Health Informatics | BS Medical Records Administration</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Specialties:</strong>
                      <span className="text-gray-600 ml-2">Orthopedics, Neurology, Physician Practice Management, Audit Defense</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Expert Testimony:</strong>
                      <span className="text-gray-600 ml-2">110+ cases including malpractice billing analysis, coding accuracy disputes</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Previous Role:</strong>
                      <span className="text-gray-600 ml-2">15 years as Director of Coding Compliance at major health system</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">CCS Certified</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">RHIA Certified</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">CPC Certified</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">State Court Qualified</span>
                </div>
                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  Request Michael Johnson
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Additional Expert Profiles */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">LM</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Lisa Martinez, CPC, CPMA</h3>
                <p className="text-purple-600 font-medium">Oncology Billing Specialist</p>
                <p className="text-gray-600 text-sm">18+ Years Experience</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Education:</strong> BS Health Information, AHIMA Certified</p>
                <p><strong>Specialties:</strong> Oncology, Radiology, Chemotherapy Billing</p>
                <p><strong>Cases:</strong> 65+ Expert Witness Testimonies</p>
                <p><strong>Location:</strong> Chicago, IL</p>
                <p><strong>Notable:</strong> Cancer center billing compliance expert</p>
              </div>
              <button className="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                Request Lisa Martinez
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">RT</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Robert Thompson, CCS, CDIP</h3>
                <p className="text-orange-600 font-medium">Hospital Systems Expert</p>
                <p className="text-gray-600 text-sm">20+ Years Experience</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Education:</strong> MBA Healthcare, MS Health Administration</p>
                <p><strong>Specialties:</strong> Hospital Billing, DRG Analysis, Medicare</p>
                <p><strong>Cases:</strong> 90+ Expert Witness Testimonies</p>
                <p><strong>Location:</strong> Houston, TX</p>
                <p><strong>Notable:</strong> Former hospital revenue cycle director</p>
              </div>
              <button className="w-full mt-4 bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors">
                Request Robert Thompson
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">AC</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Dr. Angela Chen, CPC, CCS</h3>
                <p className="text-teal-600 font-medium">Fraud Investigation Expert</p>
                <p className="text-gray-600 text-sm">16+ Years Experience</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Education:</strong> JD Healthcare Law, BS Medical Coding</p>
                <p><strong>Specialties:</strong> Fraud Analysis, Compliance, Legal Coding</p>
                <p><strong>Cases:</strong> 70+ Expert Witness Testimonies</p>
                <p><strong>Location:</strong> Atlanta, GA</p>
                <p><strong>Notable:</strong> Former healthcare fraud investigator</p>
              </div>
              <button className="w-full mt-4 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors">
                Request Dr. Chen
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Attorneys Say About Our Experts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <p className="text-gray-600 italic mb-4">
                "Dr. Rodriguez's testimony was instrumental in our $8.2M settlement. Her ability to explain complex billing 
                regulations to the jury was exceptional. She remained composed under aggressive cross-examination."
              </p>
              <div className="font-semibold text-gray-900">— Partner, Major Law Firm</div>
              <div className="text-sm text-gray-500">Healthcare Fraud Defense</div>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <p className="text-gray-600 italic mb-4">
                "Michael Johnson's detailed analysis uncovered billing irregularities that the opposing side couldn't refute. 
                His 25 years of experience showed in every aspect of his expert report and testimony."
              </p>
              <div className="font-semibold text-gray-900">— Healthcare Attorney</div>
              <div className="text-sm text-gray-500">Medical Malpractice Case</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need the Right Expert for Your Case?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team will match you with the perfect expert witness based on your case specifics, 
            timeline, and jurisdiction requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
            >
              Request Expert Consultation
            </a>
            <a 
              href="tel:+1-555-EXPERT1" 
              className="border-2 border-white text-white py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold inline-block"
            >
              Call (555) EXPERT-1
            </a>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            Available 24/7 for urgent case consultations
          </p>
        </div>
      </div>
    </div>
  );
}