import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesananPage } from './pesanan.page';

describe('PesananPage', () => {
  let component: PesananPage;
  let fixture: ComponentFixture<PesananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesananPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
