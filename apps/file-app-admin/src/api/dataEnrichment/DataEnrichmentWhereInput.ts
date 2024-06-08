import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type DataEnrichmentWhereInput = {
  enrichmentDetails?: StringNullableFilter;
  file?: FileWhereUniqueInput;
  id?: StringFilter;
  processedData?: JsonFilter;
};
