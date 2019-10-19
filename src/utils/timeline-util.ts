const monthRegEx = /^[0-9]{2}/g;
const yearRegEx = /(20)\d{2}/g;

class TimeLineUtil {
  static getYearFromDateString(year: string): number {
    return parseInt(year.match(yearRegEx)[0]);
  }

  static getMonthFromDateString(month: string): number {
    return parseInt(month.match(monthRegEx)[0]);
  }

  static calculateAmountOfTotalMonths = (
    startTimeLine: string,
    endTimeLine: string
  ): number => {
    const startYear = TimeLineUtil.getYearFromDateString(startTimeLine);
    const startMonth = TimeLineUtil.getMonthFromDateString(startTimeLine);
    const endYear = TimeLineUtil.getYearFromDateString(endTimeLine);
    const endMonth = TimeLineUtil.getMonthFromDateString(endTimeLine);
    return (endYear - startYear) * 12 - startMonth + endMonth;
  };
}

export default TimeLineUtil;
