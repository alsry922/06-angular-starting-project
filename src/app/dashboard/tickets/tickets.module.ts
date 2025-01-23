import {NgModule} from "@angular/core";
import {TicketsComponent} from "./tickets.component";
import {NewTicketComponent} from "./new-ticket/new-ticket.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [TicketsComponent, NewTicketComponent],
  exports: [TicketsComponent],
  imports: [
    SharedModule
  ]
})
export class TicketsModule {}
