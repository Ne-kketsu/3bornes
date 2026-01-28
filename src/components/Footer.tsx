import React from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black to-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay="0.1s">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 stagger-children animate-fade-in-up">
            {/* Brand */}
            <div>
              <h3 className="text-white text-xl font-bold mb-4">
                Galerie des 3 Bornes
              </h3>
              <p className="text-white/60 text-sm mb-4">
                Location de salle événementielle à Paris 11. Loft industriel de
                120m² pour coworking, séminaires, shootings, tournages,
                expositions et réceptions.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/ChristoBali96/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Galerie des 3 Bornes"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/galeriedestbparis11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Galerie des 3 Bornes"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">
                Navigation
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
                    À Propos
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    Galerie Photos
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    Nos Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    Contact & Réservation
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Keywords */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>Location salle événementielle</li>
                <li>Espace coworking Paris</li>
                <li>Salle de séminaire</li>
                <li>Studio shooting photo</li>
                <li>Location tournage Paris</li>
                <li>Salle d&apos;exposition</li>
                <li>Réception & cocktail</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <address className="not-italic">
                    9 Cité des Trois Bornes
                    <br />
                    75011 Paris, France
                  </address>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="flex-shrink-0" />
                  <div>
                    <a
                      href="tel:+33156980531"
                      className="hover:text-white transition-colors block"
                    >
                      01 56 98 05 31
                    </a>
                    <a
                      href="tel:+33635532831"
                      className="hover:text-white transition-colors block"
                    >
                      06 35 53 28 31
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="flex-shrink-0" />
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
