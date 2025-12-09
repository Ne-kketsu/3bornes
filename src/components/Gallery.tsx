"use client";

import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { X } from "lucide-react";
import { withBasePath } from "@/lib/basePath";

const images = [
  {
    url: withBasePath("/images/expo1.jpg"),
    alt: "Galerie des Trois Bornes - Exposition 1",
  },
  {
    url: withBasePath("/images/expo2.jpg"),
    alt: "Galerie des Trois Bornes - Exposition 2",
  },
  {
    url: withBasePath("/images/expo3.jpg"),
    alt: "Galerie des Trois Bornes - Exposition 3",
  },
  {
    url: withBasePath("/images/tournage1.jpg"),
    alt: "Galerie des Trois Bornes - Tournage professionnel",
  },
  {
    url: withBasePath("/images/Scene.png"),
    alt: "Galerie des Trois Bornes - Scène événementielle",
  },
  {
    url: withBasePath("/images/Meeting2.png"),
    alt: "Galerie des Trois Bornes - Espace meeting",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-20 bg-gradient-to-b from-purple-900/40 via-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 backdrop-blur-xl bg-white/5 px-8 py-4 rounded-2xl inline-block">
            Notre Galerie
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto backdrop-blur-md bg-black/20 px-6 py-3 rounded-xl border border-white/10">
            Découvrez notre ancienne imprimerie transformée en espace
            événementiel unique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-transparent border-0 cursor-pointer transform transition-all duration-500 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.url)}
            >
              <CardContent className="p-0 aspect-[4/3]">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-lg font-semibold">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
