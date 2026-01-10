import React, { useState } from 'react';
import { Code2, Cloud, Database, Brain, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Code2 size={40} />,
      title: 'Web Development',
      subtitle: 'Full-Stack Solutions',
      color: 'from-[#4A5346] to-[#6B7A65]',
      bgColor: 'bg-[#4A5346]',
      description: 'Building robust, scalable web applications with modern technologies and best practices.',
      offerings: [
        {
          title: 'Frontend Development',
          details: [
            'React.js and Next.js applications',
            'Responsive UI/UX with Tailwind CSS',
            'State management with Redux/Context API',
          ]
        },
        {
          title: 'Backend Development',
          details: [
            'RESTful APIs with FastAPI, Django, Node.js',
            'Authentication & Authorization (JWT, OAuth)',
            'Real-time features with WebSockets',
            'API documentation and testing'
          ]
        },
        {
          title: 'Full-Stack Integration',
          details: [
            'End-to-end application development',
            'Payment gateway integration (Stripe, Razorpay)',
            'Third-party API integrations',
            'Cloud deployment and hosting',
          ]
        }
      ],
      techStack: ['React', 'Next.js', 'FastAPI', 'Django', 'Node.js', 'TypeScript']
    },
    {
      icon: <Cloud size={40} />,
      title: 'DevOps & Cloud',
      subtitle: 'Infrastructure & Automation',
      color: 'from-[#8B9A7E] to-[#A3B295]',
      bgColor: 'bg-[#8B9A7E]',
      description: 'Streamlining deployment pipelines and managing cloud infrastructure for optimal performance.',
      offerings: [
        {
          title: 'Containerization',
          details: [
            'Docker containerization for applications',
            'Docker Compose for multi-container setups',
            'Container optimization and security',
            'Registry management and versioning',
            'Development environment standardization'
          ]
        },
        {
          title: 'Orchestration',
          details: [
            'Kubernetes cluster setup and management',
            'Auto-scaling and load balancing',
            'Service mesh implementation',
            'Rolling updates and rollbacks',
            'Monitoring and logging solutions'
          ]
        },
      ],
      techStack: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS']
    },
    {
      icon: <Database size={40} />,
      title: 'Database Design',
      subtitle: 'Data Architecture & Optimization',
      color: 'from-[#D4A59A] to-[#E5B5AA]',
      bgColor: 'bg-[#D4A59A]',
      description: 'Designing efficient database schemas and optimizing queries for high-performance applications.',
      offerings: [
        {
          title: 'Database Architecture',
          details: [
            'Schema design and normalization',
            'Relational database modeling',
            'NoSQL database structure planning',
            'Backup and recovery solutions'
          ]
        },
        {
          title: 'Performance Optimization',
          details: [
            'Query optimization and indexing',
            'Database performance tuning',
            'Caching implementation (Redis)',
          ]
        },
        {
          title: 'Database Technologies',
          details: [
            'PostgreSQL for complex queries',
            'MongoDB for flexible schemas',
            'Redis for caching and sessions',
            'Database replication and sharding',
          ]
        }
      ],
      techStack: ['PostgreSQL', 'MongoDB', 'Redis', 'Oracle DB', 'Supabase', 'Database Design']
    },
    {
      icon: <Brain size={40} />,
      title: 'Machine Learning',
      subtitle: 'AI Integration & Solutions',
      color: 'from-[#6B7A65] to-[#8B9A7E]',
      bgColor: 'bg-[#6B7A65]',
      description: 'Integrating machine learning models and AI-powered features into web applications.',
      offerings: [
        {
          title: 'ML Model Integration',
          details: [
            'Pre-trained model integration',
            'Custom ML model deployment',
            'RESTful ML APIs',
            'Real-time prediction systems',
            'Model versioning and monitoring'
          ]
        },
        {
          title: 'AI-Powered Features',
          details: [
            'Natural Language Processing (NLP)',
            'Recommendation systems',
            'Image classification and recognition',
            'Predictive analytics',
            'Chatbots and conversational AI'
          ]
        },
        {
          title: 'Data Processing',
          details: [
            'Data preprocessing and cleaning',
            'Feature engineering',
            'Performance metrics tracking'
          ]
        }
      ],
      techStack: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Python', 'FastAPI']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F4ED] to-[#E5D5C8] py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-[#4A5346]" size={32} />
            <h1 className="text-5xl font-bold text-gray-900 inline-block relative pb-2">
              Freelancing
              <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#4A5346] via-[#8B9A7E] to-[#D4A59A] rounded-full"></span>
            </h1>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mt-6">
            Comprehensive solutions for modern web development, cloud infrastructure, database optimization, and AI integration.
          </p>
        </div>

        {/* Service Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`p-6 rounded-2xl transition-all duration-300 text-left ${
                activeService === index
                  ? `bg-gradient-to-br ${service.color} text-white shadow-2xl scale-105 transform`
                  : 'bg-white text-gray-900 hover:shadow-lg'
              }`}
            >
              <div className={`${activeService === index ? 'text-white' : 'text-[#4A5346]'} mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-1">{service.title}</h3>
              <p className={`text-sm ${activeService === index ? 'text-white/90' : 'text-gray-600'}`}>
                {service.subtitle}
              </p>
            </button>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="bg-white rounded-3xl p-10 shadow-2xl">
          <div className="flex items-start gap-6 mb-8">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${services[activeService].color} text-white`}>
              {services[activeService].icon}
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                {services[activeService].title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {services[activeService].description}
              </p>
            </div>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {services[activeService].offerings.map((offering, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#F5F4ED] to-white rounded-xl p-6 border-2 border-[#E5D5C8] hover:border-[#4A5346] transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${services[activeService].bgColor}`}></span>
                  {offering.title}
                </h4>
                <ul className="space-y-3">
                  {offering.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="flex items-start gap-3">
                      <CheckCircle className="text-[#4A5346] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="bg-gradient-to-r from-[#F5F4ED] to-[#E5D5C8] rounded-xl p-6 border-2 border-[#D4A59A]">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Code2 size={22} className="text-[#4A5346]" />
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-3">
              {services[activeService].techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white text-[#4A5346] rounded-full font-semibold text-sm border-2 border-[#4A5346] hover:bg-[#4A5346] hover:text-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;