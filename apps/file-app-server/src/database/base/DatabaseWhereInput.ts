/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JsonFilter } from "../../util/JsonFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { FileWhereUniqueInput } from "../../file/base/FileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class DatabaseWhereInput {
  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  dataContent?: JsonFilter;

  @ApiProperty({
    required: false,
    type: () => FileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FileWhereUniqueInput)
  @IsOptional()
  @Field(() => FileWhereUniqueInput, {
    nullable: true,
  })
  file?: FileWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}

export { DatabaseWhereInput as DatabaseWhereInput };