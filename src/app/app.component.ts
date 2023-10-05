import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Meu portifólio';


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
