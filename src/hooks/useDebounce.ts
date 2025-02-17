import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number) => {
  const [returnValue, setValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);

  return returnValue;
};
