import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ContactCardInfo} from "../../interfaces/profolio/contact-card-info";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactColor= true;





  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
  }

  formData = this.fb.group({

    name:[null,Validators.required],
    email:[null,Validators.required],
    subject:[null,Validators.required],
    message:[null,Validators.required]

  })

  ngSubmit(){

    console.log(this.formData.value);

  }





  /*** contact-card-data */
  contactArray:ContactCardInfo[]=[
    {
      _id:'1',
      contactIcon:'fa fa-mobile-alt',
      contactPrimaryColor:'rgb(88, 72, 180)',
      contactPrimaryBg:"rgb(230, 225, 255)",
      contactTitle:"Phone",
      contactInfo:'+1-202-555-0135'
    },
    {
      _id:'2',
      contactIcon:'fa fa-envelope',
      contactPrimaryColor:'rgb(255, 101, 37)',
      contactPrimaryBg:"rgb(255, 217, 201)",
      contactTitle:"E-Mail",
      contactInfo:'hello@example.com'
    },
    {
      _id:'3',
      contactIcon:'fa fa-map-marker-alt',
      contactPrimaryColor:' rgb(255, 51, 102)',
      contactPrimaryBg:"rgb(255, 213, 223)",
      contactTitle:"Location",
      contactInfo:'California, USA'
    }
  ]



}
