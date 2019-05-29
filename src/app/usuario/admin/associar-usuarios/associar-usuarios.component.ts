import { Component, OnInit } from '@angular/core';

export interface Usuario {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-associar-usuarios',
  templateUrl: './associar-usuarios.component.html',
  styleUrls: ['./associar-usuarios.component.css']
})
export class AssociarUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [
    {value: 'usuario0', viewValue: 'Pedro'},
    {value: 'usuario1', viewValue: 'Ian'},
    {value: 'usuario2', viewValue: 'Rafael'},
    {value: 'usuario3', viewValue: 'Rubens'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
