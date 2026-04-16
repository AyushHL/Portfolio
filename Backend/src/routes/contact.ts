import { Router, Request, Response } from "express";
import nodemailer from "nodemailer";

const router = Router();

// POST /api/contact -> Sends Mail to Me
router.post("/", async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: "All Fields are Required." });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: "Invalid Email Address." });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `📬 Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #f9f9f9; border-radius: 10px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #8a5cf6, #06b6d4); padding: 24px 32px;">
            <h2 style="color: #fff; margin: 0; font-size: 20px;">New Message from Your Portfolio</h2>
          </div>
          <div style="padding: 32px;">
            <p style="margin: 0 0 8px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">From</p>
            <p style="margin: 0 0 24px; font-size: 16px; font-weight: 600; color: #1e293b;">${name} &lt;${email}&gt;</p>
            
            <p style="margin: 0 0 8px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <div style="background: #fff; border-left: 4px solid #8a5cf6; border-radius: 6px; padding: 20px; color: #334155; line-height: 1.7;">
              ${message.replace(/\n/g, "<br/>")}
            </div>

            <p style="margin: 24px 0 0; color: #94a3b8; font-size: 12px;">
              Hit <strong>Reply</strong> to Respond Directly to ${name}.
            </p>
          </div>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Nodemailer Error:", err);
    res.status(500).json({ error: "Failed to Send Email. Please Try Again." });
  }
});

export default router;
