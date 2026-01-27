"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { withBasePath } from "@/lib/basePath";
import { ScrollReveal } from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-black via-purple-950/30 to-purple-900/20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${withBasePath("/images/VideGS4.jpg")}')`,
          }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 backdrop-blur-xl bg-white/5 px-8 py-4 rounded-2xl inline-block animate-zoom-in">
              Un Lieu Unique
            </h2>
            <p
              className="text-xl text-white/70 max-w-2xl mx-auto backdrop-blur-md bg-black/20 px-6 py-3 rounded-xl border border-white/10 inline-block animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Au cœur de Paris
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <ScrollReveal delay="0.1s">
            <div className="space-y-6 animate-slide-in-left">
              <Card className="glass-dark border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Notre Histoire
                  </h3>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      La Galerie des 3 Bornes vous met à disposition son espace
                      dans une{" "}
                      <span className="text-white font-semibold">
                        ancienne imprimerie de 120 m²
                      </span>{" "}
                      transformée en loft industriel.
                    </p>
                    <p>
                      L&apos;espace se scinde en{" "}
                      <span className="text-white font-semibold">
                        deux salles
                      </span>
                      , une de 85m² et l&apos;autre 25m². La galerie en
                      rez-de-chaussée est située dans une impasse au calme
                      comprenant deux entrées séparées.
                    </p>
                    <p>
                      L&apos;impasse permet aux véhicules de se garer en toute
                      tranquillité afin de pouvoir décharger du matériel.
                    </p>
                    <p className="text-white font-medium">
                      Les possibilités de vous approprier cet espace sont
                      multiples.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Location Highlight */}
              <Card className="glass-dark border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    📍 Quartier République
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    À deux pas du Marais, la Galerie des 3 Bornes se situe dans
                    le quartier République avec tous les transports à proximité.
                    Quartier vivant et branché, vous y trouverez un large choix
                    de restaurants, de bars et une vie culturelle avec ses
                    nombreux théâtres.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          {/* Image Grid */}
          <ScrollReveal delay="0.2s">
            <div className="grid grid-cols-2 gap-4 animate-slide-in-right stagger-children">
              <div className="space-y-4">
                <div className="relative aspect-square rounded-xl overflow-hidden group">
                  <img
                    src={withBasePath("/images/VideGS2.jpg")}
                    alt="Grande Salle - Vue vide"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                  <img
                    src={withBasePath("/images/ReunionGS7.jpg")}
                    alt="Grande Salle - Réunion"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                  <img
                    src={withBasePath("/images/VidePS2.jpg")}
                    alt="Petite Salle - Vue vide"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden group">
                  <img
                    src={withBasePath("/images/ReunionPS4.jpg")}
                    alt="Petite Salle - Réunion"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
