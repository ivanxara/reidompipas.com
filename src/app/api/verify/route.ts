// pages/api/verify.js
import { NextRequest, NextResponse } from "next/server";
import Twilio from "twilio";

const accountSid = "TWILIO_ACCOUNT_SID_PLACEHOLDER";
const authToken = "TWILIO_AUTH_TOKEN_PLACEHOLDER";
const client = Twilio(accountSid, authToken);

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
      .services("TWILIO_SERVICE_ID_PLACEHOLDER")
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
