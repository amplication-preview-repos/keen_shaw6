import { SortOrder } from "../../util/SortOrder";

export type DataEnrichmentOrderByInput = {
  createdAt?: SortOrder;
  enrichmentDetails?: SortOrder;
  fileId?: SortOrder;
  id?: SortOrder;
  processedData?: SortOrder;
  updatedAt?: SortOrder;
};
