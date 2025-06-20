import { Module } from '@nestjs/common';
import { LinkShortenerModule } from '../link-shortener/link-shortener.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CONFIG } from 'src/db/config';
import { Click } from 'src/db/entities';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlModule } from 'src/url/url.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...CONFIG,
      username: CONFIG.user,
      type: 'postgres',
      autoLoadEntities: true,
      synchronize: true, //only in dev
      logging: true,
    }),
    TypeOrmModule.forFeature([Click]),
    LinkShortenerModule,
    UrlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
