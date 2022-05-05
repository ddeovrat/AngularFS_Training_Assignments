import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("message from custom http interceptor");
    const hardcodedToken = 'Alpha';
    let updatedReq:HttpRequest<any>=req.clone({
      setHeaders:{
        Authorization: `Bearer ${hardcodedToken}`
      }
    });
    return next.handle(updatedReq)
    .pipe(
      retry(2),
      catchError((error:HttpErrorResponse)=>{
        console.log(`Error Message from HTTP Interceptor: ${req.url},StatusCode: ${error.status}`);
        if(error.status==404)
        {
          console.log("Request not found --custom msg");
        }
        else
        {
          console.log(error.message);
        }
        return throwError(()=>new Error(error.message));
      }
    ));
  }
}
