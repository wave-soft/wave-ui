import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComponentsComponent } from './custom-components.component';

describe('ComponentsComponent', () => {
  let component: CustomComponentsComponent;
  let fixture: ComponentFixture<CustomComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
