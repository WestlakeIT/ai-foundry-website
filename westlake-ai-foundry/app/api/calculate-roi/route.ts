import { NextResponse } from 'next/server';

type Inputs = {
  currentCost: number;
  improvementPct: number; // 0-100
  implementationCost: number;
  timeframeMonths: number;
};

export async function POST(request: Request) {
  try {
    const { currentCost, improvementPct, implementationCost, timeframeMonths } = (await request.json()) as Inputs;
    const monthlySavings = (currentCost * (improvementPct / 100));
    const paybackMonths = monthlySavings > 0 ? implementationCost / monthlySavings : null;
    const roi = implementationCost > 0 ? ((monthlySavings * timeframeMonths) - implementationCost) / implementationCost : null;
    return NextResponse.json({ monthlySavings, paybackMonths, roi });
  } catch (e) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }
}

