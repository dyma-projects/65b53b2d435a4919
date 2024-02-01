import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrl: './exercice1.component.css'
})
export class Exercice1Component {
inputType: string = 'text';
defaultValue: string = 'entrez du texte'

changeInputType(){
  if (this.inputType == 'text') {
    this.inputType = 'number';
    this.defaultValue = '0'

  }else{
    this.inputType = 'text';
    this.defaultValue = 'entrez du texte'
  }
}

}
