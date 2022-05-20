import { formatDate } from "@angular/common";
import { environment } from 'src/environments/environment';

export class ConsoleHelper {
    public static log(message: string, value: any) {
        if (!environment.production) {
            const timestamp = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss a', 'en-US');
            console.log(timestamp + ' -', message, value);
        }
    }
}

export function keyDeletor(target, key): Array<any> {
    let indexToBeDeleted = key.indexOf(target);
    if (indexToBeDeleted !== -1) {
      key.splice(indexToBeDeleted, 1);
      return key;
    } else {
      return key;
    }
  }


