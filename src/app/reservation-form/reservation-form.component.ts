import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {

  // Dependency injection , when instance is created the contrcutor will be invoked
  constructor(private formBuilder: FormBuilder,
              private reservationService: ReservationService
  ) {
  }

// Life cycle hook when component is initialized
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      // it should be same as form control name for e.g. checkInDate should be same in html
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
      
    })
  }

  reservationForm: FormGroup = new FormGroup({});

  onSubmit() {
    if(this.reservationForm.valid){
      let reservation: Reservation = this.reservationForm.value; // all the form values come here
      this.reservationService.addReservation(reservation);
    }
  }
}
