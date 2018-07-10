import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatIconModule, MatListModule, MatSelectModule} from '@angular/material';

import { HistoryListComponent } from './history-list.component';
import {CitiesService} from '../../service/cities/cities.service';

describe('HistoryListComponent', () => {
  let component: HistoryListComponent;
  let fixture: ComponentFixture<HistoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryListComponent ],
      imports: [BrowserAnimationsModule, MatFormFieldModule, MatSelectModule, MatIconModule, MatListModule],
      providers: [CitiesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
