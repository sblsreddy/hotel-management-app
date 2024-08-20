import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {

  // Dependency injection , when instance is created the contrcutor will be invoked
  constructor(private formBuilder: FormBuilder) {

  }

// Life cycle hook when component is initialized
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
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

    }
  }
}
