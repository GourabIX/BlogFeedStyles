import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-style4",
  templateUrl: "./style4.component.html",
  styleUrls: ["./style4.component.css"],
})
export class Style4Component implements OnInit {
  url: string = "https://www.wipo.int/wipo-match/en/";
  carouselImageUrl1 =
    "https://sanctum9.files.wordpress.com/2018/02/186489-minimalist.jpg";
  carouselImageUrl2 =
    "https://sanctum9.files.wordpress.com/2018/04/ubuntu-3145957_1280.png";
  carouselImageUrl3 =
    "https://sanctum9.files.wordpress.com/2018/02/ps4-2326600_1280_compressed.jpg";
  carouselImageUrl4 =
    "https://sanctum9.files.wordpress.com/2018/05/youtube-2712573_1280.png";

  constructor() {}

  ngOnInit() {}
}
