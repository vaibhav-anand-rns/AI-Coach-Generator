import { db } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('🔧 Database setup API called');
    
    // Test basic connection
    await db.$connect();
    console.log('✅ Database connected');

    // Check current tables
    const existingTables = await db.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE_TABLE'
    `;

    console.log('📋 Existing tables:', existingTables);

    // If no tables exist, create them manually
    if (existingTables.length === 0) {
      console.log('🚀 Creating database schema manually...');
      
      // Create users table
      await db.$executeRaw`
        CREATE TABLE IF NOT EXISTS "users" (
          "id" TEXT NOT NULL,
          "clerkUserId" TEXT NOT NULL,
          "name" TEXT NOT NULL,
          "email" TEXT NOT NULL,
          "imageUrl" TEXT,
          "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" TIMESTAMP(3) NOT NULL,
          CONSTRAINT "users_pkey" PRIMARY KEY ("id")
        )
      `;

      await db.$executeRaw`
        CREATE UNIQUE INDEX IF NOT EXISTS "users_clerkUserId_key" ON "users"("clerkUserId")
      `;

      await db.$executeRaw`
        CREATE UNIQUE INDEX IF NOT EXISTS "users_email_key" ON "users"("email")
      `;

      // Create resumes table
      await db.$executeRaw`
        CREATE TABLE IF NOT EXISTS "resumes" (
          "id" TEXT NOT NULL,
          "userId" TEXT NOT NULL,
          "content" JSONB,
          "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" TIMESTAMP(3) NOT NULL,
          CONSTRAINT "resumes_pkey" PRIMARY KEY ("id")
        )
      `;

      await db.$executeRaw`
        ALTER TABLE "resumes" ADD CONSTRAINT "resumes_userId_fkey" 
        FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE
      `;

      // Create cover_letters table
      await db.$executeRaw`
        CREATE TABLE IF NOT EXISTS "cover_letters" (
          "id" TEXT NOT NULL,
          "userId" TEXT NOT NULL,
          "jobTitle" TEXT,
          "companyName" TEXT,
          "content" TEXT,
          "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" TIMESTAMP(3) NOT NULL,
          CONSTRAINT "cover_letters_pkey" PRIMARY KEY ("id")
        )
      `;

      await db.$executeRaw`
        ALTER TABLE "cover_letters" ADD CONSTRAINT "cover_letters_userId_fkey" 
        FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE
      `;

      // Create assessments table
      await db.$executeRaw`
        CREATE TABLE IF NOT EXISTS "assessments" (
          "id" TEXT NOT NULL,
          "userId" TEXT NOT NULL,
          "questions" JSONB,
          "answers" JSONB,
          "feedback" TEXT,
          "score" INTEGER,
          "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" TIMESTAMP(3) NOT NULL,
          CONSTRAINT "assessments_pkey" PRIMARY KEY ("id")
        )
      `;

      await db.$executeRaw`
        ALTER TABLE "assessments" ADD CONSTRAINT "assessments_userId_fkey" 
        FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE
      `;

      // Create industry_insights table
      await db.$executeRaw`
        CREATE TABLE IF NOT EXISTS "industry_insights" (
          "id" TEXT NOT NULL,
          "userId" TEXT NOT NULL,
          "industry" TEXT,
          "insights" JSONB,
          "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" TIMESTAMP(3) NOT NULL,
          CONSTRAINT "industry_insights_pkey" PRIMARY KEY ("id")
        )
      `;

      await db.$executeRaw`
        CREATE UNIQUE INDEX IF NOT EXISTS "industry_insights_userId_key" ON "industry_insights"("userId")
      `;

      await db.$executeRaw`
        ALTER TABLE "industry_insights" ADD CONSTRAINT "industry_insights_userId_fkey" 
        FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE
      `;

      console.log('✅ Database schema created successfully');
    }

    // Check tables again
    const finalTables = await db.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE_TABLE'
    `;

    return NextResponse.json({
      status: 'success',
      message: 'Database setup completed',
      tablesCreated: existingTables.length === 0,
      tables: finalTables,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Database setup failed:', error);
    return NextResponse.json({
      status: 'error',
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
}
