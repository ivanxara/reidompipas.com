// pages/api/verify.js
import { NextRequest, NextResponse } from "next/server";
import Twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_AUTH_TOKEN;
const client = Twilio(accountSid, authToken);

const serviceId = process.env.TWILIO_SERVICE_ID || "";

export async function POST(req: NextRequest) {
  try {
    const { to, code } = await req.json();

    if (!to || !code) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    const verificationCheck = await client.verify.v2
      .services(serviceId)
      .verificationChecks.create({ to, code });

    return NextResponse.json(
      { status: verificationCheck.status },
      { status: 200 }
    );
  } catch (error) {
    // @ts-ignore
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
