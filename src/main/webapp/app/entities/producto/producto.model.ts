import { Categoria } from 'app/entities/enumerations/categoria.model';

export interface IProducto {
  id: number;
  nombre?: string | null;
  descripcion?: string | null;
  precio?: number | null;
  imagen?: string | null;
  imagenContentType?: string | null;
  cantidad?: number | null;
  categoria?: keyof typeof Categoria | null;
}

export type NewProducto = Omit<IProducto, 'id'> & { id: null };
