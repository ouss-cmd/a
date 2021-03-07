import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Salarie } from '../model/salarie';
import { SalarieService } from '../services/salarie.service';

@Component({
  selector: 'app-ajoute',
  templateUrl: './ajoute.component.html',
  styleUrls: ['./ajoute.component.css']
})
export class AjouteComponent implements OnInit {
  

  constructor(public ps:SalarieService) { }

  ngOnInit(): void {
  }
  ajouter(f:NgForm)
  {
     //récupérer les inputs
     let nom = f.value['nom'];
     let prenom = f.value['prenom'];
     let date_n = f.value['date_n'];
     let email = f.value['email'];
     let CIN = f.value['CIN'];
     let type = f.value['type'];

     //créer l'objet salaire
    let  p: Salarie;
    p = new Salarie (nom,prenom,date_n,email,CIN,type);

    this.ps.ajoutSalarie(p).subscribe (

     data  => { alert("ajout salaire avec succès");
        },

      error => {alert('echec ajout');}
    );
  }
}
