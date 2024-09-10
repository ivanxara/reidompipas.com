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
  orderBy(array, key) {
    return array.sort((a, b) => {
      const getValue = (obj, path) => {
        return path.split(".").reduce((acc, part) => acc && acc[part], obj);
      };

      const aValue = getValue(a, key);
      const bValue = getValue(b, key);

      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    });
  },
};

export const date = {
  format: (date) => {
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
  },
  formatExtensive: (dateString) => {
    // Cria um objeto Date a partir da string de data
    const date = new Date(dateString);

    // Verifica se a data é válida
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }

    // Opções para obter o nome do dia da semana e do mês
    const dayOptions = { weekday: "long" };
    const monthOptions = { month: "long" };
    const day = date.toLocaleDateString("pt-PT", { day: "numeric" });
    const month = date.toLocaleDateString("pt-PT", monthOptions);
    const weekday = date.toLocaleDateString("pt-PT", dayOptions);

    // Formata a data no formato desejado
    return `${day} de ${month}, ${weekday}`;
  },
  getWeekDay: (dateString) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
  },
};

export const time = {
  generateHours: function ([startTime, endTime], interval = 30) {
    const [startHour, startMinutes] = startTime.split(":").map(Number);
    const [endHour, endMinutes] = endTime.split(":").map(Number);
    const times = [];

    for (let hour = startHour; hour <= endHour; hour++) {
      for (
        let minutes = hour === startHour ? startMinutes : 0;
        hour === endHour ? minutes <= endMinutes : minutes < 60;
        minutes += interval
      ) {
        times.push(`${hour}:${minutes.toString().padStart(2, "0")}`);
      }
    }

    return times;
  },

  getAvailableHours: (day) => {
    try {
      const schedule = {
        Monday: { lunch: ["12:00", "14:30"], dinner: [] },
        Tuesday: { lunch: ["12:00", "14:30"], dinner: [] },
        Wednesday: { lunch: ["12:00", "14:30"], dinner: [] },
        Thursday: { lunch: ["12:00", "14:30"], dinner: [] },
        Friday: { lunch: ["12:00", "14:30"], dinner: ["19:50", "23:00"] },
        Saturday: { lunch: ["12:00", "14:30"], dinner: ["19:50", "23:00"] },
        Sunday: { lunch: ["12:00", "14:30"], dinner: [] },
      };

      const weekDay = date.getWeekDay(day);
      const hours = schedule[weekDay];
      console.log({ hours });

      let availableHours = [];

      for (const mealType in hours) {
        if (hours[mealType].length === 2) {
          const [start, end] = hours[mealType];
          availableHours = availableHours.concat(
            time.generateHours([start, end])
          );
        }
      }

      return availableHours || [];
    } catch (err) {
      console.log(err);
      return [];
    }
  },
};
