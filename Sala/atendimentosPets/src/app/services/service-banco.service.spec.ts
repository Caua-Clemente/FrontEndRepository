import { TestBed } from '@angular/core/testing';

import { ServiceBancoService } from './service-banco.service';

describe('ServiceBancoService', () => {
  let service: ServiceBancoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBancoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
