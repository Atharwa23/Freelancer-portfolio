import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
    title: 'Keystroke Dynamics Auth',
    description: 'A behavioral biometric authentication system identifying users via unique typing rhythms. Engineered a Java logging application for millisecond-precision timing collection and utilized Python-based classifiers to achieve authentication accuracy exceeding 99%.',
    image: 'https://www.cpomagazine.com/wp-content/uploads/2022/12/the-authentication-journey_1500.jpg',
    techStack: ['Python', 'Scikit-Learn', 'Java', 'Jupyter', 'JAR'],
    features: [
      'Biometric Classification Models',
      'High-Precision Timing Collection',
      '31-Point Feature Analysis',
      'False Acceptance'
    ],
    liveUrl: '#', 
    githubUrl: 'https://github.com/Atharwa23/Behavioural-Authentication',
    category: 'Machine Learning'
  },
  {
    "title": "CampusHub",
    "description": "A Flask-based web application for university campuses featuring seamless management of lost & found items and marketplace listings, complete with user authentication, email verification, image processing, and an intuitive dashboard.",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAh1BMVEU6WJ7///8mS5jS1+YzU5waRJUuUJo2VZ0dRpZyg7QsTpojSZg0VJxedK3l6PApTZmBkbyyu9ShrMybp8nu8PZGYqSmsc/a3+v4+fxVbanM0uOSn8SHlr94irhOaKbFzN9rf7KwudTq7fRugbMSQJQFPJJhd667w9pRaacAL40AOJEANI+OnMPA/hSqAAAHUklEQVR4nO2da3eqOBRASQwnlCCoPFWoj2vlzh3//++bE7RqK86UFuqa07M/3PaiZDV7JSchLxyHYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYfohANkDvnp0Pr4BZfbZavRlFpsK4NF5GRpTbUVPFKV8dG6GxWR9qbLE0aPzMyTqV5+uhBgHj87RgLhhv7Jy79E5Gg497teVEM/60XkaDNj0LWtDt0X0eq6FQoRk66FO+3YlREq1HkLcv6yYaj00ef+ycvPoXA2E6t+VEERLFhyGkHWgacuMhpA1olkP/SFcCUHy+VBNhpFVUhzYkothZC0oDtSYYVwJQVDWULVQiAm9ehithpK1ohfivaFcCeE+Om99o6rhZFXU6qEcrBZiPaQW4geshaIgVg+HrIVC/KJVD6N6SFk1rfbQHdIVsXoYrAeVJdaU5g/9QWshsXroFsPKolQP9XxYV0KM6UzywGxoWRmdwWU5yIDyNTmdTrxJhpZV0JmZ9gaO74LSyMM3yKJTskzvC0Lek9CRdXd8Znrn+vae3XstxYhOgFflnTzCHSnxsv16cW/Wg9L6ENmexfDlznpcfWdZRP1yZ20JnT4pPhu2S6nAab2+MHcqbgrt42I1nVqIyLb2cOQ5sjVq/dbt696yyPHailZBqBIiQcvS28KOb7Y1lLMIn5Bawpxdm6x1i/Y9rZFSB25WwBepHYTSwc2Oi7rpYJqbZYJbZSNTkN7YqmgVLATGbzOZO8cBOy3fjXXFpy6TeVe2Rv4xiivnbWFMxuRcYZHwN1fFaumdGzCzvopDo/k5VkN6tZQkmZy7nfrNnpZMUholvRDp5cgWr2RR+telIfDGmxw/KPJsbq46Ado8Z/a62NaVuQ5Lvo5PCR2U/11//bcDEguU8uT7gKzBGAAjQd9cx4Lme9H7G/D7+KknCdZA5gto+OIEQ/S+CJIEIuN5ahx/bZlQtFo+Sw9rM2llniiKpBk2/dJgnZ2yxXQwxhPrjb7hMjH9ZVlHWFaHZFhWh2RYVodkWNZ/Aizr4yiW9XFYVgdYVgdYVgdYVgdYVgdYVgdYVgdYVgdYVgdYVgdYVgd+hizJsj6O6lsW5XnD3mXRWaR8C8vqAMvqwCWXX1qKzbI+lQxlWZeZht1XktE/QtalUzoHjdhr+h3q3wm09n/9CFneeXtYUqWIA+DYn+l8fObp39mPx+vLMlQ6u1Bu6fsMLULbDG+BO9tMPsuMcg/eifqV9ejsDMudfSmfZErphIIW+twBTGiTYTv6doPEZynIHkJ9Jkh7KlvblOZugTdos+nD1caQL1cNvjrutPg84cwhHtuvAOlFzqkL3xGNNxlDun/VxuvDYefbev9LGLJ8aJKG9n6KC755beZlayNW3r1TGkuk7XnD8x9hy6+T00FzZpTcdiX1vmX+TzUxXC4Sy2quHI/mYeY3yNHp4FV76tht+dDjW1mqnFpbJlxMJpMyF6n2KJ443YIJa9HsOI3qVXOIWoB9gCbntmkLTrJ0s8H8+IE209DFIGXCjVEKXooMjrKU7T00ierTb/p8hQYmXCZLW1A8sbYnP+r1Mps9SVvS9hBV0MiC/VPgyHmclaD176fVdl2ttQmnfpPA1D/KquIs3tsOaTS3v2kH0mW2/FgL8f/AJGVsX1SlJuKv5thoEea5CKUDWbguCtfKgrU4qCgT+SIRKZRJIbZJDe9kqVLkeGcdOf4M0whrH5MMV1tKZ+CaZKnEb6xUef3SyDJSGokB2x4GmEGAsoLUPu2lYu3Kl3wh1W4T/sF++kmW91qytGeku8cIpkXlSuNjWZ3t5G6a0HlHileUbj71tSPmbvEapr1kBigrlTbAg5fkrqMOYqc1lIVx/Glo848xaxdFxhEHuAT4nRjD03EyDVsMrLRqTugdKV4xkRPhQrb10JuNT9h9+rO1suwAHspyV4U9U2VZAD76lYV3kbVdjEa5nZk4yrJ3/o2yquPEDt7q4yPmb0Jrj2w+jah2RQzGRvrokNvQ08gyTY4rMVeXdz4lVyUrzxDbGDSyYNPceS3rCCVZlYrq0RyzZGWpSmwOh0lxJcsLbQOAJes19lyqoYtdg8A5yvKnYoZ3vpFFbWzZRVnBXqxGBmXNwK/znVK75EoWKLHyrKzXKeazrOnrkSBWlgwzT6mXRlbzTbyV2iCgaztXXl5gQ2hClDXNdxh7rkuWwhgdy2AtwAeIoJGFRapNFmC4H6tnkUa2/wpibfAOQoesQNNtN/Y8GbOd+sEvkS1rcR2zlONPsPiZMImXs0UGdjq2jDHEbd/IgkzE8UKIvTZ5McPeqJI1phWvVnRs6fr8Vl6IMUxHZZ7X+/IpCJ7snLJ+rvFjubSOsjwfTdf4X5jmeQzN1093brC/HuHnmzTD5Px4ZL+At+HPmtJj49XDW/Pop6T0AxXYh0R7TTf/Nu+yBylPx/f40h7LA+ptImA/fv2tObcHIkyMkCuGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRjm+/kHO+xxNOU6idsAAAAASUVORK5CYII=",    
    "techStack": [
      "Python 3.12",
      "Flask Web Framework",
      "Supabase",
      "Pillow",
      "Jinja2",
    ],
    "features": [
      "User Management",
      "Lost & Found System ",
      "Marketplace Listings",
      "User Profile Dashboard",
    ],
    "liveUrl": "https://campus-hub-tau.vercel.app/auth/login",
    "githubUrl": "https://github.com/Atharwa23/CampusHub",
    "category": "Full Stack"
    },
    {
      title: 'Psych',
      description: 'A full-stack mental health support platform enabling users to book sessions, receive automated updates, and access verified psychiatrists with real-time engagement insights.',
      image: 'https://thumbs.dreamstime.com/b/doctor-patient-communicate-video-call-online-psychiatrist-concept-two-people-screens-smartphones-talking-to-each-189475625.jpg',
      techStack: ['React', 'TypeScript', 'Express', 'MongoDB'],
      features: [
  "Secure Video Consultation System",
  "Automated College & Student Email",
  "Student Booking Workflow",
  <b>IIITA Project Development & Launch</b>
],
      liveUrl: 'https://psych-xi.vercel.app/',
      githubUrl: 'https://github.com/Atharwa23/Psych',
      category: 'Full Stack'
    },
    {
      title: 'Secure Vault',
      description: 'A secure and reliable file storage platform with encrypted server-side storage and client-side decryption, built using Node.js, Express, and React with Vite.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      techStack: ['React', 'Node.js', 'WebCrypto API', 'Encryption'],
      features: ['End-to-End Encryption', 'Secure Storage', 'File Management', 'Client-side Decryption'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Atharwa23/Secure-Vault',
      category: 'Cyber Security'
    },
    {
      title: 'Travella',
      description: 'An AI-powered travel planning application that personalizes trip recommendations for destinations, stays, and activities based on user preferences.',
      image: 'https://github.com/Atharwa23/Travella-final/blob/main/public/logo.png?raw=true',
      techStack: ['Gemini AI', 'React', 'Node.js', 'Google Maps', 'APIs'],
      features: ['AI Recommendations', 'Personalized Itineraries', 'Destination Discovery', 'Activity Planning'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Atharwa23/Travella-final',
      category: 'Full Stack'
    }
  ];

  const categories = ['All', 'Full Stack', 'Machine Learning', 'Cyber Security'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F4ED] to-[#E5D5C8] py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 inline-block relative pb-2">
            My Projects
            <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#4A5346] via-[#8B9A7E] to-[#D4A59A] rounded-full"></span>
          </h1>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="text-[#4A5346]" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#4A5346] to-[#6B7A65] text-white shadow-lg scale-105'
                    : 'bg-[#F5F4ED] text-gray-700 hover:bg-[#E5D5C8] hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold text-lg">{project.category}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-[#F5F4ED] to-[#E5D5C8] text-[#4A5346] text-xs font-semibold rounded-full border border-[#D4A59A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-5">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4A5346]"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-[#4A5346] to-[#6B7A65] text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.liveUrl === '#' ? 'flex-1' : 'flex-1'} bg-gradient-to-r from-[#8B9A7E] to-[#A3B295] text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Projects Found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Projects;