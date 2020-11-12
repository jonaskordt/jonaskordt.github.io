const getOctant = (position: { x: number; y: number; z: number }) => {
  const { x, y, z } = position;

  let octant = 0;
  if (x > 0) octant |= 1;
  if (y > 0) octant |= 2;
  if (z > 0) octant |= 4;

  return octant;
};

export default getOctant;
