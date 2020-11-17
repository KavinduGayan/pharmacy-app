import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DrugsService } from '../service/drugs.service';

@Component({
  selector: 'app-drug-billing',
  templateUrl: './drug-billing.component.html',
  styleUrls: ['./drug-billing.component.css']
})
export class DrugBillingComponent implements OnInit {
  public drugs=[];
  constructor(private drugsService: DrugsService,private fb: FormBuilder) { }

  billingForm = new FormGroup({
    customerName:new FormControl(''),
    mobileNo:new FormControl(''),
    billingDrugs: new FormGroup({
      drugId:new FormControl(''),
      quantity: new FormControl('')
    })
  })
  ngOnInit(): void {
    this.drugsService.getDrugs().subscribe(
      data => {
      this.drugs =data
     console.log(data);
    },
    error=>console.error(error)

    
    );
  }

}
