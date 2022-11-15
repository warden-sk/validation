import Type from '../helpers/Type';
declare class RegExpType extends Type<string> {
    readonly pattern: RegExp;
    constructor(pattern: RegExp);
}
export default RegExpType;
