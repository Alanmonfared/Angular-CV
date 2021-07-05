import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  public input: string = '';
  // public gender: boolean = false

  // public meddelande: string = '';
  // public amne: string = '';

  log(val: any){
    console.log(val);

    }

  sub(form: any) {
    console.log(form.value);
    // const message = `${this.amne}`
    // alert(message | json)

  }    


 }