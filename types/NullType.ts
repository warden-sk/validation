import Type from '../Type';

class NullType extends Type<null> {
  constructor() {
    super(
      'null',
      (input): input is null => input === null,
      (input, context) => (this.is(input) ? r(input) : l(input, context))
    );
  }
}

export default NullType;
