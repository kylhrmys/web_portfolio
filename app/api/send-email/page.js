// app/api/send-email/route.js
"use server";
import Resend from "resend";

const resend = new Resend("re_iCnM5Kaz_NujgWQaHUAvvN6VYcGAp5mQQ");

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      console.error("Validation Error: Missing fields", {
        name,
        email,
        message,
      });
      return new Response(JSON.stringify({ message: "Missing fields." }), {
        status: 400,
      });
    }

    // Sending the email
    await resend.sendEmail({
      from: "Contact Form <onboarding@resend.com>",
      to: "kaylteves@createves.dev",
      subject: `New message from ${name}`,
      html: `
        <h1>New Message</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to send email.",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
