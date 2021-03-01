import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  photos= [
    {
      url: "https://s1.1zoom.me/big0/158/Lamborghini_White_background_Yellow_Metallic_566962_1280x853.jpg",
      description: "carro amarelo"
    },
    {
      url: "https://image.freepik.com/fotos-gratis/teste-de-carro-sedan-vermelho-na-estrada_114579-4061.jpg",
      description: "carro vermelho"
    }
  ]
}
