import { InputJsonValue } from "../../types";
import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";

export type DatabaseUpdateInput = {
  dataContent?: InputJsonValue;
  file?: FileWhereUniqueInput | null;
};
