export const arr = {
  groupBy(array, key) {
    return array.reduce((acc, obj) => {
      const keyParts = key.split(".");

      const keyValue = keyParts.reduce((value, part) => {
        return value ? value[part] : undefined;
      }, obj);

      if (!acc[keyValue]) {
        acc[keyValue] = [];
      }

      acc[keyValue].push(obj);

      return acc;
    }, {});
  },
};
