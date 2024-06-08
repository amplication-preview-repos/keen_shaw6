import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataEnrichmentService } from "./dataEnrichment.service";
import { DataEnrichmentControllerBase } from "./base/dataEnrichment.controller.base";

@swagger.ApiTags("dataEnrichments")
@common.Controller("dataEnrichments")
export class DataEnrichmentController extends DataEnrichmentControllerBase {
  constructor(protected readonly service: DataEnrichmentService) {
    super(service);
  }
}
