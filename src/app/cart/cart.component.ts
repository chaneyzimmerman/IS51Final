import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  bikes: Array<any> [];
  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    this.bikes = [{
      "id": 1,
      "image": "../../assets/bike1.jpeg",
      "description": "Bike Model 1",
      "price": 5000,
      "quantity": 1
    },
    {
      "id": 2,
      "image": "../../assets/bike2.jpeg",
      "description": "Bike Model 2",
      "price": 4000,
      "quantity": 2
    },
    {
      "id": 3,
      "image": "../../assets/bike3.jpeg",
      "description": "Bike Model 3",
      "price": 3000,
      "quantity": 3
    }]
    // this.loadInventoryFromJson = await this.loadInventoryFromJson();
  }

  async loadInventoryFromJson() {
    // const inventory = await this.http.get('assets/inventory.json').toPromise();
    // return inventory.json
  }

}
