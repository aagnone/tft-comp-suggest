import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompControllerComponent } from './comp-controller.component';

describe('CompControllerComponent', () => {
  let component: CompControllerComponent;
  let fixture: ComponentFixture<CompControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
