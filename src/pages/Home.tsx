import { Link } from 'react-router-dom';
import { ArrowDown, Code2, Cloud, Database, Users, GitBranch, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div>
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-[#4A5346] relative">
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[200px] border-t-transparent border-r-[200px] border-r-[#E5B8AD] border-b-[200px] border-b-transparent"></div>
        </div>
        <div className="w-1/2 bg-[#E5B8AD] relative">
          <div className="absolute top-20 left-20 w-0 h-0 border-l-[120px] border-l-transparent border-t-[100px] border-t-[#F5F4ED] border-r-[120px] border-r-transparent"></div>
          <div className="absolute top-[40%] right-20 w-0 h-0 border-l-[150px] border-l-transparent border-t-[130px] border-t-[#F5F4ED] border-r-[150px] border-r-transparent"></div>
          <div className="absolute bottom-40 left-32 w-0 h-0 border-l-[180px] border-l-transparent border-t-[160px] border-t-[#F5F4ED] border-r-[180px] border-r-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-white">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              HEY, I'M ATHARWA ZAWAR
            </h1>
            <p className="text-xl mb-8 leading-relaxed max-w-lg">
              I'm a Full-stack Software Engineer who turns complex problems into simple, reliable systems with great user experiences.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 border-2 border-white rounded-full text-white font-medium hover:bg-white hover:text-[#4A5346] transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>

          {/* <div className="flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-t-full bg-[#D4A59A] overflow-hidden">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQFEV7CpzIYGoQ/profile-displayphoto-shrink_800_800/B56ZYjrR9CH0Ao-/0/1744355272768?e=1769644800&v=beta&t=6PHBXbqhtiywzqJ5kxfFwvQ1RVhn9mFsKMoW-SgwLo4"
                  alt="Atharwa Zawar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>

    {/* What I'm Doing Section */}
    <section className="bg-gradient-to-br from-white via-[#F5F4ED] to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">What I'm Doing </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Web Development */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-[#4A5346] text-3xl">💻</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
                <p className="text-gray-700">Full-stack apps with <span className="text-[#4A5346] font-semibold">React, Next.js, Angular</span> and backends in <span className="text-[#4A5346] font-semibold">FastAPI, Django, Node.js</span>.</p>
              </div>
            </div>
          </div>

          {/* Cloud & DevOps
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-[#4A5346] text-3xl">☁️</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud & DevOps</h3>
                <p className="text-gray-700">Deployments on <span className="text-[#4A5346] font-semibold">GCP and AWS</span> with <span className="text-[#4A5346] font-semibold">Docker, Kubernetes and CI/CD</span> pipelines.</p>
              </div>
            </div>
          </div> */}

          {/* Database & Systems */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-[#4A5346] text-3xl">🗄️</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Databases & Systems</h3>
                <p className="text-gray-700">Database optimization with <span className="text-[#4A5346] font-semibold">PostgreSQL, MongoDB, Redis</span> and scalable architectures.</p>
              </div>
            </div>
          </div>

          {/* Leadership & Mentoring */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-[#4A5346] text-3xl">👥</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership & Mentoring</h3>
                <p className="text-gray-700">Led <span className="text-[#4A5346] font-semibold">Web Development Wing of GeekHaven IIITA</span> events and mentored <span className="text-[#4A5346] font-semibold">30+ contributors</span> in open source.</p>
              </div>
            </div>
          </div>

          {/* Open Source */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-[#4A5346] text-3xl">🔧</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Open Source Contribution</h3>
                <p className="text-gray-700">Contributed to <span className="text-[#4A5346] font-semibold">OpenCode, Hacktoberfest</span> and other projects.</p>
              </div>
            </div>
          </div>

          {/* Website Development */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-[#4A5346] text-3xl">✨</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Production Websites</h3>
                <p className="text-gray-700">Built and deployed <span className="text-[#4A5346] font-semibold">3+ websites</span> for technical societies with optimal performance and UX.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="bg-gradient-to-br from-white via-[#F5F4ED] to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4A5346] to-[#8B9A7E] rounded-full flex items-center justify-center text-white font-bold text-xl">
                👨‍💼
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Mentor / Collaborator</h4>
                <p className="text-sm text-gray-600">GeekHaven IIITA</p>
              </div>
            </div>
            <p className="text-gray-700">
              Atharwa delivered reliable agentic prototypes under tight deadlines and demonstrated exceptional technical leadership. His ability to mentor junior developers and drive initiatives makes him invaluable to any team.
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#D4A59A] to-[#8B9A7E] rounded-full flex items-center justify-center text-white font-bold text-xl">
                👩‍💻
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Project Lead</h4>
                <p className="text-sm text-gray-600">Web Development Wing</p>
              </div>
            </div>
            <p className="text-gray-700">
              Strong technical contributor who owned critical microservices and helped scale infrastructure. His DevOps expertise and clean coding practices significantly improved our system performance and team productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
