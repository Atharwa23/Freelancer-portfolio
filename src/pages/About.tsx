import React from 'react';
import { Briefcase, GraduationCap, Code2 } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F4ED] to-[#E5D5C8] py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- Header / Intro Section --- */}
        <div className="bg-gradient-to-br from-white via-[#F5F4ED] to-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 mb-12 border border-[#E5D5C8]">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-3 inline-block relative pb-2">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#4A5346] via-[#8B9A7E] to-[#D4A59A] rounded-full"></span>
            </h2>
          </div>

          <div className="space-y-6">
            {/* Main Intro Card */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-[#4A5346] shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a <span className="font-bold text-[#4A5346]">Full-stack Software Engineer</span> and <span className="font-bold text-[#4A5346]">DevOps enthusiast</span> currently pursuing a <span className="font-bold text-[#4A5346]">B.Tech in Information Technology & Engineering</span> at IIIT Allahabad. I specialize in building robust, production-ready web systems—ranging from high-performance UIs in <span className="font-semibold text-[#4A5346]">React/Angular</span> to resilient backends in <span className="font-semibold text-[#4A5346]">FastAPI/Django</span>.
              </p>
            </div>

            {/* Skills Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-[#4A5346] to-[#5A6356] rounded-lg p-5 text-white shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold mb-2">🎨</div>
                <h3 className="font-bold text-lg mb-2">Frontend</h3>
                <p className="text-sm text-gray-100">React, Next.js, Angular, Tailwind CSS</p>
              </div>
              <div className="bg-gradient-to-br from-[#8B9A7E] to-[#6B7A65] rounded-lg p-5 text-white shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold mb-2">⚙️</div>
                <h3 className="font-bold text-lg mb-2">Backend</h3>
                <p className="text-sm text-gray-100">FastAPI, Django, Node.js, REST APIs</p>
              </div>
              <div className="bg-gradient-to-br from-[#D4A59A] to-[#C4956A] rounded-lg p-5 text-white shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold mb-2">🗄️</div>
                <h3 className="font-bold text-lg mb-2">DevOps and Databases</h3>
                <p className="text-sm text-gray-100">Docker, Kubernetes, MongoDB, PostgreSQL</p>
              </div>
            </div>

            {/* Passion Section */}
            <div className="bg-gradient-to-r from-[#F5F4ED] to-[#E5D5C8] rounded-xl p-6 border border-[#D4A59A]">
              <h3 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">💡</span> My Philosophy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I'm passionate about <span className="font-semibold text-[#4A5346]">clean architecture</span>, <span className="font-semibold text-[#4A5346]">database optimization</span>, and <span className="font-semibold text-[#4A5346]">automation</span>. I transform complex requirements into elegant, scalable solutions. Whether architecting microservices or optimizing database queries, I focus on delivering product-quality code that performs at scale.
              </p>
            </div>

            {/* Additional Info */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-white rounded-lg p-5 border-t-4 border-[#4A5346] shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">🚀 What I Do</h4>
                <p className="text-sm text-gray-700">Build scalable web applications, mentor junior developers, and contribute to the open-source ecosystem.</p>
              </div>
              <div className="flex-1 bg-white rounded-lg p-5 border-t-4 border-[#8B9A7E] shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">🎯 My Goal</h4>
                <p className="text-sm text-gray-700">Ship product-quality code that solves real problems and makes a meaningful impact on users and the community.</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Core Competencies --- */}
        <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[#F5F4ED] rounded-lg">
                <Code2 className="text-[#4A5346]" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 relative">
              Core Competencies
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#4A5346] to-transparent rounded-full"></span>
            </h2>
          </div>

          <div className="space-y-8">
            {/* Skill 1 */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-gray-900 text-lg">Web Development</span>
                <span className="text-[#4A5346] font-semibold">85%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-[#4A5346] to-[#6B7A65] h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '85%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2 font-medium">React, Next.js, Angular, FastAPI, Django, Node.js</p>
            </div>

            {/* Skill 2 */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-gray-900 text-lg">Databases</span>
                <span className="text-[#D4A59A] font-semibold">80%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-[#D4A59A] to-[#E5B5AA] h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '80%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2 font-medium">PostgreSQL, MongoDB, Oracle DB, Redis</p>
            </div>

            {/* Skill 3 */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-gray-900 text-lg">DevOps & Systems</span>
                <span className="text-[#8B9A7E] font-semibold">75%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-[#8B9A7E] to-[#A3B295] h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '75%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2 font-medium">Docker, Kubernetes</p>
            </div>
          </div>
        </div>

        {/* --- Experience Section (Revamped) --- */}
        <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[#F5F4ED] rounded-lg">
                <Briefcase className="text-[#4A5346]" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 relative">
              Experience
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#4A5346] to-transparent rounded-full"></span>
            </h2>
          </div>

          <div className="space-y-8">
            {/* Experience Card 1 - Main Role */}
            <div className="bg-gradient-to-br from-[#F5F4ED] to-white p-6 rounded-xl border-2 border-[#8B9A7E] hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Coordinator, Web Development Wing</h3>
                  <h4 className="text-lg text-[#4A5346] font-semibold mt-1">GeekHaven IIITA</h4>
                </div>
                <span className="bg-[#4A5346] text-white px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap">Jan 2025 – Present</span>
              </div>
              
              <div className="space-y-5">
                {/* Team Leadership Achievement */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#4A5346]">
                      <span className="text-white font-bold">✦</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-lg mb-1">Technical Leadership</h5>
                    <p className="text-gray-700">Led a specialized team of developers to architect and deploy <span className="font-bold text-[#4A5346]">5+ production-grade websites</span> for GeekHaven, streamlining workflows and elevating technical standards across the organization.</p>
                  </div>
                </div>

                {/* Eudia x IIITA Hackathon */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#D4A59A]">
                      <span className="text-white font-bold">◆</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-lg mb-1">Eudia x IIITA Hackathon</h5>
                    <p className="text-gray-700">Organized a large-scale hackathon in collaboration with <span className="font-bold text-[#4A5346]">Eudia AI</span>, managing technical infrastructure and logistics for <span className="font-bold text-[#4A5346]">200+ participants</span> from the college. This was one of the largest coding events at IIITA.</p>
                  </div>
                </div>

                {/* OpenCode'25 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#8B9A7E]">
                      <span className="text-white font-bold">◈</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-lg mb-1">OpenCode'25</h5>
                    <p className="text-gray-700">Orchestrated IIITA's flagship open-source event, fostering a vibrant culture of open-source contribution and Git proficiency across the institution.</p>
                  </div>
                </div>

                {/* GeekCamp'25 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#6B7A65]">
                      <span className="text-white font-bold">✧</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-lg mb-1">GeekCamp'25</h5>
                    <p className="text-gray-700">Conducted comprehensive technical workshop series designed to mentor junior developers, teaching modern web development practices, frameworks, and best practices to bridge skill gaps within the community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Education Section --- */}
          <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#F5F4ED] rounded-lg">
                  <GraduationCap className="text-[#4A5346]" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 relative">
                Education
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#4A5346] to-transparent rounded-full"></span>
              </h2>
            </div>
            <div className="border-l-4 border-[#4A5346] pl-8 py-1">
              <h3 className="text-xl font-bold text-gray-900">Indian Institute of Information Technology, Allahabad</h3>
              <p className="text-[#4A5346] font-semibold text-lg">B.Tech in Information Technology & Engineering</p>
              <div className="flex items-center gap-4 mt-2 text-gray-600">
                  <span className="bg-[#F5F4ED] px-3 py-1 rounded-full text-sm font-medium">Sep 2023 – Present</span>
                  <span className="font-bold text-gray-800">CGPA: 8.44/10</span>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default About;