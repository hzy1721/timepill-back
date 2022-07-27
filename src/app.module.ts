import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PillsModule } from './pills/pills.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'pass123',
    database: 'timepill',
    autoLoadEntities: true,
  }), PillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
