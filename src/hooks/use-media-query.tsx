import { useEffect, useState } from "react";

export function useMediaQuery(query: any) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function onChange(event: any) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}
