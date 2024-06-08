import { DatabaseCreateNestedManyWithoutFilesInput } from "./DatabaseCreateNestedManyWithoutFilesInput";
import { DataEnrichmentCreateNestedManyWithoutFilesInput } from "./DataEnrichmentCreateNestedManyWithoutFilesInput";
import { InputJsonValue } from "../../types";

export type FileCreateInput = {
  databases?: DatabaseCreateNestedManyWithoutFilesInput;
  dataEnrichments?: DataEnrichmentCreateNestedManyWithoutFilesInput;
  filecontent?: InputJsonValue;
  filename?: string | null;
  status?: "Option1" | null;
};
