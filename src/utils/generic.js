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

export const time = {
  generateHours: (startHour, endHour, startMinutes = 0, endMinutes = 60) => {
    const times = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      for (
        let minutes = hour === startHour ? startMinutes : 0;
        minutes < endMinutes;
        minutes += 15
      ) {
        if (hour === endHour && minutes > 30) break;
        times.push(`${hour}:${minutes.toString().padStart(2, "0")}`);
      }
    }
    return times;
  },
};

export const date = {
  format: (date) => {
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
  },
};
