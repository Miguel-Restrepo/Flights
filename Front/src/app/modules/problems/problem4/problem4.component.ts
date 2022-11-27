import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/general.data';
import { CoinModel } from 'src/app/models/Coin.model';
import { JourneyModel } from 'src/app/models/Journey.model';
import { ProblemsService } from 'src/app/services/problems.service';

@Component({
  selector: 'app-problem4',
  templateUrl: './problem4.component.html',
  styleUrls: ['./problem4.component.scss']
})
export class Problem4Component implements OnInit {
  //atributos del componente
  length = GeneralData.ROUTE_LENGTH;
  formJourney: FormGroup = this.fb.group({});
  coins: CoinModel[] = [];
  price: number = 0.0;
  selected: CoinModel = new CoinModel(1, "USD", 1);
  //Inyección de dependencias
  constructor(private fb: FormBuilder,
    private problemsService: ProblemsService) { }

  //Construcion del formulario
  buildForm() {
    this.formJourney = this.fb.group({
      origin: ['', [Validators.required, Validators.minLength(length),],],
      destination: ['', [Validators.required, Validators.minLength(length)],],
      maxFlights: ['', [Validators.required],],
      coint: ['', []],
    })

  }
  //Inicializador del componente
  ngOnInit(): void {
    this.coins.push(new CoinModel(1, "USD", 1));
    this.coins.push(new CoinModel(2, "EUR", 0.961261));
    this.coins.push(new CoinModel(3, "GBP", 0.827033));
    this.selected = this.coins[0];
    this.buildForm();
  }
  //Obtenciondel formulario
  get getFV() {
    return this.formJourney.controls;
  }


  /**
   * PROBLEMA 3 Y 4
   * Metodo encargado de consumir el servicio "problemsService" para calcular la ruta segun el origen destino y 
   * viajes maximos ingresados por el usuario0
   * @params no tiene parametros, pero usa origin, destination y maxflights del formulario
   * @return no retorna nada, pero asigna el precio total, y muestra por consola la respuesta
   */
  calculateRoute() {
    let origin = this.getFV['origin'].value;
    let destination = this.getFV['destination'].value;
    let maxFlights = this.getFV['maxFlights'].value;
    if (origin != destination) {
      this.problemsService.problem4(origin, destination, maxFlights).subscribe(data => {this.price= data.Price;
      console.log(data);});
      //console.log(this.problemsService.problem2());
    }
    this.price = 10;
  }

  /**
   * PROBLEMA 5
   * Metodo que me actualiza la conversion de la moneda a la seleccionada por el usuario
   * @params id: any representa lo seleccionado desde el usuario en el select
   * @return no retorna nada, solo cambia el valor del select  en la vista
   */
  updateObj(id: any) {
    if (id) {
      if (id.target) {
        let coint = this.coins[Number.parseInt(id.target.value)];
        if (coint != null) {
          this.selected = coint;
        }
      }
    }
  }

}
