import { TestBed } from '@angular/core/testing';

import { sampleWithNewData, sampleWithRequiredData } from '../producto.test-samples';

import { ProductoFormService } from './producto-form.service';

describe('Producto Form Service', () => {
  let service: ProductoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoFormService);
  });

  describe('Service methods', () => {
    describe('createProductoFormGroup', () => {
      it('should create a new form with FormControl', () => {
        const formGroup = service.createProductoFormGroup();

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            nombre: expect.any(Object),
            descripcion: expect.any(Object),
            precio: expect.any(Object),
            imagen: expect.any(Object),
            cantidad: expect.any(Object),
            categoria: expect.any(Object),
          }),
        );
      });

      it('passing IProducto should create a new form with FormGroup', () => {
        const formGroup = service.createProductoFormGroup(sampleWithRequiredData);

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            nombre: expect.any(Object),
            descripcion: expect.any(Object),
            precio: expect.any(Object),
            imagen: expect.any(Object),
            cantidad: expect.any(Object),
            categoria: expect.any(Object),
          }),
        );
      });
    });

    describe('getProducto', () => {
      it('should return NewProducto for default Producto initial value', () => {
        const formGroup = service.createProductoFormGroup(sampleWithNewData);

        const producto = service.getProducto(formGroup) as any;

        expect(producto).toMatchObject(sampleWithNewData);
      });

      it('should return NewProducto for empty Producto initial value', () => {
        const formGroup = service.createProductoFormGroup();

        const producto = service.getProducto(formGroup) as any;

        expect(producto).toMatchObject({});
      });

      it('should return IProducto', () => {
        const formGroup = service.createProductoFormGroup(sampleWithRequiredData);

        const producto = service.getProducto(formGroup) as any;

        expect(producto).toMatchObject(sampleWithRequiredData);
      });
    });

    describe('resetForm', () => {
      it('passing IProducto should not enable id FormControl', () => {
        const formGroup = service.createProductoFormGroup();
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, sampleWithRequiredData);

        expect(formGroup.controls.id.disabled).toBe(true);
      });

      it('passing NewProducto should disable id FormControl', () => {
        const formGroup = service.createProductoFormGroup(sampleWithRequiredData);
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, { id: null });

        expect(formGroup.controls.id.disabled).toBe(true);
      });
    });
  });
});
