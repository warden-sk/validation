import type { Mixed, TypeOf } from '../types';
import Type from '../helpers/Type';
declare type IntersectionTypeC<Of extends [Mixed, Mixed, ...Mixed[]]> = Of extends {
    length: 1;
} ? TypeOf<Of[0]> : Of extends {
    length: 2;
} ? TypeOf<Of[0]> & TypeOf<Of[1]> : Of extends {
    length: 3;
} ? TypeOf<Of[0]> & TypeOf<Of[1]> & TypeOf<Of[2]> : Of extends {
    length: 4;
} ? TypeOf<Of[0]> & TypeOf<Of[1]> & TypeOf<Of[2]> & TypeOf<Of[3]> : unknown;
declare class IntersectionType<Of extends [Mixed, Mixed, ...Mixed[]]> extends Type<IntersectionTypeC<Of>> {
    readonly of: Of;
    constructor(of: Of);
}
export default IntersectionType;
