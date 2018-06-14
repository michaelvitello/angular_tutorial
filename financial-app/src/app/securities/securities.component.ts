import { Component, OnInit } from "@angular/core";
import { SECURITIES, SecurityService } from "../security.service";
import { FormBuilder } from "@angular/forms";
import { map, startWith, tap } from "rxjs/operators";

@Component({
  selector: "app-securities",
  templateUrl: "./securities.component.html",
  styleUrls: ["./securities.component.css"]
})
export class SecuritiesComponent implements OnInit {
  availableSecurities = SECURITIES;
  availableRanges = [
    { label: "1M", duration: 30 },
    { label: "3M", duration: 30 * 3 },
    { label: "6M", duration: 30 * 6 },
    { label: "1Y", duration: 365 },
    { label: "3Y", duration: 365 * 3 },
    { label: "5Y", duration: 365 * 5 },
    { label: "Max", duration: 365 * 20 }
  ];

  form = this.fb.group({
    security: this.availableSecurities[0],
    range: this.availableRanges[0]
  });

  securities$ = this.securityService.getSecurityTimeSerie(
    this.form.controls.security.valueChanges.pipe(
      startWith(this.form.controls.security.value)
    ),
    this.form.controls.range.valueChanges.pipe(
      startWith(this.form.controls.range.value),
      map(e => e.duration)
    )
  );

  constructor(
    private securityService: SecurityService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
}
