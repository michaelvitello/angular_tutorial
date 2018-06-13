import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-security-detail",
  templateUrl: "./security-detail.component.html",
  styleUrls: ["./security-detail.component.css"]
})
export class SecurityDetailComponent implements OnInit {
  @Input() security: any;

  view = [1024, 768];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = false;
  xAxisLabel = "Dates";
  showYAxisLabel = true;
  yAxisLabel = "Price";

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };
  autoScale = true;

  ngOnInit(): void {}
}
