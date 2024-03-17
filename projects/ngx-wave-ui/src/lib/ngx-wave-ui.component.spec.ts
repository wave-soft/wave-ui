import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWaveUiComponent } from './ngx-wave-ui.component';

describe('NgxWaveUiComponent', () => {
  let component: NgxWaveUiComponent;
  let fixture: ComponentFixture<NgxWaveUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxWaveUiComponent]
    });
    fixture = TestBed.createComponent(NgxWaveUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
