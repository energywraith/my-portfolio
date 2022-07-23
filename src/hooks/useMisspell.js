import { useMemo } from 'react';

const useMisspell = (string) => {
  const getRandomNumberInRange = (min, max) => Math.ceil(Math.random() * (max - min) + min);

  const [misspelled, rest] = useMemo(() => {
    const slicePosition = getRandomNumberInRange(1, string.length - 1);

    return [`${string.slice(0, slicePosition)}bd`, string.slice(slicePosition, string.length)];
  }, [string]);

  return [misspelled, rest];
};

export default useMisspell;
