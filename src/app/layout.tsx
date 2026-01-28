import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://galeriedes3bornes.com"),
  title: {
    default: "Galerie des 3 Bornes | Location Salle Événementielle Paris 11",
    template: "%s | Galerie des 3 Bornes Paris",
  },
  description:
    "Location de salle événementielle à Paris 11ème. Loft industriel de 120m² pour coworking, séminaires, shootings photo, tournages, expositions, réceptions et soirées privées. Quartier République.",
  keywords: [
    // Main brand variations
    "Galerie des trois bornes",
    "Galerie des 3 bornes",
    "Gallerie des trois bornes",
    "Gallerie des 3 bornes",
    "3 bornes galerie paris",
    "galerie 3 bornes",
    "trois bornes paris",
    // Location keywords
    "location salle paris",
    "location salle paris 11",
    "location salle événementielle paris",
    "location salle événementiel paris 11",
    "salle à louer paris",
    "salle a louer paris 11",
    "location espace paris",
    "loft à louer paris",
    // Event types
    "location salle séminaire paris",
    "location salle coworking paris",
    "location salle shooting photo paris",
    "location salle tournage paris",
    "location salle exposition paris",
    "location salle réception paris",
    "location salle cocktail paris",
    "location salle soirée privée paris",
    "location salle anniversaire paris",
    "location salle baptême paris",
    "location salle fashion week paris",
    // Area keywords
    "salle république paris",
    "salle belleville paris",
    "salle ménilmontant paris",
    "salle marais paris",
    "espace événementiel paris 11",
    "loft industriel paris",
  ],
  authors: [{ name: "Galerie des 3 Bornes" }],
  creator: "Galerie des 3 Bornes",
  publisher: "Galerie des 3 Bornes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://galeriedes3bornes.com",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://galeriedes3bornes.com",
    siteName: "Galerie des 3 Bornes",
    title: "Galerie des 3 Bornes | Location Salle Événementielle Paris 11",
    description:
      "Location de salle événementielle à Paris 11. Loft industriel de 120m² : coworking, séminaires, shootings, tournages, expositions, réceptions. Quartier République.",
    images: [
      {
        url: "/images/VideGS1.jpg",
        width: 1200,
        height: 630,
        alt: "Galerie des 3 Bornes - Loft industriel Paris 11",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galerie des 3 Bornes | Location Salle Paris 11",
    description:
      "Loft industriel 120m² à Paris 11. Coworking, séminaires, shootings, tournages, expositions, réceptions.",
    images: ["/images/VideGS1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when you have it
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="smooth-scroll">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventVenue",
              name: "Galerie des 3 Bornes",
              alternateName: [
                "Galerie des Trois Bornes",
                "Galerie des 3 Bornes Paris",
              ],
              description:
                "Loft industriel de 120m² à Paris 11ème pour événements, coworking, séminaires, shootings photo, tournages, expositions et réceptions.",
              url: "https://galeriedes3bornes.com",
              telephone: "+33156980531",
              email: "galeriedes3bornes@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9 Cité des Trois Bornes",
                addressLocality: "Paris",
                postalCode: "75011",
                addressRegion: "Île-de-France",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 48.86721,
                longitude: 2.369539,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "08:00",
                closes: "23:00",
              },
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Wi-Fi" },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Sonorisation",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Vidéo projecteur",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Bar américain",
                },
                { "@type": "LocationFeatureSpecification", name: "Parking" },
              ],
              maximumAttendeeCapacity: 100,
              publicAccess: true,
              isAccessibleForFree: false,
              priceRange: "€€",
              image: [
                "https://galeriedes3bornes.com/images/VideGS1.jpg",
                "https://galeriedes3bornes.com/images/VideGS2.jpg",
                "https://galeriedes3bornes.com/images/ReunionGS6.jpg",
              ],
              sameAs: [
                "https://www.facebook.com/ChristoBali96/",
                "https://www.instagram.com/galeriedestbparis11/",
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://galeriedes3bornes.com/#localbusiness",
              name: "Galerie des 3 Bornes",
              image: "https://galeriedes3bornes.com/images/VideGS1.jpg",
              url: "https://galeriedes3bornes.com",
              telephone: "+33156980531",
              email: "galeriedes3bornes@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9 Cité des Trois Bornes",
                addressLocality: "Paris",
                postalCode: "75011",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 48.86721,
                longitude: 2.369539,
              },
              areaServed: {
                "@type": "City",
                name: "Paris",
              },
              serviceType: [
                "Location de salle événementielle",
                "Espace coworking",
                "Salle de séminaire",
                "Studio photo",
                "Location tournage",
                "Salle d'exposition",
                "Salle de réception",
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
