import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectListComponent } from './multi-select-list.component';

describe('MultiSelectListComponent', () => {
  let component: MultiSelectListComponent;
  let fixture: ComponentFixture<MultiSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiSelectListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
