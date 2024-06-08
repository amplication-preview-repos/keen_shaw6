/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  DataEnrichment as PrismaDataEnrichment,
  File as PrismaFile,
} from "@prisma/client";

export class DataEnrichmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DataEnrichmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.dataEnrichment.count(args);
  }

  async dataEnrichments<T extends Prisma.DataEnrichmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DataEnrichmentFindManyArgs>
  ): Promise<PrismaDataEnrichment[]> {
    return this.prisma.dataEnrichment.findMany<Prisma.DataEnrichmentFindManyArgs>(
      args
    );
  }
  async dataEnrichment<T extends Prisma.DataEnrichmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DataEnrichmentFindUniqueArgs>
  ): Promise<PrismaDataEnrichment | null> {
    return this.prisma.dataEnrichment.findUnique(args);
  }
  async createDataEnrichment<T extends Prisma.DataEnrichmentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DataEnrichmentCreateArgs>
  ): Promise<PrismaDataEnrichment> {
    return this.prisma.dataEnrichment.create<T>(args);
  }
  async updateDataEnrichment<T extends Prisma.DataEnrichmentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DataEnrichmentUpdateArgs>
  ): Promise<PrismaDataEnrichment> {
    return this.prisma.dataEnrichment.update<T>(args);
  }
  async deleteDataEnrichment<T extends Prisma.DataEnrichmentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DataEnrichmentDeleteArgs>
  ): Promise<PrismaDataEnrichment> {
    return this.prisma.dataEnrichment.delete(args);
  }

  async getFile(parentId: string): Promise<PrismaFile | null> {
    return this.prisma.dataEnrichment
      .findUnique({
        where: { id: parentId },
      })
      .file();
  }
}
