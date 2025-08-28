import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get("name")?.toString();
  const phone = formData.get("phone")?.toString();
  const email = formData.get("email")?.toString();
  const age = formData.get("age")?.toString();
  const sex = formData.get("sex")?.toString();

  if (!name || !phone || !email || !age || !sex) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail", // Replace with your SMTP provider
    auth: {
      user: process.env.EMAIL_SENDER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Consultation Team @ Neuva Health" <${process.env.EMAIL_SENDER}>`,
    to: [email as string],
    subject: "Your Consultation Request Confirmation",
    html: `
      <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 32px;">
        <table style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <tr>
            <td style="padding: 32px;">
              <h2 style="color: #4f46e5; margin-bottom: 16px;">Consultation Request Received</h2>
              <p style="font-size: 16px; color: #333;">Dear ${name},</p>
              <p style="font-size: 16px; color: #333;">
                Thank you for requesting a consultation with our medical team. We have received your request and will contact you shortly to schedule your appointment.
              </p>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; margin: 24px 0;">
                <h3 style="color: #4f46e5; margin-bottom: 16px;">Your Consultation Details:</h3>
                <p style="font-size: 16px; color: #333; margin-bottom: 8px;">
                  <strong>Name:</strong> ${name}<br>
                  <strong>Email:</strong> ${email}<br>
                </p>
              </div>
              <p style="font-size: 16px; color: #333;">
                Our team will review your information and contact you within 24-48 hours to confirm your consultation.
              </p>
              <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;">
              <p style="font-size: 15px; color: #666;">
                If you have any questions, feel free to reply to this email.<br>
                <span style="color: #4f46e5;">Best regards,</span><br>
                <span style="font-weight: bold;">Consultation Team, Neuva Health</span>
              </p>
            </td>
          </tr>
        </table>
      </div>
    `,
  };

  try {
    // Send confirmation email to the patient
    await transporter.sendMail(mailOptions);

    // Send notification email to the medical team
    const teamMailOptions = {
      from: `"Consultation System @ Neuva Health" <${process.env.EMAIL_SENDER}>`,
      to: ["health.neuva@gmail.com"],
      subject: `New Consultation Request - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 32px;">
          <table style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            <tr>
              <td style="padding: 32px;">
                <h2 style="color: #dc2626; margin-bottom: 16px;">New Consultation Request</h2>
                <p style="font-size: 16px; color: #333;">
                  A new consultation request has been submitted through the website.
                </p>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; margin: 24px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 16px;">Patient Details:</h3>
                  <p style="font-size: 16px; color: #333; margin-bottom: 8px;">
                    <strong>Name:</strong> ${name}<br>
                    <strong>Phone:</strong> ${phone}<br>
                    <strong>Email:</strong> ${email}<br>
                    <strong>Age:</strong> ${age}<br>
                    <strong>Sex:</strong> ${sex}
                  </p>
                </div>
                <div style="background: #fef2f2; padding: 16px; border-radius: 6px; border-left: 4px solid #dc2626;">
                  <p style="font-size: 14px; color: #dc2626; margin: 0;">
                    <strong>Action Required:</strong> Please review this consultation request and contact the patient within 24-48 hours to schedule their appointment.
                  </p>
                </div>
                <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;">
                <p style="font-size: 15px; color: #666;">
                  <span style="color: #dc2626;">Best regards,</span><br>
                  <span style="font-weight: bold;">Neuva Health Consultation System</span>
                </p>
              </td>
            </tr>
          </table>
        </div>
      `,
    };

    // Send the team notification email
    await transporter.sendMail(teamMailOptions);

    return NextResponse.json(
      { message: "Consultation request sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send consultation request" },
      { status: 500 }
    );
  }
}
