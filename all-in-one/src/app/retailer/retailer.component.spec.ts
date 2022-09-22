import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerComponent } from './retailer.component';
import { RetailerService } from '../services/retailer.service';
import { ProductService } from '../services/product.service';

describe('RetailerComponent', () => {
  let component: RetailerComponent;
  let fixture: ComponentFixture<RetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetailerComponent],
      providers: [RetailerService, ProductService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
