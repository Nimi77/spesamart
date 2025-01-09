import { prisma } from '@/libs/prisma';
import { Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { userId, firstName, lastName, email, address } =
      await request.json();

    console.log(await request.json);

    if (!userId || !email) {
      return NextResponse.json(
        {
          error: 'User ID and email are required',
        },
        { status: 400 },
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        firstName,
        lastName,
        email,
        address,
      },
    });

    return NextResponse.json({
      message: 'Account details updated successfully',
      updatedUser,
    });
  } catch (error) {
    console.error('Error updating user details:', error);

    if (error instanceof Prisma.PrismaClientValidationError) {
      return NextResponse.json(
        { error: 'Invalid input: ensure all required fields are correct' },
        { status: 400 },
      );
    }
  }
}
