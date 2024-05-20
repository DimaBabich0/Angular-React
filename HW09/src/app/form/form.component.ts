import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent
{
  myForm : FormGroup;
  constructor()
  {
    this.myForm = new FormGroup(
    {
      "name": new FormControl("", Validators.required),
      "email": new FormControl("",
      [
        Validators.required,
        Validators.email
      ]),
      "phone": new FormControl("",
      [
        Validators.required, 
        Validators.pattern("[0-9]{11}")
      ])
    });
  }

  submit()
  {
    console.clear();
    console.log(`Name - ${this.myForm.value.name}`);
    console.log(`Email - ${this.myForm.value.email}`);
    console.log(`Phone - ${this.myForm.value.phone}`);
  }
}