import { Component } from '@angular/core';
import {Router} from "@angular/router"


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) {}


  visible: boolean = true;

  goto(route:string)
  {
    this.visible = false;
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    setTimeout(()=>{
      this.router.navigate([route])
      setTimeout(()=>{
        this.visible = true;
      },100)

    },500)

  }


}
