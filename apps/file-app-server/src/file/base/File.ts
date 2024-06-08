/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Database } from "../../database/base/Database";
import { DataEnrichment } from "../../dataEnrichment/base/DataEnrichment";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { EnumFileStatus } from "./EnumFileStatus";

@ObjectType()
class File {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Database],
  })
  @ValidateNested()
  @Type(() => Database)
  @IsOptional()
  databases?: Array<Database>;

  @ApiProperty({
    required: false,
    type: () => [DataEnrichment],
  })
  @ValidateNested()
  @Type(() => DataEnrichment)
  @IsOptional()
  dataEnrichments?: Array<DataEnrichment>;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  filecontent!: JsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  filename!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumFileStatus,
  })
  @IsEnum(EnumFileStatus)
  @IsOptional()
  @Field(() => EnumFileStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { File as File };