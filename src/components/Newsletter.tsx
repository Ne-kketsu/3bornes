"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { withBasePath } from "@/lib/basePath";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter signup:", email);
    alert("Merci ! Vous serez tenu informé des futurs événements.");
    setEmail("");
  };

  return (
    <section className="relative py-16 bg-gradient-to-b from-slate-950 via-indigo-950/50 to-purple-950/40">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${withBasePath(
              "/images/ScenePainting.png"
            )}')`,
          }}
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-dark rounded-3xl p-8 md:p-12 text-center animate-fade-in border border-white/10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-md">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 backdrop-blur-sm bg-white/5 px-6 py-3 rounded-xl inline-block">
            Restez Informé
          </h2>

          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour être tenu informé des futurs
            événements, expositions et actualités de la Galerie des Trois
            Bornes.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              required
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
            />
            <Button
              type="submit"
              variant="glass"
              size="lg"
              className="px-8 rounded-full"
            >
              S&apos;inscrire
            </Button>
          </form>

          <p className="text-white/40 text-xs mt-6">
            Vos données sont protégées. Vous pouvez vous désabonner à tout
            moment.
          </p>
        </div>
      </div>
    </section>
  );
}
