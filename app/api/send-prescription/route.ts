import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const email = formData.get("email")?.toString();
  const prescriptionFile = formData.get("prescription") as File;

  if (!email || !prescriptionFile) {
    return NextResponse.json(
      { error: "Email and prescription are required" },
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
    from: `"Clinic Assistant @ Neuva Health" <${process.env.EMAIL_SENDER}>`,
    to: [email as string],
    bcc: ["health.neuva@gmail.com"],
    subject: "Your Prescription Submission Confirmation",
    html: `
      <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 32px;">
        <table style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <tr>
            <td style="padding: 32px;">
              <h2 style="color: #4f46e5; margin-bottom: 16px;">Prescription Received</h2>
              <p style="font-size: 16px; color: #333;">Dear User,</p>
              <p style="font-size: 16px; color: #333;">
                Thank you for submitting your prescription. We have received your document and will process it promptly.
              </p>
              <div style="margin: 24px 0;">
                <p style="font-size: 16px; color: #333; margin-bottom: 8px;">
                  <strong>Need to schedule a consultation?</strong>
                </p>
                <a href="https://book.healthplix.com/dr-dr-abhay-kr-rohatgi-general-physician-426-cmr-rd-hr"
                  style="display: inline-block; padding: 12px 28px; background: #4f46e5; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
                  Schedule Consultation
                </a>
              </div>
              <p style="font-size: 16px; color: #333;">
                <strong>Your submitted prescription is attached to this email.</strong>
              </p>
              <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;">
              <p style="font-size: 15px; color: #666;">
                If you have any questions, feel free to reply to this email.<br>
                <span style="color: #4f46e5;">Best regards,</span><br>
                <span style="font-weight: bold;">Clinic Team, Neuva Health</span>
              </p>
            </td>
          </tr>
        </table>
      </div>
    `,
    attachments: [
      {
        filename: prescriptionFile.name || "",
        content: Buffer.from(await prescriptionFile.arrayBuffer()),
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
