import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  inputName:string='';
  inputAge:string='';
  inputEmail:string='';
  inputPassword:string='';
  onNameInput(event:any){
    this.inputName=event.target.value;
  }
  onAgeInput(event:any){
    this.inputAge=event.target.value;
  }
  onEmailInput(event:any){
    this.inputEmail=event.target.value;
  }
  onPassInput(event:any){
    this.inputPassword=event.target.value;
  }

}
