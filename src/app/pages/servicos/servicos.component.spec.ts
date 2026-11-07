import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ServicosComponent } from './servicos.component';

describe('ServicosComponent', () => {
  let component: ServicosComponent;
  let fixture: ComponentFixture<ServicosComponent>;

  beforeAll(() => {
    // Garante que $ e $.fn.slick estejam definidos no ambiente de teste do Karma
    const win = window as any;
    if (typeof win.$ === 'undefined') {
      const mockJQuery: any = () => ({
        slick: () => {},
        on: () => {},
        off: () => {}
      });
      mockJQuery.fn = { slick: () => {} };
      win.$ = mockJQuery;
      win.jQuery = mockJQuery;
    } else {
      win.$.fn = win.$.fn || {};
      if (!win.$.fn.slick) {
        win.$.fn.slick = () => {};
      }
    }
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
