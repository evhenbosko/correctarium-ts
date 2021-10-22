import { deadline } from "../logic/deadlineLogic";
import { price } from "../logic/priceLogic";

describe("testing functions", () => {
  test("price calculated ua cost with unknown format", () => {
    let testedLength = 12390;
    let testedLanguage = "Українська";
    let testedFormat = "інший";
    let functionPriceCalculation = price(
      testedLanguage,
      testedFormat,
      testedLength
    );
    expect(functionPriceCalculation).toBe(743.4);
  });
  test("price calculated eng cost with usual format", () => {
    let testedLength = 1;
    let testedLanguage = "English";
    let testedFormat = ".txt";
    let functionPriceCalculation = price(
      testedLanguage,
      testedFormat,
      testedLength
    );
    expect(functionPriceCalculation).toBe(120);
  });
  test("time 0 , rus ,type other, 10000 syblols calculation", () => {
    let time = 0;
    let testedLength = 10000;
    let testedLanguage = "Російська";
    let testedFormat = "інший";
    let functionDeadlinecalculation = deadline(
      time,
      testedLanguage,
      testedFormat,
      testedLength
    );
    expect(functionDeadlinecalculation).toBe("02 Jan 1970 : Fri : 10:37:08");
  });
  test("time 0, eng,type other,1 symbol calculation", () => {
    let time = 0;
    let testedLength = 1;
    let testedLanguage = "English";
    let testedFormat = "інший";
    let functionDeadlinecalculation = deadline(
      time,
      testedLanguage,
      testedFormat,
      testedLength
    );
    expect(functionDeadlinecalculation).toBe("01 Jan 1970 : Thu : 11:01:00");
  });
  test("time 0, eng,type txt,1234567 symbol calculation", () => {
    let time = 0;
    let testedLength = 1234567;
    let testedLanguage = "English";
    let testedFormat = "txt";
    let functionDeadlinecalculation = deadline(
      time,
      testedLanguage,
      testedFormat,
      testedLength
    );
    expect(functionDeadlinecalculation).toBe("30 Jul 1971 : Fri : 18:55:30");
  });

  test("time 1627394624496, eng,type txt,1234567 symbol calculation", () => {
    let time = 1627394624496;
    let testedLength = 12345;
    let testedLanguage = "English";
    let testedFormat = "txt";
    let functionDeadlinecalculation = deadline(
      time,
      testedLanguage,
      testedFormat,
      testedLength
    );
    expect(functionDeadlinecalculation).toBe("02 Aug 2021 : Mon : 18:38:03");
  });
 
});
