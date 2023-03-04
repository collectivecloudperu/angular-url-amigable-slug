import { Directive, OnInit, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs'; 

@Directive({
  selector: "[formControlName][transformarSlug]"
})

export class DirectivaSlugDirective implements OnInit, OnDestroy {
  valueSubscription: Subscription;


  constructor(public ngControl: NgControl) { 
    this.valueSubscription = new Subscription;
  }

  ngOnInit(): void {
      this.valueSubscription = this.ngControl.control!.valueChanges.subscribe(
        value => {
          const nval = this.transform(value);
          this.ngControl.control!.setValue(nval, { emitEvent: false });
        }
      )
  }

  transform(value : string) {
    let texto = value.toLowerCase();

    if(texto.charAt(0) == " ") {
      texto = texto.trim(); 
    }

    if(texto.charAt(texto.length - 1) == "-") {
      //texto = (texto.replace(/-/g, ""));
    }

    texto = texto.replace(/ +/g, "-");
    texto = texto.replace(/--/g, "-");
    texto = texto.normalize("NFKD".replace(/[\u0300-\u036f]/g, ""));
    texto = texto.replace(/[^a-zA-Z0-9 -]/g, "");

    return texto; 

  }

  ngOnDestroy(): void {
      this.valueSubscription.unsubscribe();
  }

}
