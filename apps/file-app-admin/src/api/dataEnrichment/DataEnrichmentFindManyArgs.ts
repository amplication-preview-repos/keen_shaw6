import { DataEnrichmentWhereInput } from "./DataEnrichmentWhereInput";
import { DataEnrichmentOrderByInput } from "./DataEnrichmentOrderByInput";

export type DataEnrichmentFindManyArgs = {
  where?: DataEnrichmentWhereInput;
  orderBy?: Array<DataEnrichmentOrderByInput>;
  skip?: number;
  take?: number;
};
