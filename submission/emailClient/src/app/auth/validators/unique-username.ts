import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AsyncValidator, FormControl } from "@angular/forms";
import { of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class UniqueUsername implements AsyncValidator {

    constructor(private http: HttpClient) { }

    validate = (control: FormControl) => {
        const { value } = control;
        return this.http.post<any>('https://api.angular-email.com/auth/username', {
            username: value
        })
            .pipe(
                map((value: any) => {
                    if (value.available) {
                        return null;
                    }
                }),
                catchError((err) => {
                    console.log(err)
                    return of({ nonUniqueUserName: true })
                })
            )
    }
}
