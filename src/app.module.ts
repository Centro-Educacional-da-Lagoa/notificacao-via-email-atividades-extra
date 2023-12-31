import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailService } from './email/email.service';
import { EmailModule } from './email/email.module';
import { EmailController } from './email/email.controller';

@Module({
  imports: [EmailModule],
  controllers: [AppController, EmailController],
  providers: [AppService, EmailService],
})
export class AppModule {}
