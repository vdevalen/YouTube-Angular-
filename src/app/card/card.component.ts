import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image?:string
  public titulo:string= "Diles - Bad Bunny"
  @Input() dataEntrante:any; //se usa para resibir datos dentro de un componente 
  constructor() { }

  
  ngOnInit(): void {
    this.image= "https://www.buenamusica.com/media/fotos/discos/b/bad-bunny/bad-bunny_diles.jpg"
  }

}
