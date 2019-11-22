export class Voyage{
    photo:string;
    poidsdisponible:string;
    Nomchauffeur:string;
    Depart:string;
    Destination:string;
    datedepart:string;
    idReservant:[];
    idtrajet:string;
    idvoyageur:string;
    prixparkilo:string;
    numero:string;    
    constructor(public idchauffeur,public author:string){}
    
}