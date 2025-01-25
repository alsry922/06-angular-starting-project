import {NgModule} from "@angular/core";
import {TicketsComponent} from "./tickets.component";
import {NewTicketComponent} from "./new-ticket/new-ticket.component";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {TicketComponent} from "./ticket/ticket.component";

@NgModule({
  declarations: [TicketsComponent, NewTicketComponent, TicketComponent],
  exports: [TicketsComponent],
  imports: [
    SharedModule, FormsModule, NgForOf, NgIf,
  ]
})
export class TicketsModule {}
