import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }
    // Promise didn't work, to be able to use this in future, you have to use httpClient to call backend
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'mosu') {
                    resolve({ shouldBeUnique: true });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
    }

}