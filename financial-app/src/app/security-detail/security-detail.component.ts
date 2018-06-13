import { Component, OnInit, Input } from '@angular/core';
import { Security } from '../security';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SecurityService }  from '../security.service';

@Component({
  selector: 'app-security-detail',
  templateUrl: './security-detail.component.html',
  styleUrls: ['./security-detail.component.css']
})
export class SecurityDetailComponent implements OnInit {
  @Input() security: Security;

  constructor(
    private route: ActivatedRoute,
    private SecurityService: SecurityService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSecurity();
  }

  getHero(): void {
    const symbol = +this.route.snapshot.paramMap.get('2. Symbol');
    this.SecurityService.getSecurity(symbol)
      .subscribe(security => this.security = security);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
