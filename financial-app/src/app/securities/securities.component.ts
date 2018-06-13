import { Component, OnInit } from '@angular/core';
import { Security } from '../security';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css']
})
export class SecuritiesComponent implements OnInit {

  constructor(private securityService: SecurityService) { }

  ngOnInit() {
    this.getSecurities();
  }

  getSecurities(): void {
    this.securityService.getSecurities()
      .subscribe(securities => this.securities = securities);
  }

}
