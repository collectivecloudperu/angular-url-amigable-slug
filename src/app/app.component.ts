import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  contacto: FormGroup;
	submitted = false;
  title = 'Como Crear URLs Amigables (Slug) con Angular';

  constructor(private formBuilder: FormBuilder) { 
    this.contacto = formBuilder.group({
      nombre: [""],
      slug:[""]
    });
  }

  ngOnInit() {
    
      setTimeout(() => {
        this.contacto.patchValue({ nombre: "" });
      }, 2000);

      this.contacto.get("nombre")?.valueChanges.subscribe(val => {
        this.contacto.patchValue({ slug: val });
      })
    
  }

  get f() {return this.contacto.controls; }
  
}
