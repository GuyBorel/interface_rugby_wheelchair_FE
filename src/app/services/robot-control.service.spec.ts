import { TestBed } from '@angular/core/testing';

import { RobotControlService } from './robot-control.service';

describe('RobotControlService', () => {
  let service: RobotControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RobotControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
