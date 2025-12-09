import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const bookingData = await request.json();

    const { date, time, type, firstName, lastName, email, phone } = bookingData;

    // Format the date
    const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Create email content
    const emailContent = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
            <h2 style="color: #6b46c1; border-bottom: 2px solid #6b46c1; padding-bottom: 10px;">
              Nouvelle Réservation - Galerie des Trois Bornes
            </h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #6b46c1; margin-top: 0;">Détails de la réservation</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Date :</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${formattedDate}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Heure :</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${time}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Type de réservation :</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${type}</td>
                </tr>
              </table>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #6b46c1; margin-top: 0;">Informations du client</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Nom :</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email :</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">
                    <a href="mailto:${email}" style="color: #6b46c1; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold;">Téléphone :</td>
                  <td style="padding: 10px;">
                    <a href="tel:${phone}" style="color: #6b46c1; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
              </table>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; color: #666; font-size: 14px;">
              <p>Ce message a été envoyé depuis le formulaire de réservation du site web Galerie des Trois Bornes.</p>
              <p style="margin: 0;">
                <strong>Galerie des Trois Bornes</strong><br>
                9 Cité des Trois Bornes, 75011 Paris<br>
                Tél: +33 (0)6 18 34 24 79
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // In a real application, you would use a service like SendGrid, Resend, or Nodemailer
    // For now, we'll simulate sending an email

    // Example with fetch to a serverless email service:
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Galerie des Trois Bornes <noreply@galeriedestroisbornes.com>",
        to: ["exagorastudio@gmail.com"],
        subject: `Nouvelle réservation - ${formattedDate} à ${time}`,
        html: emailContent,
      }),
    });

    // For static export compatibility, we'll use a simple mailto fallback
    // or you can integrate with a third-party service
    if (!process.env.RESEND_API_KEY) {
      // Fallback: Log to console (in production, use a proper email service)
      console.log("Booking received:", {
        date: formattedDate,
        time,
        type,
        firstName,
        lastName,
        email,
        phone,
      });

      return NextResponse.json({
        success: true,
        message: "Réservation reçue",
      });
    }

    if (!emailResponse.ok) {
      throw new Error("Failed to send email");
    }

    return NextResponse.json({
      success: true,
      message: "Réservation envoyée avec succès",
    });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { success: false, message: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}
