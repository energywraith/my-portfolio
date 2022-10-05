import { useMemo } from 'react';
import getRandomNumberInRange from 'utils/getRandomNumberInRange';

const useMisspell = (string) => [...useMemo(() => {
  const slicePosition = getRandomNumberInRange(1, string.length - 1);

  return [`${string.slice(0, slicePosition)}bd`, string.slice(slicePosition, string.length)];
}, [string])];

export default useMisspell;
