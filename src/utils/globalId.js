import base64 from 'base-64';

export const toGlobalId = ({ type, id }) =>
  base64.encode(`${type}:${id}:${process.env.RBB_SECRET}`);

export const fromGlobalId = globalID => {
  const [type, id] = base64.decode(globalID).split(':');

  return { type, id };
};
