import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { nome, whatsapp, segmento, simplesNacional, faturamento, pagarImpostoAlto } =
    await req.json();

  const { TRELLO_API_KEY, TRELLO_TOKEN, TRELLO_LIST_ID } = process.env;

  if (!TRELLO_API_KEY || !TRELLO_TOKEN || !TRELLO_LIST_ID) {
    return NextResponse.json({ error: "Trello não configurado." }, { status: 500 });
  }

  const cardName = `Lead: ${nome} — ${whatsapp}`;
  const cardDesc = [
    `👤 *Nome:* ${nome}`,
    `📱 *WhatsApp:* ${whatsapp}`,
    `🏷️ *Segmento:* ${segmento}`,
    `📋 *Simples Nacional:* ${simplesNacional}`,
    `💰 *Faturamento mensal:* ${faturamento}`,
    `💸 *Sente que paga imposto alto:* ${pagarImpostoAlto}`,
  ].join("\n");

  const url = new URL("https://api.trello.com/1/cards");
  url.searchParams.set("key", TRELLO_API_KEY);
  url.searchParams.set("token", TRELLO_TOKEN);
  url.searchParams.set("idList", TRELLO_LIST_ID);
  url.searchParams.set("name", cardName);
  url.searchParams.set("desc", cardDesc);

  const res = await fetch(url.toString(), { method: "POST" });

  if (!res.ok) {
    return NextResponse.json({ error: "Erro ao criar card no Trello." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
