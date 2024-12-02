import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarcodeScanningPage } from './barcode-scanning.page';

describe('BarcodeScanningPage', () => {
  let component: BarcodeScanningPage;
  let fixture: ComponentFixture<BarcodeScanningPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeScanningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
