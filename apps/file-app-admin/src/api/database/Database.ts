import { JsonValue } from "type-fest";
import { File } from "../file/File";

export type Database = {
  createdAt: Date;
  dataContent: JsonValue;
  file?: File | null;
  id: string;
  updatedAt: Date;
};
