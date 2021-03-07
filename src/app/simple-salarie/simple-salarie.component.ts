import { Component, OnInit } from '@angular/core';
import { Salarie } from '../model/salarie';
import { SalarieService } from '../services/salarie.service';

@Component({
  selector: 'app-simple-salarie',
  templateUrl: './simple-salarie.component.html',
  styleUrls: ['./simple-salarie.component.css']
})
export class SimpleSalarieComponent implements OnInit {
 
      lesSalarie : Salarie[] | undefined ;

  constructor(public ps:SalarieService) {

    
    this.ps.getTousSalarie().subscribe(

      data  => {this.lesSalarie = data;},

      error => {alert("Impossible d'afficher")}

    );

}

  ngOnInit(): void {
  }

}
