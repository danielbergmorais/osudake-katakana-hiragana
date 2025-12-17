import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CaracteresPage } from './caracteres.page';

describe('CaracteresPage', () => {
  let component: CaracteresPage;
  let fixture: ComponentFixture<CaracteresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaracteresPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CaracteresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
