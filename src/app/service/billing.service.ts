import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private readonly URL = 'http://localhost:8084/api/v1/billing-service/';
  constructor() { }
}
