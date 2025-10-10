import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../../ui';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  MessageSquare,
  Heart
} from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Ronlevtab@gmail.com",
      href: "mailto:Ronlevtab@gmail.com",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+31 6 48690335",
      href: "tel:+31648690335",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Breda, Netherlands",
      href: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "ronlev-tabuchov",
      href: "https://github.com/ronlev-tabuchov",
      color: "from-gray-600 to-gray-700"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to collaborate on innovative AI and data science projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
                <MessageSquare className="w-6 h-6" />
                Get In Touch
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in data science and AI. Whether you're looking for a 
                passionate student developer or want to connect professionally, I'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                    className="group"
                  >
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-slate-400 font-medium">{contact.label}</div>
                            <div className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300">
                              {contact.value}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/20"
        >
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400" /> by Ron Lev Tabuchov
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </div>
    </section>
  );
}