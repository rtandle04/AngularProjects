import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'inventarysort'
})

export class inventarysortpipe implements PipeTransform{

    transform(value: string[], ...args: any[]) :string[] {

        throw new Error('Method not implemented.');
        return value;
    }

}