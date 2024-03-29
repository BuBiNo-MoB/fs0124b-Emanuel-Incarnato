import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByusersComponent } from './byusers.component';

describe('ByusersComponent', () => {
  let component: ByusersComponent;
  let fixture: ComponentFixture<ByusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ByusersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
