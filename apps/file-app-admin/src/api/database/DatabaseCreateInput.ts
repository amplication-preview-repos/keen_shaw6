import { InputJsonValue } from "../../types";
import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";

export type DatabaseCreateInput = {
  dataContent?: InputJsonValue;
  file?: FileWhereUniqueInput | null;
};
