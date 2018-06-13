import { inject, TestBed } from "@angular/core/testing";
import { API_FUNCTIONS, SecurityService } from "./security.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("SecurityService", () => {
  let service: SecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityService, HttpClientTestingModule]
    });
    service = TestBed.get(SecurityService);
  });

  it("should be created", inject(
    [SecurityService],
    (service: SecurityService) => {
      expect(service).toBeTruthy();
    }
  ));

  it("should fetch securities$", () => {
    service
      .getSecurityTimeSerie({
        symbol: "SPX",
        name: "S&P 500",
        fn: API_FUNCTIONS.TIME_SERIES_DAILY
      })
      .subscribe(e => {
        expect(e).not.toBeNull();
      });
  });
});
