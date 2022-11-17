import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { ENV_SERVER_PORT } from './constatns/environment.constant';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    app.use(helmet());
    app.use(compression());

    const PORT = configService.get(ENV_SERVER_PORT);

    await app.listen(PORT);
  } catch (e) {
    console.error('server bootstrap error');

    throw e;
  }
}

bootstrap();
