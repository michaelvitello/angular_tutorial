import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitleCase'
})

export class CustomTitleCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) return null;

    return value.split(' ').map((word, index) => index && this.isPreposition(word) ? word.toLowerCase() : this.toTitleCase(word)).join(' ');

    private toTitleCase(word: string): string {
      return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }

    private isPreposition(word: string): boolean {
      let prepositions = [
        'of',
        'the'
      ];

      return prepositions.includes(word.toLowerCase());
    }
  }
