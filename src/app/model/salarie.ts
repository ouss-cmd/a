export class Salarie {

    public id: number | undefined;
    public CIN : string;
    public Nom : string;
    public prenom :string;
    public date_n : Date;
    public email : string;
    public type : string;

    constructor( CIN : string ,Nom : string, prenom :string  ,  date_n : Date,   email : string,  type : string)
    {   this.CIN=CIN;
        this.Nom=Nom;
        this.prenom=prenom;
        this.date_n=date_n;
        this.email=email;
        this.type=type;

    }
}
