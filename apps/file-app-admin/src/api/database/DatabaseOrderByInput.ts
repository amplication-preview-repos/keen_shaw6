import { SortOrder } from "../../util/SortOrder";

export type DatabaseOrderByInput = {
  createdAt?: SortOrder;
  dataContent?: SortOrder;
  fileId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
