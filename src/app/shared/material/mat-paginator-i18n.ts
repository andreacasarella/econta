import { MatPaginatorIntl } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

export class MatPaginatorI18n {

  constructor(private readonly translate: TranslateService) {}

  getPaginatorIntl(): MatPaginatorIntl {
    const paginatorIntl = new MatPaginatorIntl();
    paginatorIntl.itemsPerPageLabel = this.translate.instant('components.paginator.itemsPerPage');
    paginatorIntl.nextPageLabel = this.translate.instant('components.paginator.next');
    paginatorIntl.previousPageLabel = this.translate.instant('components.paginator.prev');
    paginatorIntl.firstPageLabel = this.translate.instant('components.paginator.first');
    paginatorIntl.lastPageLabel = this.translate.instant('components.paginator.last');
    paginatorIntl.getRangeLabel = this.getRangeLabel.bind(this);
    return paginatorIntl;
  }

  private getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0 || pageSize === 0) {
      return this.translate.instant('components.paginator.rangePage1', { length });
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return this.translate.instant('components.paginator.rangePage2', { startIndex: startIndex + 1, endIndex, length });
  }
}
