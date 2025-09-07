"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ShoppingCart, Users, Heart } from "lucide-react";

const featuredProjects = [
  {
    title: "WP Real Estate Listings",
    description: "Designed and implemented a WordPress real estate website with advanced search filters, property galleries, and agent profiles.",
    icon: <ShoppingCart className="w-6 h-6" />,
    technologies: ["WordPress", "Advanced Custom Fields", "Well Deisgn", "RESTful API", "E-commerce"],
    category: "Real Estate / Property Listings",
    color: "from-blue-500 to-blue-600",
    featured: true
  },
  {
    title: "Minimalist Blogger Revamp",
    description: "Redesigned an existing Blogger site with a clean, minimalist layout to improve readability and mobile responsiveness.",
    icon: <Users className="w-6 h-6" />,
    technologies: ["Google Blogger", "HTML5", "CSS3", "Responsive Templates"],
    category: "Blog Redesign / UX Improvement",
    color: "from-purple-500 to-purple-600",
    featured: true
  },
  {
    title: "Quote Stream Redesign",
    description: "Revamped a quote aggregation site (like epicquotes.pro) with refreshed UX, imagery, and mobile-first layout.",
    icon: <Heart className="w-6 h-6" />,
    technologies: ["WordPress", "HTML5", "Elementor Pro", "ACF", "Datasets"],
    category: "Web Design / Content Presentation",
    color: "from-red-500 to-red-600",
    featured: true
  }
];

const additionalProjects = [
  {
    title: "WP Elite Build",
    description: "WP Elite Build is a high-performance, fully customized WordPress website tailored for small to mid-sized businesses seeking a premium online presence.",
    technologies: ["Elementor Pro", "ACF", "Yoast SEO", "User-friendly UI"],
    category: "Web Design",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    title: "UX Flow Redesign for Mobile App",
    description: "This project involved a comprehensive redesign of the user experience flow for an existing mobile app to enhance usability, engagement, and overall satisfaction.",
    technologies: ["Figma", "Adobe XD", "Photoshop (for UI assets)", "Adobe Illustrator"],
    category: "UX/UI Design",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    title: "Portfolio Website",
    description: "Designed and developed a personal portfolio website to showcase professional skills, projects, and creative work.",
    technologies: ["Elementor", "Custom HTML5 & CSS3", "Responsive Design"],
    category: "Web Design",
    color: "from-indigo-500 to-indigo-600"
  }
  ,
  {
    title: "Website Scraper",
    description: "Developed a custom website scraper tool designed to extract and aggregate data from multiple online sources efficiently.",
    technologies: ["Elementor", "Custom HTML5 & CSS3", "Responsive Design"],
    category: "Automation",
    color: "from-indigo-500 to-indigo-600"
  }
    ,
  {
    title: "Brand Campaign",
    description: "Created a complete brand identity redesign including logo, marketing collateral, and social media visuals to increase brand recognition.",
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign "],
    category: "Branding / Visual Design",
    color: "from-indigo-500 to-indigo-600"
  }
    ,
  {
    title: "Social Media Visuals Pack",
    description: "Designed a cohesive set of social media graphics for multiple platforms, boosting client engagement and brand consistency.",
    technologies: ["Canva", "Adobe Photoshop", "Illustrator"],
    category: "Social Media Design",
    color: "from-indigo-500 to-indigo-600"
  }

      ,
  {
    title: "Event Branding Suite",
    description: "Developed the full visual identity for a major conference, including banners, brochures, and digital ads.",
    technologies: ["Canva", "Adobe Photoshop", "Illustrator"],
    category: "Event Design / Print Media",
    color: "from-indigo-500 to-indigo-600"
  }
      ,
  {
    title: "Infographic Series for Education",
    description: "Created a series of educational infographics to simplify complex topics and improve audience comprehension.",
    technologies: ["Canva", "Adobe Photoshop", "Illustrator"],
    category: "Educational Design",
    color: "from-indigo-500 to-indigo-600"
  }
        ,
  {
    title: "Training Material Development",
    description: "Developed interactive training manuals and presentations using MS Word and PowerPoint, incorporating visuals and quizzes for enhanced learning.",
    technologies: ["Microsoft Word,", "PowerPoint", "Adobe Acrobat (for PDFs)"],
    category: "Training & Development / Educational Design",
    color: "from-indigo-500 to-indigo-600"
  }
        ,
  {
    title: "Proposal and Tender Document Template",
    description: "Developed professional, branded templates for proposals and tender submissions, including pre-formatted sections, headers/footers, and placeholders for easy customization.",
    technologies: ["Microsoft Word", "Templates", "Styles"],
    category: "Document Design",
    color: "from-indigo-500 to-indigo-600"
  }
        ,
  {
    title: "WP Custom Blog Theme",
    description: "Developed a unique, fully responsive custom WordPress theme tailored to a lifestyle blogger’s branding and content needs.",
    technologies: ["WordPress", "CSS3", "Custom Post Types"],
    category: "Blog Design / Custom Theme Development",
    color: "from-indigo-500 to-indigo-600"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative bg-gradient-to-b from-slate-900/30 via-slate-950/50 to-slate-900/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            Featured Projects
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Real Projects,
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing a selection of projects that demonstrate my expertise in 
            <span className="text-cyan-400 font-semibold"> full-stack development</span>, 
            <span className="text-blue-400 font-semibold"> mobile apps</span>, and 
            <span className="text-purple-400 font-semibold"> innovative solutions</span>
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Featured Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-medium">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                  Featured
                </div>
                <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-sm text-cyan-400 font-medium mb-3">
                {project.category}
              </p>

              <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3 mt-auto">
                <button className="flex-1 px-4 py-2 bg-slate-700/50 border border-slate-600/50 text-gray-300 rounded-lg hover:bg-slate-600/50 hover:border-slate-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">View Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Additional Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300 flex flex-col h-full"
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-cyan-400 font-medium mb-3">
                  {project.category}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/30 text-gray-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-gray-500 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to See More?
          </h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Check out my complete project portfolio and source code on GitHub.
          </p>
          
          <button 
            onClick={() => window.open('https://github.com/mrbusy1', '_blank')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
          >
            <Github className="w-5 h-5" />
            View More Projects on GitHub
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 