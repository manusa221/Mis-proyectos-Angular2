import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  //creamos tres propiedades dentro de la clase
  numero1: string="0";//aqui tenemos que cambiar la variable a string, porque si la dejamos en number dará error al crear el método sumar
  numero2: string="0";
  resultado: number=0;
//creamos un método para sumar, añadimos el this porque se refiere a la clase AppComponent
  sumar ():void{
    //tenemos que pasar las variables a enteros ya que las considera texto desde el html
    this.resultado = parseInt(this.numero1) + parseInt(this.numero2);
  }
  restar ():void{
    //tenemos que pasar las variables a enteros ya que las considera texto desde el html
    this.resultado = parseInt(this.numero1) - parseInt(this.numero2);
  }
}
