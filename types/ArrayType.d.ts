import type { Mixed, OutputOf, TypeOf } from '../types';
import Type from '../helpers/Type';
declare class ArrayType<Of extends Mixed> extends Type<TypeOf<Of>[], OutputOf<Of>[], unknown> {
    readonly of: Of;
    constructor(of: Of);
}
export default ArrayType;
