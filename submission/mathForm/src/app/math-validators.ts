import { AbstractControl } from '@angular/forms';

export class MathValidators {
    static addition(target: string, sourceOne: string, sourceTwo: string) {
        return (form: AbstractControl) => {
            const sum = form.value[target];
            const firstAnswer = form.value[sourceOne];
            const secondAnswer = form.value[sourceTwo];
            if (firstAnswer + secondAnswer === parseInt(sum)) {
                return null;
            }
            return { addition: true };
        }

    }
}