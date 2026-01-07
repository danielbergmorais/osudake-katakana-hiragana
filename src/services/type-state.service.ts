import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TypeStateService {

    private readonly STORAGE_KEY = 'type';

    private typeSubject = new BehaviorSubject<string>(
        localStorage.getItem(this.STORAGE_KEY) ?? 'hiragana'
    );

    type$ = this.typeSubject.asObservable();

    setType(type: string) {
        this.typeSubject.next(type);
        localStorage.setItem(this.STORAGE_KEY, type);
    }

    getType(): string {
        return this.typeSubject.value;
    }
}
