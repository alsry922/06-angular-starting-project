import { Component } from '@angular/core';
import {NewTicketComponent} from "./new-ticket/new-ticket.component";
import {Ticket} from "./tickets.model";
import {NewTicketInputData} from "./new-ticket/new-ticket.model";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(newTicketInputData: NewTicketInputData) {
    const ticket: Ticket = {
      title: newTicketInputData.title,
      request: newTicketInputData.request,
      id: Math.random().toString(),
      status: 'open',
    }
    this.tickets.push(ticket);
  }
}
