export const deadline = (
  timenow: number,
  language: string,
  type: string,
  count: number
): string => {
  let normHour: number = 0;
  let fileType: number = 0;
  if (type === "інший") {
    fileType = 1.2;
  } else {
    fileType = 1;
  }
  if (language === "English") {
    normHour = 333;
  } else {
    normHour = 1333;
  }
  let result;

  //время на выполнение (без учета не рабочих часов)
  result = ((count / normHour) * 60 * 60 * 1000 + 1800000) * fileType;
  // если меньше часа , делаем час
  if (result <= 3600000) {
    result = 3600000;
  }
  // текущая дата
  let sec = timenow;
  let dat = String(new Date(sec)).split(" ");
  // цыкл перебора времени  (ЕСЛИ МИНУТА "НЕ РАБОЧАЯ" ДОБАВЛЯЕМ ЕЕ К ВРЕМЕНИ ВЫПОЛНЕНИЯ ПОКА СЧЕТЧИК НЕ СТАНЕТ РАВЕН ВРЕМЕНИ ВЫПОЛНЕНИЯ)
  for (let i = 0; i <= result; i += 60000) {
    if (
      dat[0] === "Sat" ||
      dat[0] === "Sun" ||
      Number(dat[4].split(":")[0]) <= 9 ||
      Number(dat[4].split(":")[0]) >= 19
    ) {
      result += 60000;
    }
    // Cледующая минута
    dat = dat = String(new Date(sec + i)).split(" ");
  }
  let fulltime = String(new Date(sec + result)).split(" ");
  // заносим результат в стейт в удобном
  let deadline =
    fulltime[2] +
    " " +
    fulltime[1] +
    " " +
    fulltime[3] +
    " : " +
    fulltime[0] +
    " : " +
    fulltime[4];

  return deadline;
};
