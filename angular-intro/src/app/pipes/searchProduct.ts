import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name:'search'
})

export class SearchProduct implements PipeTransform{
    transform(productNames : string[],myString: string, ...args: any[]) {
        console.log('search is started')
        let abc=productNames.filter(p=>p===myString);
        console.log('search is finished')
        return abc;
    }
    
}