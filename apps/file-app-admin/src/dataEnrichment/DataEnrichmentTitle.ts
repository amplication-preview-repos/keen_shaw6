import { DataEnrichment as TDataEnrichment } from "../api/dataEnrichment/DataEnrichment";

export const DATAENRICHMENT_TITLE_FIELD = "id";

export const DataEnrichmentTitle = (record: TDataEnrichment): string => {
  return record.id?.toString() || String(record.id);
};
