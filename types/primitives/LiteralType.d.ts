import Type from '../../helpers/Type';
declare class LiteralType<Of extends boolean | number | string> extends Type<Of> {
    readonly of: Of;
    constructor(of: Of);
}
export default LiteralType;
