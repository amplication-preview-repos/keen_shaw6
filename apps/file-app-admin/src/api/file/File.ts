import { Database } from "../database/Database";
import { DataEnrichment } from "../dataEnrichment/DataEnrichment";
import { JsonValue } from "type-fest";

export type File = {
  createdAt: Date;
  databases?: Array<Database>;
  dataEnrichments?: Array<DataEnrichment>;
  filecontent: JsonValue;
  filename: string | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
