import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'controlErrorMessage'
})
export class ControlErrorMessagePipe implements PipeTransform {

  transform(error: { key: string, value: any }, ...args: unknown[]): unknown {
    const errorMessages: Record<string, string> = {
      required: 'Este campo es requerido',
      minlength: 'El largo no cumple con el requerido',
      min: 'la nota minima es 1',
      max: 'la nota maxima es 10',
    };

    return errorMessages[error.key] || 'Campo invalido';
  }

}
