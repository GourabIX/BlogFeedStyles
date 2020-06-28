import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-style3",
  templateUrl: "./style3.component.html",
  styleUrls: ["./style3.component.css"],
})
export class Style3Component implements OnInit {
  url: string = "https://www.wipo.int/wipo-match/en/";

  constructor() {}

  ngOnInit() {}
}
