
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const { name, email, phone } = req.body || {};

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      !name.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !phone.trim()
    ) {
      return res.status(400).json({
        error: "Invalid input"
      });
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    const secret = process.env.RSVP_SECRET;

    if (!scriptUrl || !secret) {
      throw new Error("Missing configuration");
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        secret
      }),
      redirect: "follow"
    });

    if (!response.ok) {
      throw new Error("Apps Script request failed");
    }

    const result = await response.json();

    if (result.success !== true) {
      throw new Error("Sheet write failed");
    }

    return res.status(200).json({
      success: true
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Submission failed"
    });
  }
}
