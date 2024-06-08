import { JsonFilter } from "../../util/JsonFilter";
import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type DatabaseWhereInput = {
  dataContent?: JsonFilter;
  file?: FileWhereUniqueInput;
  id?: StringFilter;
};
