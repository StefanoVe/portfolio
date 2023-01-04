import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsStripComponent } from './contacts-strip.component';

describe('ContactsStripComponent', () => {
  let component: ContactsStripComponent;
  let fixture: ComponentFixture<ContactsStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsStripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
