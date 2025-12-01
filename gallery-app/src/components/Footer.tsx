import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black to-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
                  href="tel:+33618342479"
                  className="hover:text-white transition-colors"
                >
                  +33 (0)6 18 34 24 79
                </a>
              </li>
              <li>
                <a
                  href="mailto:gregoconcept@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  gregoconcept@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} Galerie des Trois Bornes. Tous droits réservés.
          </p>
          <div className="text-white/40 text-xs">
            Réalisé par Yebo Logo • Supervisé par Rodrigue Grego
          </div>
        </div>
      </div>
    </footer>
  );
}
