import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type DataEnrichmentUpdateInput = {
  enrichmentDetails?: string | null;
  file?: FileWhereUniqueInput | null;
  processedData?: InputJsonValue;
};
