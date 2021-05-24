import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name :'inventary'
})

export class Inventarypipe implements PipeTransform{

    transform(value: any, ...args: any[]) {
        return value+"Hi";
    }

}