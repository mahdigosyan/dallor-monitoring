import { HttpException, Injectable } from "@nestjs/common";
import { Dallor } from "./dallor.schema";
import {InjectModel, } from "@nestjs/mongoose"
import {DalloDocument} from "./dallor.schema"
import {Model} from "mongoose"
import * as moment from "moment-jalaali-es";
moment.loadPersian()
import { DallorDTO } from "./dallor.dto";
@Injectable()
