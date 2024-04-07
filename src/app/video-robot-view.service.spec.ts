import { TestBed } from '@angular/core/testing';

import { VideoRobotViewService } from './video-robot-view.service';

describe('VideoRobotViewService', () => {
  let service: VideoRobotViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoRobotViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
