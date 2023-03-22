import { Component,OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 
  persona:persona=new persona("","","");

  //el constructor llama al servicio 
  constructor(public personaService:PersonaService){}


  ngOnInit(): void {
    //el subscribe conecta el onserver con fc observables, es para el cliente-servidor 
    this.personaService.getPersona().subscribe(data =>{this.persona=data});
  }
}
