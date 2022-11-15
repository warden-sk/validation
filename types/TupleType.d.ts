import type { TypeOf } from '../types';
import Type from '../helpers/Type';
declare type TupleTypeC<Of extends [Type<any>, ...Type<any>[]]> = Of extends {
    length: 1;
} ? [TypeOf<Of[0]>] : Of extends {
    length: 2;
} ? [TypeOf<Of[0]>, TypeOf<Of[1]>] : Of extends {
    length: 3;
} ? [TypeOf<Of[0]>, TypeOf<Of[1]>, TypeOf<Of[2]>] : Of extends {
    length: 4;
} ? [TypeOf<Of[0]>, TypeOf<Of[1]>, TypeOf<Of[2]>, TypeOf<Of[3]>] : unknown;
declare class TupleType<Of extends [Type<any>, ...Type<any>[]]> extends Type<TupleTypeC<Of>> {
    readonly of: Of;
    constructor(of: Of);
}
export default TupleType;