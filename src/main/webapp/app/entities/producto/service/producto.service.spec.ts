import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { IProducto } from '../producto.model';
import { sampleWithFullData, sampleWithNewData, sampleWithPartialData, sampleWithRequiredData } from '../producto.test-samples';

import { ProductoService } from './producto.service';

const requireRestSample: IProducto = {
  ...sampleWithRequiredData,
};

describe('Producto Service', () => {
  let service: ProductoService;
  let httpMock: HttpTestingController;
  let expectedResult: IProducto | IProducto[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    expectedResult = null;
    service = TestBed.inject(ProductoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.find(123).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should create a Producto', () => {
      const producto = { ...sampleWithNewData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.create(producto).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a Producto', () => {
      const producto = { ...sampleWithRequiredData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.update(producto).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a Producto', () => {
      const patchObject = { ...sampleWithPartialData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of Producto', () => {
      const returnedFromService = { ...requireRestSample };

      const expected = { ...sampleWithRequiredData };

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toMatchObject([expected]);
    });

    it('should delete a Producto', () => {
      const expected = true;

      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult).toBe(expected);
    });

    describe('addProductoToCollectionIfMissing', () => {
      it('should add a Producto to an empty array', () => {
        const producto: IProducto = sampleWithRequiredData;
        expectedResult = service.addProductoToCollectionIfMissing([], producto);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(producto);
      });

      it('should not add a Producto to an array that contains it', () => {
        const producto: IProducto = sampleWithRequiredData;
        const productoCollection: IProducto[] = [
          {
            ...producto,
          },
          sampleWithPartialData,
        ];
        expectedResult = service.addProductoToCollectionIfMissing(productoCollection, producto);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a Producto to an array that doesn't contain it", () => {
        const producto: IProducto = sampleWithRequiredData;
        const productoCollection: IProducto[] = [sampleWithPartialData];
        expectedResult = service.addProductoToCollectionIfMissing(productoCollection, producto);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(producto);
      });

      it('should add only unique Producto to an array', () => {
        const productoArray: IProducto[] = [sampleWithRequiredData, sampleWithPartialData, sampleWithFullData];
        const productoCollection: IProducto[] = [sampleWithRequiredData];
        expectedResult = service.addProductoToCollectionIfMissing(productoCollection, ...productoArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const producto: IProducto = sampleWithRequiredData;
        const producto2: IProducto = sampleWithPartialData;
        expectedResult = service.addProductoToCollectionIfMissing([], producto, producto2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(producto);
        expect(expectedResult).toContain(producto2);
      });

      it('should accept null and undefined values', () => {
        const producto: IProducto = sampleWithRequiredData;
        expectedResult = service.addProductoToCollectionIfMissing([], null, producto, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(producto);
      });

      it('should return initial array if no Producto is added', () => {
        const productoCollection: IProducto[] = [sampleWithRequiredData];
        expectedResult = service.addProductoToCollectionIfMissing(productoCollection, undefined, null);
        expect(expectedResult).toEqual(productoCollection);
      });
    });

    describe('compareProducto', () => {
      it('Should return true if both entities are null', () => {
        const entity1 = null;
        const entity2 = null;

        const compareResult = service.compareProducto(entity1, entity2);

        expect(compareResult).toEqual(true);
      });

      it('Should return false if one entity is null', () => {
        const entity1 = { id: 1896 };
        const entity2 = null;

        const compareResult1 = service.compareProducto(entity1, entity2);
        const compareResult2 = service.compareProducto(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey differs', () => {
        const entity1 = { id: 1896 };
        const entity2 = { id: 15581 };

        const compareResult1 = service.compareProducto(entity1, entity2);
        const compareResult2 = service.compareProducto(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey matches', () => {
        const entity1 = { id: 1896 };
        const entity2 = { id: 1896 };

        const compareResult1 = service.compareProducto(entity1, entity2);
        const compareResult2 = service.compareProducto(entity2, entity1);

        expect(compareResult1).toEqual(true);
        expect(compareResult2).toEqual(true);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
