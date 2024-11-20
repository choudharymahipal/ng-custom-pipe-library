import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCustomPipeComponent } from './ng-custom-pipe.component';

describe('NgCustomPipeComponent', () => {
  let component: NgCustomPipeComponent;
  let fixture: ComponentFixture<NgCustomPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgCustomPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
