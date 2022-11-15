import Type from '../../helpers/Type';
declare class StringType extends Type<string> {
    readonly $: {
        pattern?: RegExp;
    };
    constructor($?: {
        pattern?: RegExp;
    });
}
export default StringType;
