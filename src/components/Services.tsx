"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Users, Calendar, Layers, Sparkles } from "lucide-react";
import { withBasePath } from "@/lib/basePath";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    icon: Users,
    title: "Coworking / Séminaire / Réunion",
    description: "Espace de travail professionnel et polyvalent",
    details:
      "Wi-Fi, vidéo projecteur, écran déroulant, paperboard, tables et chaises à disposition",
  },
  {
    icon: Calendar,
    title: "Événementiel & Soirées Privées",
    description: "Réceptions, cocktails, baptêmes, anniversaires",
    details:
      "Bar américain, frigo professionnel, sonorisation de qualité. Atmosphère conviviale",
  },
  {
    icon: Layers,
    title: "Expositions & Projections",
    description: "Expos, projections de films, Fashion Week",
    details:
      "120 m² de loft industriel avec deux salles. Appropriez-vous cet espace selon votre projet",
  },
  {
    icon: Sparkles,
    title: "Shooting, Casting & Tournage",
    description: "Studio photo, préparation tournage, régie film",
    details: "Ancienne imprimerie avec caractère unique et lumière naturelle",
  },
];

const features = [
  { label: "Surface Totale", value: "120 M²" },
  { label: "Salle Principale", value: "85 M²" },
  { label: "Seconde Salle", value: "25 M²" },
  { label: "Type", value: "LOFT INDUSTRIEL" },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-b from-slate-950 via-blue-950/40 to-indigo-950/30"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${withBasePath("/images/VideGS5.jpg")}')`,
          }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 backdrop-blur-xl bg-white/5 px-8 py-4 rounded-2xl inline-block animate-zoom-in">
              Nos Services
            </h2>
            <p
              className="text-xl text-white/70 max-w-2xl mx-auto backdrop-blur-md bg-black/20 px-6 py-3 rounded-xl border border-white/10 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Un espace polyvalent adapté à tous vos projets
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <ScrollReveal delay="0.2s">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-dark border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 animate-slide-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-white/10 rounded-lg w-fit group-hover:bg-white/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60 text-sm">{service.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* Features */}
        <ScrollReveal delay="0.4s">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 stagger-children">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-dark p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300 animate-zoom-in"
              >
                <p className="text-white/60 text-sm mb-2">{feature.label}</p>
                <p className="text-white text-xl font-bold">{feature.value}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal delay="0.6s">
          <div className="mt-16 text-center animate-fade-in-up">
            <div className="glass-dark p-8 rounded-2xl max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Prix Attractif
              </h3>
              <p className="text-white/70 mb-6">
                Quartier vivant et branché • Wi-Fi & Sonorisation • Vidéo
                projecteur • Bar américain • Vestiaires & Toilettes • Parking
                dans l&apos;impasse
              </p>
              <a
                href="#booking"
                className="inline-block glass text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300 font-medium border border-white/30"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
