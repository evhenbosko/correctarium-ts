export const price = (
  language: string,
  type: string,
  count: number
): number => {
  let normHour: number = 0;
  let fileType: number = 0;
  if (type === "інший") {
    fileType = 1.2;
  } else {
    fileType = 1;
  }
  if (language === "English") {
    normHour = 0.12;
  } else {
    normHour = 0.05;
  }
  if (count <= 1000 || count < 0) {
    count = 1000;
  }
  let totalPrice = normHour * fileType * count;
  return totalPrice;
};
