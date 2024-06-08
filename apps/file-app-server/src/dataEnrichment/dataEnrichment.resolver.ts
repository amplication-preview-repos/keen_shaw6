import * as graphql from "@nestjs/graphql";
import { DataEnrichmentResolverBase } from "./base/dataEnrichment.resolver.base";
import { DataEnrichment } from "./base/DataEnrichment";
import { DataEnrichmentService } from "./dataEnrichment.service";

@graphql.Resolver(() => DataEnrichment)
export class DataEnrichmentResolver extends DataEnrichmentResolverBase {
  constructor(protected readonly service: DataEnrichmentService) {
    super(service);
  }
}
