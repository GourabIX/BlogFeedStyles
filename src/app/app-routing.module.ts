import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Style1Component } from "./style1/style1.component";
import { Style2Component } from "./style2/style2.component";
import { Style3Component } from "./style3/style3.component";
import { Style4Component } from "./style4/style4.component";
import { FillerComponent } from "./filler/filler.component";

const routes: Routes = [
  {
    path: "style-one",
    component: Style1Component,
  },
  {
    path: "style-two",
    component: Style2Component,
  },
  {
    path: "style-three",
    component: Style3Component,
  },
  {
    path: "style-four",
    component: Style4Component,
  },
  {
    path: "filler",
    component: FillerComponent,
  },
  {
    path: "",
    component: Style1Component,
  },
  {
    path: "*",
    component: Style1Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
