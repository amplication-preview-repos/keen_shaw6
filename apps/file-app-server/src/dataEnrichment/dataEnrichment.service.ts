import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataEnrichmentServiceBase } from "./base/dataEnrichment.service.base";

@Injectable()
export class DataEnrichmentService extends DataEnrichmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
