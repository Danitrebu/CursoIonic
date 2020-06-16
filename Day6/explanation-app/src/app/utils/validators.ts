import { AbstractControl } from '@angular/forms';

const temporalDomains = [
  '10minutesmail.com',
  'temporalmail.com',
  'preventspam.com'
  // ...
];

export const isNotTemporalEmailValidator = (control: AbstractControl) => {

  if (temporalDomains.some(d => control.value.endsWith(`@${d}`))) {
    return { isNotTemporalEmail: true };
  }
};
