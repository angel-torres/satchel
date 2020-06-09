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
      return false;
  }
}
