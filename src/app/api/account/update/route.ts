import { prisma } from '@/libs/prisma';
import { Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // parse the request body
    const body = await request.json();
    console.log('Parsed Body:', body);

    const { firstName, lastName, email, address } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const updatedUser = await prisma.user.update({
      where: { email },
      data: {
        firstName,
        lastName,
        address,
      },
    });

    console.log('Update Query:', { email });
    console.log('Update Data:', { firstName, lastName, address });

    // Return the updated user
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

    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 },
    );
  }
}
