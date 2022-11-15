import type { Mixed, OutputOf, TypeOf } from '../types';
import Type from '../helpers/Type';
declare class UnionType<Of extends [Mixed, Mixed, ...Mixed[]]> extends Type<TypeOf<Of[number]>, OutputOf<Of[number]>, unknown> {
    readonly of: Of;
    constructor(of: Of);
}
export default UnionType;
