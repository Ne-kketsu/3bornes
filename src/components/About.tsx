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
            backgroundImage: `url('${withBasePath("/images/expo4.jpg")}')`,
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
                      A proximité du{" "}
                      <span className="text-white font-semibold">Marais</span>,
                      La Galerie des Trois Bornes est nichée entre{" "}
                      <span className="text-white font-semibold">
                        Belleville
                      </span>
                      ,
                      <span className="text-white font-semibold">
                        {" "}
                        République
                      </span>{" "}
                      &
                      <span className="text-white font-semibold">
                        {" "}
                        Ménilmontant
                      </span>
                      , dans un quartier culturel et artistique, animé de bars,
                      restaurants et théâtres.
                    </p>
                    <p>
                      Cette{" "}
                      <span className="text-white font-semibold">
                        ancienne imprimerie de 85 m²
                      </span>
                      , transformée en galerie, ouvre ses portes à des
                      événements pluridisciplinaires.
                    </p>
                    <p>
                      Celui-ci accueille le temps d&apos;un week-end, d&apos;une
                      semaine ou d&apos;une soirée, expositions, soirées de
                      projections, shootings photos, casting.
                    </p>
                    <p className="text-white font-medium">
                      Chacun peut s&apos;approprier cet espace comme il
                      l&apos;entend et s&apos;y sentir à l&apos;aise selon son
                      envie, son projet, son objectif.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Location Highlight */}
              <Card className="glass-dark border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    📍 Quartier Culturel
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Situé dans l&apos;un des quartiers les plus dynamiques de
                    Paris, entre République et Belleville, la galerie bénéficie
                    d&apos;un environnement riche en culture, avec de nombreux
                    bars, restaurants et théâtres à proximité.
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
                    src={withBasePath("/images/OberkPhoto.png")}
                    alt="Galerie espace"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                  <img
                    src={withBasePath("/images/expo5.jpg")}
                    alt="Espace événementiel"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                  <img
                    src={withBasePath("/images/tournage2.jpg")}
                    alt="Vue intérieure"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden group">
                  <img
                    src={withBasePath("/images/seat-red.jpg")}
                    alt="Aménagement"
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
