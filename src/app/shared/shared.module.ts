import {NgModule} from "@angular/core";
import {ButtonComponent} from "./button/button.component";
import {ControlComponent} from "./control/control.component";

@NgModule({
  declarations: [ButtonComponent, ControlComponent],
  exports: [ButtonComponent, ControlComponent],
})
export class SharedModule {}
