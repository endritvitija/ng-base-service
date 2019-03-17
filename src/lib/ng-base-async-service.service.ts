import { HttpClient } from "@angular/common/http";

export abstract class BaseAsyncService<TEntity> {
  constructor(private _http: HttpClient, private url: string) {}

  async getById(id: any) {
    return await this._http.get<TEntity>(`${this.url}/${id}`).toPromise();
  }

  async getAll() {
    return await this._http.get<TEntity>(this.url).toPromise();
  }

  async add(context: TEntity) {
    return await this._http.post(this.url, context).toPromise();
  }

  async update(id: any, context: TEntity) {
    return await this._http.put(`${this.url}/${id}`, context).toPromise();
  }

  async delete(id: any) {
    return await this._http.delete(`${this.url}/${id}`).toPromise();
  }
}
