import { File } from "../file/File";
import { JsonValue } from "type-fest";

export type DataEnrichment = {
  createdAt: Date;
  enrichmentDetails: string | null;
  file?: File | null;
  id: string;
  processedData: JsonValue;
  updatedAt: Date;
};
