import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, EventEmitter, Output, OnInit, AfterViewInit } from "@angular/core";

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html'
})
export class HeaderComponent implements OnInit{
    

    constructor(private dataStorageService : DataStorageService,
                private authService : AuthService,
                private router : Router,
                private activatedRoute : ActivatedRoute){}

    ngOnInit() {
     
    }

    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature : string){
        this.featureSelected.emit(feature);
    }

    public onLogOut(){
        this.authService.logOut();
        this.router.navigate(['/sign-in'], {relativeTo: this.activatedRoute});
    }
    public isAuth(){
        return this.authService.getLogIn();
    }
}