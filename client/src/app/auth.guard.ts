import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './modules/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService){

  }

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      this.auth.isLoggedIn().subscribe((response: Response) => {
        console.log("respoose - ", response.status)
        if(response.status === 200) return true
      }, (error: Response) => {
        if(error.status === 401) return false
      })
      return false;
  }
}
