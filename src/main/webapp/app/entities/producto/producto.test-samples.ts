import { IProducto, NewProducto } from './producto.model';

export const sampleWithRequiredData: IProducto = {
  id: 26142,
};

export const sampleWithPartialData: IProducto = {
  id: 15633,
  descripcion: 'strictly',
  precio: 30383.68,
  categoria: 'MASCOTAS',
};

export const sampleWithFullData: IProducto = {
  id: 31795,
  nombre: 'er behold needily',
  descripcion: 'huzzah roasted',
  precio: 30084.89,
  imagen: '../fake-data/blob/hipster.png',
  imagenContentType: 'unknown',
  cantidad: 27404,
  categoria: 'FARMACIA',
};

export const sampleWithNewData: NewProducto = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
