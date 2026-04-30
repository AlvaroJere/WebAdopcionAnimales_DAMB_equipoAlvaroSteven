import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerseSocioComponent } from './hacerse-socio.component';

describe('HacerseSocioComponent', () => {
  let component: HacerseSocioComponent;
  let fixture: ComponentFixture<HacerseSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HacerseSocioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HacerseSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
