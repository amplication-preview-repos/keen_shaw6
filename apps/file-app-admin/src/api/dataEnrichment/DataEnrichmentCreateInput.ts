import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type DataEnrichmentCreateInput = {
  enrichmentDetails?: string | null;
  file?: FileWhereUniqueInput | null;
  processedData?: InputJsonValue;
};
