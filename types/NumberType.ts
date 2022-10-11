import Type from '../Type';

class NumberType extends Type<number> {
  constructor() {
    super(
      'number',
      (input): input is number => typeof input === 'number',
      (input, context) => (this.is(input) ? r(input) : l(input, context))
    );
  }
}

export default NumberType;
