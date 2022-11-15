import type { Decoder, Encode, Encoder, Is, Validate, Validation, ValidationError } from '../types';
declare class Type<Type, Output = Type, Input = unknown> implements Decoder<Input, Type>, Encoder<Type, Output> {
    readonly name: string;
    readonly is: Is<Type>;
    readonly validate: Validate<Input, Type>;
    readonly encode: Encode<Type, Output>;
    readonly INPUT: Input;
    readonly OUTPUT: Output;
    readonly TYPE: Type;
    constructor(name: string, is: Is<Type>, validate: Validate<Input, Type>, encode: Encode<Type, Output>);
    decode: (input: Input) => Validation<Type>;
    left<Type>(errors: ValidationError[]): Validation<Type>;
    right<Type>(type: Type): Validation<Type>;
}
export default Type;
