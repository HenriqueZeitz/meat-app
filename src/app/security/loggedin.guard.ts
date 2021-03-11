import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanLoad, Route, RouterState } from "@angular/router";
import { LoginService } from "./login/login.service";

@Injectable()
export class LoggedInGuard implements CanLoad {

    constructor( private loginService: LoginService ) {}

    canLoad(route: Route): boolean {
        const loggedIn = this.loginService.isLoggedIn()
        if (!loggedIn){
            this.loginService.handleLogin(`/${route.path}`)
        }
        return loggedIn
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterState): boolean {
        return false
    }

}