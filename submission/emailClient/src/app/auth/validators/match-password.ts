import { Injectable } from "@angular/core";
import { FormGroup, Validator } from "@angular/forms";


@Injectable({
    providedIn: 'root'
})
export class MatchPassword implements Validator {
    validate(formGroup: FormGroup) {

        const { password, passwordConfirm } = formGroup.value
        if (password === passwordConfirm) {
            return null;
        } else {
            return { passwordsDontMatch: true }
        }
    }
}
