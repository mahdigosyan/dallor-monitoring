import { Module } from '@nestjs/common';
import {HttpModule} from "@nestjs/axios"
import { AppController } from './app.controller';
import { Agent } from 'https';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DallorSchema, Dallor } from './dallor.schema';


@Module({
    imports: [
      MongooseModule.forRoot("mongodb://localhost:27017/dallor"),
      HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      httpsAgent: new Agent({
        rejectUnauthorized: false
      }),
      