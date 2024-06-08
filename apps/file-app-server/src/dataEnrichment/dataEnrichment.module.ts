import { Module } from "@nestjs/common";
import { DataEnrichmentModuleBase } from "./base/dataEnrichment.module.base";
import { DataEnrichmentService } from "./dataEnrichment.service";
import { DataEnrichmentController } from "./dataEnrichment.controller";
import { DataEnrichmentResolver } from "./dataEnrichment.resolver";

@Module({
  imports: [DataEnrichmentModuleBase],
  controllers: [DataEnrichmentController],
  providers: [DataEnrichmentService, DataEnrichmentResolver],
  exports: [DataEnrichmentService],
})
export class DataEnrichmentModule {}
