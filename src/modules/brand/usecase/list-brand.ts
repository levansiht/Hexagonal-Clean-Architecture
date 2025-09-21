import { IQueryHandler, IQueryRepository } from "../../../share/interface";
import { ListQuery } from "../interface";
import { BrandCondDTO } from "../model/dto";
import { Brand } from '../model/model';

export class ListBrandQuery implements IQueryHandler<ListQuery, Brand[]> {
  constructor(private readonly repository: IQueryRepository<Brand, BrandCondDTO>) { }

  async query(query: ListQuery): Promise<Brand[]> {
    const collection = await this.repository.list(query.cond, query.paging);
    return collection;
  }
}