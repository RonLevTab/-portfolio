import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Badge } from '../../ui';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function EducationSection() {
  const education = [
    {
      degree: "BSc Data Science & Artificial Intelligence",
      institution: "Breda University of Applied Sciences",
      location: "Breda, Netherlands",
      period: "Sep 2023 – Jul 2027",
      status: "In Progress",
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-500",
      achievements: [
        "Degree Program Committee (DPC) member since Year 1",
        "Contributing to curriculum decisions and NVAO accreditation success",
        "Top 6 Business Ideas Award (April 2024)"
      ],
      coursework: [
        "Machine Learning",
        "Computer Vision", 
        "Reinforcement Learning",
        "AI Agents",
        "Database Systems",
        "SEO"
      ]
    },
    {
      degree: "Te'udat Bagrut Certificate",
      institution: "Misgav High-school",
      location: "Israel",
      period: "Graduated 2014",
      status: "Completed",
      icon: GraduationCap,
      color: "from-green-500 to-teal-500",
      achievements: [
        "Earned certificate with extra subjects in Sport and Biology",
        "Studied philosophy, theory, and physical training aspects of sports",
        "Biological sciences focus"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Academic foundation in data science, artificial intelligence, and interdisciplinary studies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                  <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg mb-4`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-center">
                          <Badge 
                            className={
                              edu.status === 'In Progress' 
                                ? "bg-blue-100 text-blue-800 border-blue-200" 
                                : "bg-green-100 text-green-800 border-green-200"
                            }
                          >
                            {edu.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                            <p className="text-lg font-semibold text-blue-600 mb-1">{edu.institution}</p>
                          </div>
                          
                          <div className="text-sm text-slate-500 space-y-1">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {edu.period}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {edu.location}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            Achievements & Activities:
                          </h4>
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, aIndex) => (
                              <div key={aIndex} className="flex items-start gap-2 text-slate-600">
                                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </div>

                        {edu.coursework && (
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-3">Relevant Coursework:</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.map((course, cIndex) => (
                                <Badge 
                                  key={cIndex}
                                  variant="secondary" 
                                  className="px-3 py-1 bg-slate-100 text-slate-700 font-medium"
                                >
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}