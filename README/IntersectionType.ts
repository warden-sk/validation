import * as t from '../';

const type = new t.IntersectionType([
  new t.InterfaceType({
    firstName: new t.StringType(),
  }),
  new t.InterfaceType({
    lastName: new t.StringType(),
  }),
]);

export default type;
