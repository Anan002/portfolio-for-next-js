import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client for error logging
const prisma = new PrismaClient();

// Middleware function to catch errors globally
export async function middleware(req: NextRequest) {
  try {
    // Allow the request to proceed if no errors occur
    return NextResponse.next();
  } catch (error) {
    // Catch the error and log it
    console.error("Global Error:", error);

    // Log the error in the database
    await prisma.errorLog.create({
      data: {
        message: error.message || 'Unknown error',
        stack: error.stack || 'No stack trace available',
        path: req.nextUrl.pathname,
      },
    });

    // Return a generic response
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
