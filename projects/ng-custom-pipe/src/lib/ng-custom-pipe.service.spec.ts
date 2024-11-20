import { TestBed } from '@angular/core/testing';

import { NgCustomPipeService } from './ng-custom-pipe.service';

describe('NgCustomPipeService', () => {
  let service: NgCustomPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCustomPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
