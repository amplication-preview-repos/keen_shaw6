import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  createdAt?: SortOrder;
  filecontent?: SortOrder;
  filename?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
