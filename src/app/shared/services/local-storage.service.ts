import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  saveData(key: string, data: Object | any[]) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: string): string | Object | any[] | null {
    const data = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }

    return null;
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }
}
