import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IProducto, NewProducto } from '../producto.model';

export type PartialUpdateProducto = Partial<IProducto> & Pick<IProducto, 'id'>;

export type EntityResponseType = HttpResponse<IProducto>;
export type EntityArrayResponseType = HttpResponse<IProducto[]>;

@Injectable({ providedIn: 'root' })
export class ProductoService {
  protected readonly http = inject(HttpClient);
  protected readonly applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/productos');

  create(producto: NewProducto): Observable<EntityResponseType> {
    return this.http.post<IProducto>(this.resourceUrl, producto, { observe: 'response' });
  }

  update(producto: IProducto): Observable<EntityResponseType> {
    return this.http.put<IProducto>(`${this.resourceUrl}/${this.getProductoIdentifier(producto)}`, producto, { observe: 'response' });
  }

  partialUpdate(producto: PartialUpdateProducto): Observable<EntityResponseType> {
    return this.http.patch<IProducto>(`${this.resourceUrl}/${this.getProductoIdentifier(producto)}`, producto, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IProducto>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IProducto[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getProductoIdentifier(producto: Pick<IProducto, 'id'>): number {
    return producto.id;
  }

  compareProducto(o1: Pick<IProducto, 'id'> | null, o2: Pick<IProducto, 'id'> | null): boolean {
    return o1 && o2 ? this.getProductoIdentifier(o1) === this.getProductoIdentifier(o2) : o1 === o2;
  }

  addProductoToCollectionIfMissing<Type extends Pick<IProducto, 'id'>>(
    productoCollection: Type[],
    ...productosToCheck: (Type | null | undefined)[]
  ): Type[] {
    const productos: Type[] = productosToCheck.filter(isPresent);
    if (productos.length > 0) {
      const productoCollectionIdentifiers = productoCollection.map(productoItem => this.getProductoIdentifier(productoItem));
      const productosToAdd = productos.filter(productoItem => {
        const productoIdentifier = this.getProductoIdentifier(productoItem);
        if (productoCollectionIdentifiers.includes(productoIdentifier)) {
          return false;
        }
        productoCollectionIdentifiers.push(productoIdentifier);
        return true;
      });
      return [...productosToAdd, ...productoCollection];
    }
    return productoCollection;
  }
}
