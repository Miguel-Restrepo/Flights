import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/general.data';
import { ProblemsService } from 'src/app/services/problems.service';

@Component({
  selector: 'app-problem4',
  templateUrl: './problem4.component.html',
  styleUrls: ['./problem4.component.scss']
})
export class Problem4Component implements OnInit {
  length =GeneralData.ROUTE_LENGTH;
  formJourney: FormGroup = this.fb.group({});
  //Inyección de dependencias
  constructor(private fb: FormBuilder,
    private problemsService: ProblemsService) { }
  buildForm() {
    this.formJourney = this.fb.group({
      origin: ['', [Validators.required, Validators.minLength(length),],],
      destination: ['', [
        Validators.required, Validators.minLength(length)],]
    })

  }
  ngOnInit(): void {
    this.buildForm();
  }

  get getFV() {
    return this.formJourney.controls;
  }
  calculateRoute() {

    let origin = this.getFV['origin'].value;
    let destination = this.getFV['destination'].value;
    if (origin!=destination) {
      /*
      this.problemsService.problem4(origin, destination, 2).subscribe({
        next: (listObjects: Object[]) => {
          
        },
        error: err => {
          return [];
        }
      });
    }*/
    //console.log(this.problemsService.problem2());
    
  }
  }


}
