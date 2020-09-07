import { HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';

export abstract class BaseService {

  protected handleError(res: HttpErrorResponse | any) {
    return observableThrowError((res && res.error) ? res.error : 'Server error');
  }

  protected getFormattedDateString(inputDate: Date): string {
    let year = inputDate.getFullYear();
    let month = inputDate.getMonth() + 1;
    let date = inputDate.getDate();

    return year + '-' + month + '-' + date;
  }
}