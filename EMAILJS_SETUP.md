# EmailJS Setup Instructions

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

## 2. Add Email Service

1. Go to "Email Services" in your dashboard
2. Click "Add New Service"
3. Choose Gmail (or any other provider)
4. Connect your Gmail account or use SMTP
5. Note down your **Service ID** (e.g., `service_galerie3b`)

## 3. Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Set **Template ID**: `template_booking`
4. Use this template content:

### Subject:

```
{{subject}}
```

### Body (HTML):

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2
    style="color: #6b46c1; border-bottom: 2px solid #6b46c1; padding-bottom: 10px;"
  >
    Nouvelle Réservation - Galerie des Trois Bornes
  </h2>

  <div
    style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;"
  >
    <h3 style="color: #6b46c1; margin-top: 0;">Détails de la réservation</h3>

    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td
          style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;"
        >
          Date :
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">
          {{booking_date}}
        </td>
      </tr>
      <tr>
        <td
          style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;"
        >
          Heure de début :
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">
          {{start_time}}
        </td>
      </tr>
      <tr>
        <td
          style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;"
        >
          Heure de fin :
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">
          {{end_time}}
        </td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: bold;">Type de réservation :</td>
        <td style="padding: 10px;">{{booking_type}}</td>
      </tr>
    </table>
  </div>

  <div
    style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;"
  >
    <h3 style="color: #6b46c1; margin-top: 0;">Informations du client</h3>

    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td
          style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;"
        >
          Nom :
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">
          {{client_firstName}} {{client_lastName}}
        </td>
      </tr>
      <tr>
        <td
          style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;"
        >
          Email :
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">
          <a href="mailto:{{client_email}}" style="color: #6b46c1;"
            >{{client_email}}</a
          >
        </td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: bold;">Téléphone :</td>
        <td style="padding: 10px;">
          <a href="tel:{{client_phone}}" style="color: #6b46c1;"
            >{{client_phone}}</a
          >
        </td>
      </tr>
    </table>
  </div>

  <div
    style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd; color: #666; font-size: 14px;"
  >
    <p>
      Ce message a été envoyé depuis le formulaire de réservation du site web
      Galerie des Trois Bornes.
    </p>
    <p style="margin: 0;">
      <strong>Galerie des Trois Bornes</strong><br />
      9 Cité des Trois Bornes, 75011 Paris<br />
      Tél: +33 (0)6 18 34 24 79
    </p>
  </div>
</div>
```

4. Set **To Email**: `exagorastudio@gmail.com`
5. Save the template

## 4. Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `YOUR_PUBLIC_KEY`)

## 5. Update Contact.tsx

Replace these values in `src/components/Contact.tsx` (line ~101):

```typescript
const serviceId = "service_galerie3b"; // Your Service ID
const templateId = "template_booking"; // Your Template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Your Public Key from EmailJS dashboard
```

## 6. Test

1. Save all changes
2. Run `npm run dev`
3. Fill out the booking form
4. Check that the email arrives at `exagorastudio@gmail.com`

## Notes

- EmailJS free plan: 200 emails/month
- Emails are sent directly from the browser
- No backend needed - perfect for static sites!
- Works with GitHub Pages deployment
