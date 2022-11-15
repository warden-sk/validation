import type { Any, TypeOf } from '../types';
import Type from '../helpers/Type';
declare class ArrayType<Of extends Any> extends Type<TypeOf<Of>[]> {
    readonly of: Of;
    constructor(of: Of);
}
export default ArrayType;
