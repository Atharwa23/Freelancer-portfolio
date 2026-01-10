import { Download, Award, Code, Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F4ED] to-[#E5D5C8] py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-5xl font-bold text-gray-900">Resume</h1>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#4A5346] text-white rounded-lg font-medium hover:bg-[#3D4139] transition-colors">
            <Download size={20} />
            Download PDF
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Atharwa Zawar</h2>
            <p className="text-xl text-gray-600 mb-4">Software Engineer @Google | Full-Stack & AI Specialist</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span>atharwazawar23@gmail.com</span>
              <span>•</span>
              <span>+91 93072 57942</span>
              <span>•</span>
              <span>Uttar Pradesh, India</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-[#4A5346]">
              <Award className="text-[#4A5346]" size={24} />
              <h3 className="text-2xl font-bold text-gray-900">Professional Summary</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Full-stack engineer and AI specialist studying B.Tech in Information Technology at IIIT Allahabad.
              Specializes in turning complex problems into simple, reliable systems through production-ready web
              applications and agentic AI solutions. Experienced in React, Next.js, Angular, FastAPI, Django,
              and modern AI/ML frameworks.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-[#4A5346]">
              <Briefcase className="text-[#4A5346]" size={24} />
              <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">SWE Intern</h4>
                  <p className="text-gray-600">Google Cloud AI Team</p>
                </div>
                <span className="text-gray-500 font-medium">May – Aug 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Developed 6+ AI agents using Claude Agent Development Kit</li>
                <li>Created Angular UI and FastAPI backend server</li>
                <li>Implemented LLM monitoring with OpenTelemetry</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Coordinator, Web Development Wing</h4>
                  <p className="text-gray-600">GeekHaven IIITA</p>
                </div>
                <span className="text-gray-500 font-medium">Apr 2023 – Mar 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Led web development initiatives</li>
                <li>Organized GeekCamp'24 and OpenCode'23</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-[#4A5346]">
              <GraduationCap className="text-[#4A5346]" size={24} />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xl font-bold text-gray-900">Indian Institute of Information Technology, Allahabad</h4>
                <p className="text-gray-600">B.Tech in Information Technology & Engineering</p>
                <p className="text-gray-700 font-medium mt-1">CGPA: 8.19/10</p>
              </div>
              <span className="text-gray-500 font-medium">Nov 2022 – Present</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-[#4A5346]">
              <Code className="text-[#4A5346]" size={24} />
              <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Web Development (90%)</h4>
                <p className="text-gray-600 text-sm">React, Next.js, Angular, FastAPI, Django, Node.js</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Agentic AI/ML (85%)</h4>
                <p className="text-gray-600 text-sm">Gemini API, OpenAI, LangChain, LangGraph</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Systems & DevOps (80%)</h4>
                <p className="text-gray-600 text-sm">GCP, AWS, Docker, Kubernetes, CI/CD</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Databases & Search (75%)</h4>
                <p className="text-gray-600 text-sm">PostgreSQL, vector databases</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-[#4A5346]">
              <Award className="text-[#4A5346]" size={24} />
              <h3 className="text-2xl font-bold text-gray-900">Featured Projects</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-gray-900">FinQueryAI</h4>
                <p className="text-gray-600 text-sm">Agentic AI system with web backend for financial query processing</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">CacheSense</h4>
                <p className="text-gray-600 text-sm">PyPI package for intelligent LLM response caching</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">CollabNConnect</h4>
                <p className="text-gray-600 text-sm">Real-time collaboration platform using WebRTC</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Code-Digger</h4>
                <p className="text-gray-600 text-sm">Tool for analyzing open-source contributions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
