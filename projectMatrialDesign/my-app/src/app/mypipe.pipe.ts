import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mypipe"
})
export class MypipePipe implements PipeTransform {
  transform(phonebook: any, term: any): any {
    if (term == undefined) {
      return phonebook;
    } else {
      return phonebook.filter(function(phonebook) {
        return phonebook.name.includes(term);
      });
    }
  }
}
