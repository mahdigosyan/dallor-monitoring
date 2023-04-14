import { Module } from '@nestjs/common';
import {HttpModule} from "@nestjs/axios"
import { AppController } from './app.controller';
import { Agent } from 'https';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DallorSchema, Dallor } from './dallor.schema';

