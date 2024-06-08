import { DatabaseUpdateManyWithoutFilesInput } from "./DatabaseUpdateManyWithoutFilesInput";
import { DataEnrichmentUpdateManyWithoutFilesInput } from "./DataEnrichmentUpdateManyWithoutFilesInput";
import { InputJsonValue } from "../../types";

export type FileUpdateInput = {
  databases?: DatabaseUpdateManyWithoutFilesInput;
  dataEnrichments?: DataEnrichmentUpdateManyWithoutFilesInput;
  filecontent?: InputJsonValue;
  filename?: string | null;
  status?: "Option1" | null;
};
