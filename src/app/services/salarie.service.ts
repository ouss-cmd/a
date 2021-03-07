import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salarie } from '../model/salarie';

@Injectable({
  providedIn: 'root'
})
export class SalarieService {
  ajoutProduit(p: Salarie) {
    throw new Error('Method not implemented.');
  }
apiUrl="http://localhost:3000/api/salaries";

  constructor(public httpclient:HttpClient) { }
  getTousSalarie()
  {
      return this.httpclient.get<Salarie[]>(this.apiUrl);
  }

  ajoutSalarie(p:Salarie)
  {
     return this.httpclient.post<any>(this.apiUrl, p);
  }

  supprimerSalarie(id:number)
  {
    return this.httpclient.delete<any>(this.apiUrl+"/"+ id);
  }

  getSalarie(id:number)
  {
    return this.httpclient.get<Salarie>(this.apiUrl+"/"+id);
  }

  modifierSalarie(p:Salarie)
  {
    return this.httpclient.put(this.apiUrl, p);
  }
}
