import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddProductModalComponent } from './edit-add-product-modal.component';

describe('EditAddProductModalComponent', () => {
  let component: EditAddProductModalComponent;
  let fixture: ComponentFixture<EditAddProductModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAddProductModalComponent]
    });
    fixture = TestBed.createComponent(EditAddProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
