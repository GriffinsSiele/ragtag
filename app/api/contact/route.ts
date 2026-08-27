import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  // Wire to Resend or a studio inbox when credentials are available.
  console.info("[contact]", {
    name: body.name,
    email: body.email,
    organization: body.organization ?? "",
    type: body.type ?? "",
  });
  return NextResponse.json({ ok: true });
}
