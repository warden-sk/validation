import Type from '../Type';

class StringType extends Type<string> {
  constructor() {
    super(
      'string',
      (input): input is string => typeof input === 'string',
      (input, context) => (this.is(input) ? r(input) : l(input, context))
    );
  }
}

export default StringType;
