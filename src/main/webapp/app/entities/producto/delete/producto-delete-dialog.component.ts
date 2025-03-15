import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { IProducto } from '../producto.model';
import { ProductoService } from '../service/producto.service';

@Component({
  templateUrl: './producto-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class ProductoDeleteDialogComponent {
  producto?: IProducto;

  protected productoService = inject(ProductoService);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.productoService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
