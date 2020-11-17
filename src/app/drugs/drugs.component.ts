import { Component, NgModule, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DrugsService } from '../service/drugs.service';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit {

  public drugs=[]
  constructor(private drugsService: DrugsService) { 
    
  }

  ngOnInit(): void {
    this.drugsService.getDrugs().subscribe(data => {
      this.drugs =data
     console.log(data);
    });
    
  }
 
}
