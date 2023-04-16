import { Field, ObjectType, Int } from "@nestjs/graphql";
import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";

interface ValuesArray {
    date : String;
    price : Number;
    time : String;
}
@ObjectType()
@Schema()
