import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DrugsService } from '../service/drugs.service';

@Component({
  selector: 'app-drug-add',
  templateUrl: './drug-add.component.html',
  styleUrls: ['./drug-add.component.css']
})
export class DrugAddComponent implements OnInit {
  public drug;
  response_message=''
  constructor(private drugsService: DrugsService) { }

  ngOnInit(): void {
  }
  profileForm = new FormGroup({
    description: new FormControl(''),
    brandName: new FormControl(''),
    status: new FormControl(''),
    pharmacyId: new FormControl(''),
    drugDealer:new FormGroup({
      dealerName:new FormControl(''),
      mobileNo:new FormControl(''),
      email:new FormControl(''),
      address:new FormControl('')
    })
  });
  onSubmit() {
    this.drugsService.saveDrug(this.profileForm.value)
    .subscribe(data => {
      this.response_message="success";
      console.log(data)
      this.drug=data;
    },
    error=>{
      console.error(error)
      this.response_message=error.message;
    }
    );
  }

}
