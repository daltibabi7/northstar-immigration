import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { sql } from '@vercel/postgres';
import { authOptions } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');

    if (!filename || !request.body) {
      return NextResponse.json({ error: 'Filename and body are required' }, { status: 400 });
    }

    // Upload the file to Vercel Blob
    const userId = (session.user as any).id;
    const blob = await put(`documents/${userId}/${filename}`, request.body, {
      access: 'public',
    });

    // Save file metadata to Vercel Postgres documents table
    if (userId !== "0") { // If not admin
      await sql`
        INSERT INTO documents (user_id, name, url, type)
        VALUES (${userId}, ${filename}, ${blob.url}, 'Upload')
      `;
    }

    return NextResponse.json(blob);
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: 'Failed to upload document' }, { status: 500 });
  }
}
