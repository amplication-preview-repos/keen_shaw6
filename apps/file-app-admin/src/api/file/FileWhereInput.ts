import { DatabaseListRelationFilter } from "../database/DatabaseListRelationFilter";
import { DataEnrichmentListRelationFilter } from "../dataEnrichment/DataEnrichmentListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FileWhereInput = {
  databases?: DatabaseListRelationFilter;
  dataEnrichments?: DataEnrichmentListRelationFilter;
  filecontent?: JsonFilter;
  filename?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
};
