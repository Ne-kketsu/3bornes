"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (you can integrate with an API or email service)
    console.log("Form submitted:", formData);
    alert("Merci pour votre message ! Nous vous répondrons rapidement.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-purple-950/40 via-blue-950/30 to-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/Meeting3.png')] bg-cover bg-center" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 backdrop-blur-xl bg-white/5 px-8 py-4 rounded-2xl inline-block">
            Contactez-nous
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto backdrop-blur-md bg-black/20 px-6 py-3 rounded-xl border border-white/10">
            Une question ? Un projet ? N’hésitez pas à nous contacter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <Card className="glass-dark border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  Informations de contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-white/70 mt-1" />
                  <div>
                    <p className="text-white font-medium">Adresse</p>
                    <p className="text-white/70">
                      9 Cité des Trois Bornes
                      <br />
                      75011 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-white/70 mt-1" />
                  <div>
                    <p className="text-white font-medium">Téléphone</p>
                    <a
                      href="tel:+33618342479"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      +33 (0)6 18 34 24 79
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-white/70 mt-1" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a
                      href="mailto:gregoconcept@gmail.com"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      gregoconcept@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="glass-dark border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.1748966786805!2d2.3695390156742!3d48.867210379287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66de3142358cb%3A0xe4766bfd7daa2f91!2sGalerie%20des%20Trois%20Bornes!5e0!3m2!1sen!2sfr!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ChristoBali96/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark p-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.instagram.com/galeriedes3bornes/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark p-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
            <Card className="glass-dark border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white/70 mb-2 text-sm"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white/70 mb-2 text-sm"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white/70 mb-2 text-sm"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="glass"
                    size="lg"
                    className="w-full"
                  >
                    Envoyer
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
