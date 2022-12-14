import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

 // userRegisterForm!: FormGroup; 
 userRegisterForm=this.fb.group({
  'username':['',[Validators.required]],
  'password':['',[Validators.required]],
  'cofirmpassword':['',[Validators.required]],
})

  constructor(
    public fb : FormBuilder

  ) { }

  ngOnInit() {
    



  }

  register(){
    if(!this.userRegisterForm.valid){
      return false
    }else{
      console.log("llego al metodo");
      return true
    }
    
  }
}
