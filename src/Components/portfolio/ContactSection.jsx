import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../../ui';
import { 
  Mail, 
  Instagram,
  MapPin, 
  Linkedin, 
  MessageSquare,
  Heart
} from 'lucide-react';
import { contactData } from '../../data';

export default function ContactSection() {
  const iconMap = {
    'Mail': Mail,
    'Instagram': Instagram,
    'MapPin': MapPin,
    'Linkedin': Linkedin
  };

  const contactInfo = contactData.contactInfo.map(contact => ({
    ...contact,
    icon: iconMap[contact.icon]
  }));

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
            {contactData.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {contactData.description}
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
                {contactData.subtitle}
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                {contactData.message}
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
            Made with <Heart className="w-4 h-4 text-red-400" /> by {contactData.footer.name}
          </p>
          <p className="text-slate-500 text-sm mt-2">
            {contactData.footer.copyright}
          </p>
        </motion.div>
      </div>
    </section>
  );
}