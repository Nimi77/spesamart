import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';
import { getToken } from 'next-auth/jwt';

export const dynamic = 'force-dynamic';
export async function GET(request: Request) {
  try {
    // extracting the token from the request using getToken
    const token = await getToken({ req: request as NextRequest });

    if (!token || !token.id) {
      return NextResponse.json(
        { error: 'User not authenticated' },
        { status: 401 },
      );
    }

    const userId = token.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        firstName: true,
        lastName: true,
        email: true,
        address: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('Error fetching user details:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
