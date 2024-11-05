
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';
import handlebars from 'handlebars';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });
  app.setViewEngine({
    engine: {
      handlebars: handlebars,
    },
    templates: join(__dirname, '..', 'views'),
  });

  // Register the 'eq' helper

  handlebars.registerHelper('eq', function (a, b) {

    return a === b;

  });

  const config = new DocumentBuilder()
    .setTitle('Data Synthesis API')
    .setDescription('API for generating synthetic data')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3900);
  console.log(`Application is running on: ${await app.getUrl()}`);


}
bootstrap();