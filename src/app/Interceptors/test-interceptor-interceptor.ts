import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';


export const testInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("TEST INTERCEPTORS");
  console.log(req.url);

   return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      console.log(req.url, 'returned a response with status', event.status);
    }
  }));
};
