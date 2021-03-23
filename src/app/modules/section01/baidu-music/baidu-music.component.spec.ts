import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiduMusicComponent } from './baidu-music.component';

describe('BaiduMusicComponent', () => {
  let component: BaiduMusicComponent;
  let fixture: ComponentFixture<BaiduMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiduMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiduMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
