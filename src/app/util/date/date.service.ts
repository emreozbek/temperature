import { Injectable } from '@angular/core';

@Injectable()
export class DateUtilService {
  public UTCSecondsToDate(date: number): Date {
    const newDate = new Date(0);
    newDate.setUTCSeconds(date);
    return newDate;
  }
}

