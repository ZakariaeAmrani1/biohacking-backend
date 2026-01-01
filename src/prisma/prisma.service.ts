import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // 1. Create Adapter with LibSQL config
    const adapter = new PrismaLibSql({
      url: `${process.env.DATABASE_URL}`,
      authToken: '...',
    });

    // 2. Pass to Prisma
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
