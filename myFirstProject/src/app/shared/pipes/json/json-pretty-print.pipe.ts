import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonPrettyPrint',
  pure: false
})
export class JsonPrettyPrintPipe implements PipeTransform {
  transform(value: any): string {
    const jsonLine: any = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/gm;
    return JSON.stringify(value, null, 3)
      .replace(/&/g, '&amp;')
      .replace(/\\"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(jsonLine, replacer);
  }
}
function replacer(match, pIndent, pKey, pVal, pEnd): string {
  const key = '<span class=json-key>';
  const val = '<span class=json-value>';
  const str = '<span class=json-string>';
  let r: string = pIndent || '';
  if (pKey) {
    r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
  }
  if (pVal) {
    r = r + (pVal[0] === '"' ? str : val) + pVal + '</span>';
  }
  return r + (pEnd || '');
}
