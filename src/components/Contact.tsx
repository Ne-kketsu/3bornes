"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Select } from "./ui/select";
import { Calendar } from "./ui/calendar";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Check,
  Calendar as CalendarIcon,
  Clock,
} from "lucide-react";
import { withBasePath } from "@/lib/basePath";
import { ScrollReveal } from "./ScrollReveal";

type BookingStep = "date" | "time" | "type" | "info" | "success";

interface BookingData {
  date: Date | null;
  startTime: string;
  endTime: string;
  type: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function Contact() {
  const [step, setStep] = useState<BookingStep>("date");
  const [bookingData, setBookingData] = useState<BookingData>({
    date: null,
    startTime: "",
    endTime: "",
    type: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bookingTypes = [
    "Coworking",
    "Afterwork & Événements Privés",
    "Expositions & Projections",
    "Shooting & Casting",
    "Autres",
  ];

  const timeSlots = Array.from({ length: 17 }, (_, i) => {
    const hour = i + 8;
    return `${hour.toString().padStart(2, "0")}:00`;
  });

  const isDateDisabled = (date: Date) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    return date < tomorrow;
  };

  const handleDateSelect = (date: Date) => {
    setBookingData({ ...bookingData, date });
    setStep("time");
  };

  const handleTypeSelect = (type: string) => {
    setBookingData({ ...bookingData, type });
    setStep("info");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formattedDate = bookingData.date
        ? new Intl.DateTimeFormat("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(bookingData.date)
        : "";

      // EmailJS configuration
      const serviceId = "service_galerie3b"; // Replace with your EmailJS service ID
      const templateId = "template_booking"; // Replace with your EmailJS template ID
      const publicKey = "JXbh3oWMM73D5tOQz"; // Replace with your EmailJS public key

      // Template parameters
      const templateParams = {
        to_email: "gregoconcept@gmail.com",
        from_name: `${bookingData.firstName} ${bookingData.lastName}`,
        booking_date: formattedDate,
        start_time: bookingData.startTime,
        end_time: bookingData.endTime,
        booking_type: bookingData.type,
        client_firstName: bookingData.firstName,
        client_lastName: bookingData.lastName,
        client_email: bookingData.email,
        client_phone: bookingData.phone,
        subject: `Nouvelle réservation - ${formattedDate} de ${bookingData.startTime} à ${bookingData.endTime}`,
      };

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Show success
      setStep("success");
    } catch (error) {
      console.error("Booking error:", error);
      alert("Erreur lors de l'envoi de la réservation. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setBookingData({
      date: null,
      startTime: "",
      endTime: "",
      type: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
    setStep("date");
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-purple-950/40 via-blue-950/30 to-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${withBasePath("/images/Meeting3.png")}')`,
          }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 backdrop-blur-xl bg-white/5 px-8 py-4 rounded-2xl inline-block animate-zoom-in">
              Contactez-nous
            </h2>
          </ScrollReveal>
          <ScrollReveal delay="0.2s">
            <p className="text-xl text-white/70 max-w-2xl mx-auto backdrop-blur-md bg-black/20 px-6 py-3 rounded-xl border border-white/10 animate-fade-in-up">
              Une question ? Un projet ? N&apos;hésitez pas à nous contacter
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ScrollReveal delay="0.1s">
            <div className="space-y-6 animate-slide-in-left">
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
          </ScrollReveal>

          {/* Booking Widget */}
          <ScrollReveal delay="0.2s">
            <div className="relative animate-slide-in-right">
              {/* Scroll anchor - positioned to account for navbar height */}
              <div id="booking" className="absolute -top-20 md:-top-24" />
              <Card className="glass-dark border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center gap-2">
                    {step === "success" ? (
                      <>
                        <Check className="w-6 h-6 text-green-400" />
                        Réservation confirmée
                      </>
                    ) : (
                      <>Réservez l&apos;espace</>
                    )}
                  </CardTitle>
                  {step !== "success" && (
                    <div className="flex gap-2 mt-4">
                      {["date", "time", "type", "info"].map((s, i) => (
                        <div
                          key={s}
                          className={`h-1 flex-1 rounded-full transition-all ${
                            ["date", "time", "type", "info"].indexOf(step) >= i
                              ? "bg-white"
                              : "bg-white/20"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  {step === "date" && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-white/70 mb-2">
                        <CalendarIcon className="w-5 h-5" />
                        <p className="text-sm">
                          Sélectionnez une date (à partir de demain)
                        </p>
                      </div>
                      <Calendar
                        selected={bookingData.date || undefined}
                        onSelect={handleDateSelect}
                        disabled={isDateDisabled}
                      />
                    </div>
                  )}

                  {step === "time" && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 text-white/70 mb-2">
                        <Clock className="w-5 h-5" />
                        <p className="text-sm">
                          Date:{" "}
                          {bookingData.date && formatDate(bookingData.date)}
                        </p>
                      </div>

                      <div>
                        <label className="block text-white/70 mb-3 text-sm font-medium">
                          Heure de début (8h00 - 23h00)
                        </label>
                        <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 bg-black/20 rounded-lg">
                          {timeSlots.slice(0, -1).map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() =>
                                setBookingData({
                                  ...bookingData,
                                  startTime: time,
                                })
                              }
                              className={`px-4 py-2 rounded-lg border transition-all ${
                                bookingData.startTime === time
                                  ? "bg-white text-black border-white"
                                  : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      {bookingData.startTime && (
                        <div>
                          <label className="block text-white/70 mb-3 text-sm font-medium">
                            Heure de fin ({bookingData.startTime} - 00h00)
                          </label>
                          <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 bg-black/20 rounded-lg">
                            {timeSlots
                              .filter((time) => {
                                const startHour = parseInt(
                                  bookingData.startTime.split(":")[0]
                                );
                                const currentHour = parseInt(
                                  time.split(":")[0]
                                );
                                return currentHour > startHour;
                              })
                              .map((time) => (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={() =>
                                    setBookingData({
                                      ...bookingData,
                                      endTime: time,
                                    })
                                  }
                                  className={`px-4 py-2 rounded-lg border transition-all ${
                                    bookingData.endTime === time
                                      ? "bg-white text-black border-white"
                                      : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                          </div>
                        </div>
                      )}

                      <div className="flex gap-3 pt-4">
                        <button
                          type="button"
                          onClick={() => setStep("date")}
                          className="text-white/70 hover:text-white text-sm"
                        >
                          ← Retour
                        </button>
                        {bookingData.startTime && bookingData.endTime && (
                          <Button
                            type="button"
                            onClick={() => setStep("type")}
                            variant="glass"
                            className="flex-1"
                          >
                            Continuer
                          </Button>
                        )}
                      </div>
                    </div>
                  )}

                  {step === "type" && (
                    <div className="space-y-4">
                      <p className="text-white/70 text-sm mb-4">
                        Date: {bookingData.date && formatDate(bookingData.date)}
                        <br />
                        Horaire: {bookingData.startTime} - {bookingData.endTime}
                      </p>
                      <label className="block text-white/70 mb-2 text-sm">
                        Type de réservation
                      </label>
                      <div className="space-y-2">
                        {bookingTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleTypeSelect(type)}
                            className={`w-full px-4 py-3 rounded-lg border transition-all text-left ${
                              bookingData.type === type
                                ? "bg-white text-black border-white"
                                : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep("time")}
                        className="text-white/70 hover:text-white text-sm mt-4"
                      >
                        ← Retour
                      </button>
                    </div>
                  )}

                  {step === "info" && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <p className="text-white/70 text-sm mb-4">
                        {bookingData.date && formatDate(bookingData.date)}
                        <br />
                        {bookingData.startTime} - {bookingData.endTime} •{" "}
                        {bookingData.type}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white/70 mb-2 text-sm">
                            Prénom *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={bookingData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                            placeholder="Prénom"
                          />
                        </div>
                        <div>
                          <label className="block text-white/70 mb-2 text-sm">
                            Nom *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={bookingData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                            placeholder="Nom"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-white/70 mb-2 text-sm">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={bookingData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-white/70 mb-2 text-sm">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={bookingData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setStep("type")}
                          className="text-white/70 hover:text-white text-sm"
                        >
                          ← Retour
                        </button>
                        <Button
                          type="submit"
                          variant="glass"
                          size="lg"
                          className="flex-1"
                          disabled={isSubmitting}
                        >
                          {isSubmitting
                            ? "Envoi..."
                            : "Confirmer la réservation"}
                        </Button>
                      </div>
                    </form>
                  )}

                  {step === "success" && (
                    <div className="space-y-6 text-center py-8">
                      <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto">
                        <Check className="w-8 h-8 text-green-400" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white">
                          Réservation confirmée !
                        </h3>
                        <p className="text-white/70">
                          Nous avons bien reçu votre demande de réservation.
                        </p>
                      </div>
                      <div className="glass-dark p-4 rounded-xl text-left space-y-2">
                        <p className="text-white/70 text-sm">
                          <span className="font-semibold text-white">
                            Date:
                          </span>{" "}
                          {bookingData.date && formatDate(bookingData.date)}
                        </p>
                        <p className="text-white/70 text-sm">
                          <span className="font-semibold text-white">
                            Horaire:
                          </span>{" "}
                          {bookingData.startTime} - {bookingData.endTime}
                        </p>
                        <p className="text-white/70 text-sm">
                          <span className="font-semibold text-white">
                            Type:
                          </span>{" "}
                          {bookingData.type}
                        </p>
                        <p className="text-white/70 text-sm">
                          <span className="font-semibold text-white">
                            Contact:
                          </span>{" "}
                          {bookingData.firstName} {bookingData.lastName}
                        </p>
                      </div>
                      <Button
                        variant="glass"
                        size="lg"
                        onClick={handleReset}
                        className="w-full"
                      >
                        Nouvelle réservation
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
