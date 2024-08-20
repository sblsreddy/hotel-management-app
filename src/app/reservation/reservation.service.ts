import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private aprUrl = "http://localhost:3001";

  private reservations: Reservation[] = [];

// Before ngOnInit lifecycle hook
  constructor(private http: HttpClient) {
   
   }


   //CRUD Operations

  // Retrive all
  getReservations() : Observable<Reservation[]>{
   // return this.http.get<Reservation[]> (this.aprUrl+"/reservations);
  }

  // Retrive one record by id
  getReservation(id: String): Reservation | undefined{
    return this.reservations.find(res => res.id === id);
  }

  // Create or Add a record based on reservation
  addReservation(reservation: Reservation): void{
    reservation.id = Date.now.toString();
    this.reservations.push(reservation);
    
  }

 // Delete a record based on id
  deleteReservation(id: String): void {
    let index = this.reservations.findIndex( res => res.id === id);
    this.reservations.splice(index,1);
    
  }

  //Update a record based on reservation
  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex( res => res.id === id);
    this.reservations[index] = updatedReservation;
    
  }

}
