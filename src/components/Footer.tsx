import React from "react";
import { ScrollReveal } from "./ScrollReveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black to-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay="0.1s">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 stagger-children animate-fade-in-up">
            {/* Brand */}
            <div>
              <h3 className="text-white text-xl font-bold mb-4">
                Galerie des 3 Bornes
              </h3>
              <p className="text-white/60 text-sm">
                Un lieu unique au cœur de Paris pour vos événements, expositions
                et projets créatifs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">
                Liens Rapides
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    A Propos
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    Galerie
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">
                Informations
              </h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>9 Cité des Trois Bornes</li>
                <li>75011 Paris, France</li>
                <li>
                  <a
                    href="tel:+33156980531"
                    className="hover:text-white transition-colors"
                  >
                    01 56 98 05 31
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+33635532831"
                    className="hover:text-white transition-colors"
                  >
                    06 35 53 28 31
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:galeriedes3bornes@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    galeriedes3bornes@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <ScrollReveal delay="0.3s">
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in-up">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} Galerie des Trois Bornes. Tous droits réservés.
            </p>
            <div className="text-white/40 text-xs">
              Réalisé par Balthazard Grego • Supervisé par Rodrigue Grego
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
