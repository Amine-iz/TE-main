import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTeisComponent } from './import-teis.component';

describe('ImportTeisComponent', () => {
  let component: ImportTeisComponent;
  let fixture: ComponentFixture<ImportTeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportTeisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportTeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
