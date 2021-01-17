import { Component, OnInit } from '@angular/core';

//1.- importamos dependencias
import { FormControl, FormGroup } from '@angular/forms';
import { AuthFireService } from '../../servicios/auth-fire.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  //2.- creamos objeto de tipo formulario para registarr un usuario
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  //3.- inyectamos servicio
  constructor(private authServ:AuthFireService) { }

  ngOnInit(): void {
  }

  //creamos metodo para registarr a un nuevo usuario con ayuda del servicio
  onRegister(){
    const {email,password}=this.loginForm.value;
    this.authServ.register(email,password);
  }

}
