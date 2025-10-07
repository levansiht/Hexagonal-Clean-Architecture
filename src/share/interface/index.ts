import { PagingDTO } from "../model/paging";

export interface IRepository<Entity, Condition, UpdateDTO> extends IQueryRepository<Entity, Condition>, ICommandRepository<Entity, UpdateDTO> { }

export interface IQueryRepository<Entity, Condition> {
  get(id: string): Promise<Entity | null>;
  findByCond(cond: Condition): Promise<Entity | null>;
  list(cond: Condition, paging: PagingDTO): Promise<Array<Entity>>;
}

export interface ICommandRepository<Entity, UpdateDTO> {
  insert(data: Entity): Promise<boolean>;
  update(id: string, data: UpdateDTO): Promise<boolean>;
  delete(id: string, isHard: boolean): Promise<boolean>;
}

export interface ICommandHandler<Command, Result> {
  execute(command: Command): Promise<Result>;
}

export interface IQueryHandler<Query, Result> {
  query(query: Query): Promise<Result>;
}


export interface IUseCase<CreateDTO, UpdateDTO, Entity, Cond> {
  create(data: CreateDTO): Promise<string>;
  getDetail(id: string): Promise<Entity | null>;
  list(cond: Cond, paging: PagingDTO): Promise<Array<Entity>>;
  update(id: string, data: UpdateDTO): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}