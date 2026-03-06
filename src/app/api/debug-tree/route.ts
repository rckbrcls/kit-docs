import { source } from '@/lib/source';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export function GET() {
  const tree = source.getPageTree();
  return NextResponse.json(tree, { status: 200 });
}
