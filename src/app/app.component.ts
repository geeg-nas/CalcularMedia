import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  CodigoRMA : number = 10001;
  Nome : string = "Frederico";
  nota1 : number = 10;
  nota2 : number = 8;
  nota3 : number = 9;
  nota4 : number = 10;
  media : number = (this.nota1 + this.nota2 + this.nota3 + this.nota4)/4
  imagem : string = "../assets/img/imgfred.jpeg"



  title = 'CalcularMediage';
}

