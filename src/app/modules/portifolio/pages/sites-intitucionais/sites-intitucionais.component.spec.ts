import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesIntitucionaisComponent } from './sites-intitucionais.component';

describe('SitesIntitucionaisComponent', () => {
  let component: SitesIntitucionaisComponent;
  let fixture: ComponentFixture<SitesIntitucionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SitesIntitucionaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SitesIntitucionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
