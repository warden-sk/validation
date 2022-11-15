import type { Any, TypeOf } from '../types';
import Type from '../helpers/Type';
declare class InterfaceType<Of extends {
    [key: string]: Any;
}> extends Type<{
    [Key in keyof Of]: TypeOf<Of[Key]>;
}> {
    readonly of: Of;
    constructor(of: Of);
}
export default InterfaceType;
