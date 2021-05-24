import { Component } from '@angular/core';

import { InventaryDTO } from '../model/inventaryDTO'

@Component({
    selector : 'app-inventary',
    templateUrl: 'inventary.component.html'
})

export class InventaryComponent {
        result :string[]=[];
        count:number=0;
        inventaryNames:string[]=["4","2","5","6"];
        invetaryList:InventaryDTO[]=[];
        
        invetaryName:string="";
        private storage =window.localStorage;
        constructor(){    
        }

        getAll():any{
         for(let i=0,count=this.storage.length;i<count;i++){
          let a = this.storage.key(i) ||''; 
          let rawData = this.storage.getItem(a) || '', inv = JSON.parse(rawData); 
          this.result.push(inv);
         }
           return this.result;
        }
        addInventary():number{
            return ++this.count;
        }
        addItem(name:string):InventaryDTO {
            this.storage.clear;
            const inventaryDTO:InventaryDTO={
            id :++this.count,
            inventaryname:name,
            date :new Date()   
        };
        this.invetaryList.push(inventaryDTO);
        this.storage.setItem(`${inventaryDTO.id}`, JSON.stringify(inventaryDTO));
        return inventaryDTO;  
    }

   
}