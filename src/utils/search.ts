import Fuse from "fuse.js";

export const defaultSearch = <T extends {}>(
  data: T[],
  keys: Array<keyof T> | Array<{ name: keyof T; weight: number }> | keyof T,
  searchTerm: string | null | undefined
): T[] => {
  if (searchTerm && data.length) {
    const normalizedKeys = Array.isArray(keys) ? keys : [keys];

    const options: Fuse.FuseOptions<T> = {
      keys: normalizedKeys,
      threshold: 0.1,
      location: 0,
      distance: 2,
      maxPatternLength: 100,
      /** Allows for matching text in the middle of a string */
      tokenize: true,
      shouldSort: false,
      minMatchCharLength: 1
    };
    const fuse = new Fuse(data, options);
    const fuzzyList = fuse.search(searchTerm);

    return fuzzyList;
  } else {
    return data;
  }
};
