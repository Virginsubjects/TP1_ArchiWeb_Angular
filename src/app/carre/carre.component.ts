import { rendererTypeName, ResourceLoader } from '@angular/compiler';
import { Component, HostBinding, Input, OnInit} from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.css']
})
export class CarreComponent implements OnInit {
  
  private color : String;
  public id = "";
   
  constructor() { 
    this.color = "white";
  }

  ngOnInit(): void {
  }

  getColor(){
    return this.color;
  } 

  setColor(id :String){
    this.color = id;
  }
}
