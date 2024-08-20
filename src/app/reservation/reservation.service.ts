import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }

  private reservations: Reservation[] = [];

   //CRUD Operations

  // Retrive all
  getReservations() : Reservation[]{
    return this.reservations;
  }

  // Retrive one record by id
  getReservation(id: String): Reservation | undefined{
    return this.reservations.find(res => res.id === id);
  }

  // Create or Add a record based on reservation
  addReservation(reservation: Reservation): void{
    this.reservations.push(reservation);
  }

 // Delete a record based on id
  deleteReservation(id: String): void {
    let index = this.reservations.findIndex( res => res.id === id);
    this.reservations.splice(index,1);
  }

  //Update a record based on reservation
  updateReservation(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex( res => res.id === updatedReservation.id);
    this.reservations[index] = updatedReservation;
  }

}
