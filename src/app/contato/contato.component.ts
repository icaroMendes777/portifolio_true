import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { EditorModule } from '@tinymce/tinymce-angular';



@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {

  private data:any = []

  private url = 'https://dummyjson.com/products/1';

  constructor(private http: HttpClient) {
   // this.data = this.getData();
  }

  hello(){
    return 'teste';
  }

  ngOnInit(): void {
    this.getData();
    
  }

  getData(){

    //this.httpClient.get(this.url);
    //http://icaromendes.epizy.com/teste.php
    //http://localhost/comment/teste.php
     this.http.get('http://localhost/comment/teste.php').subscribe(res => {
     console.log('res', res); 
     return res;
      
    })


    /*
    this.http.get('http://localhost:3000/users').subscribe(res => {
      console.log('res', res)
    })*/

    /*
    const url ='https://dummyjson.com/products/1'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
      return this.data;
    })*/
  }

}
