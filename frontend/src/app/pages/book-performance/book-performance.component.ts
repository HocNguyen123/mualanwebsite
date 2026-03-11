import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-performance',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-performance.html',
  styleUrl: './book-performance.css'
})
export class BookPerformanceComponent {

  booking = {
    name: '',
    phone: '',
    date: '',
    eventType: '',
    location: '',
    notes: ''
  };

  submitBooking() {
    console.log('Booking submitted:', this.booking);
  }
}
