import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string= "https://www.buenamusica.com/media/fotos/discos/b/bad-bunny/bad-bunny_diles.jpg"
  public titulo:string= "Diles - Bad Bunny"
  constructor() { }

  
  ngOnInit(): void {
  }

}
