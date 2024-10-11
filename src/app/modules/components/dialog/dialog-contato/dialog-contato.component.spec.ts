import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContatoComponent } from './dialog-contato.component';

describe('DialogContatoComponent', () => {
  let component: DialogContatoComponent;
  let fixture: ComponentFixture<DialogContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogContatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
