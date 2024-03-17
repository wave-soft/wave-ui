import { TestBed } from '@angular/core/testing';

import { NgxWaveUiService } from './ngx-wave-ui.service';

describe('NgxWaveUiService', () => {
  let service: NgxWaveUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWaveUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
