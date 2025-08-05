const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testDatabase() {
  try {
    console.log('Testing database connection...');
    
    // Test basic connection
    await prisma.$connect();
    console.log('✅ Database connected successfully');

    // Test if tables exist
    const tableCount = await prisma.$queryRaw`
      SELECT COUNT(*) as count 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('users', 'resumes', 'cover_letters', 'assessments', 'industry_insights')
    `;
    
    console.log('📊 Expected tables found:', tableCount[0].count);

    // Try to create a test user
    console.log('🧪 Testing user creation...');
    const testUser = await prisma.user.findFirst();
    console.log('👤 Existing users in database:', testUser ? 'Found users' : 'No users found');

    console.log('✅ All database tests passed!');
  } catch (error) {
    console.error('❌ Database test failed:', error.message);
    console.error('Full error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testDatabase();
