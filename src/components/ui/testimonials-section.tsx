"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "We needed a WordPress site that looked stunning, performed seamlessly, and was fully secure. Muhammad Sufian delivered a flawless design with expert backend integration and smooth user experience. His blend of creative design and technical IT skills is truly exceptional.",
    author: "E-commerce Startup Founder",
    rating: 5,
    project: "Smooth & Secure WP Platform"
  },
  {
    quote: "Muhammad Sufian transformed our vision into a fully functional WordPress platform. Beyond building the site, he guided us on design, user experience, and backend structure. His expertise made a significant impact on user engagement and satisfaction.",
    author: "EdTech Co-Founder", 
    rating: 5,
    project: "Guided WP Platform"
  },
  {
    quote: "We needed a professional who could seamlessly blend stunning graphic design with robust IT and WordPress design skills — and Muhammad Sufian exceeded our expectations. His ability to create visually engaging, user-friendly designs while ensuring technical excellence made our website stand out. From responsive layouts to custom WordPress solutions, he’s the expert you want on your team.",
    author: "NGO Project Coordinator",
    rating: 5,
    project: "Custom WordPress & Design Integration"
  },
  {
    quote: "We sought someone who could handle both the aesthetics and technical side of our site — Muhammad Sufian was that rare find. His graphic design brought our brand to life, and his WordPress and IT expertise ensured everything functioned perfectly. Highly recommend for any project needing a full-stack approach.",
    author: "SaaS Product Manager",
    rating: 5,
    project: "Complete WP Design & IT Integration"
  },
  {
    quote: "From concept to launch, Muhammad Sufian expertly merged cutting-edge graphic design with solid IT and WordPress development. His attention to detail, seamless UX/UI, and backend reliability made the entire process stress-free. A genuine expert in every sense.",
    author: "Financial Consultant",
    rating: 5,
    project: "WordPress & Design"
  },
  {
    quote: "Muhammad Sufian combination of graphic design creativity and deep WordPress/IT knowledge took our website to the next level. He crafted a beautiful, user-friendly interface with flawless technical integration — an absolute professional and problem solver.",
    author: "Tech Recruiter",
    rating: 5,
    project: "Design & Tech Fusion"
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-6 lg:px-8 relative bg-gradient-to-b from-slate-900/30 via-slate-950/50 to-slate-900/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            Client Testimonials
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Clients
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Say About Me
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real feedback from real clients who trusted me with their projects and achieved 
            <span className="text-yellow-400 font-semibold"> exceptional results</span>
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">
                    {testimonial.author}
                  </div>
                  <div className="text-yellow-400 text-sm">
                    {testimonial.project}
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Your Success Story Could Be Next
          </h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Trusted by clients who value quality, dependability, and proven results.
          </p>
          
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-xl hover:from-yellow-700 hover:to-orange-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 