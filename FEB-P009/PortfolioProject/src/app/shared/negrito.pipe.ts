import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'negrito'
})
export class NegritoPipe implements PipeTransform {

  transform(value: string, param: string): unknown {
    if (!value) {
      return '';
    }

    const words = value.split(' ');
    const highlightedWords = words.map(word => {
      if (word.toLowerCase().includes(param)) {
        return `<b>${word}</b>`;
      }
      return word;
    });

    return highlightedWords.join(' ');
  }
}
