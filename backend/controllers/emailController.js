import sgMail from "../config/sendgrid.js";

export const sendEmail = async (req, res) => {
  const { to, subject, html } = req.body;

  if (!to || !subject || !html) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  const msg = {
    to,
    from: process.env.SENDER_EMAIL, 
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    res.json({ success: true, message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error("SendGrid Error:", error);
    res.status(500).json({
      success: false,
      message: error.response?.body?.errors?.[0]?.message || "❌ Failed to send email.",
    });
  }
};
