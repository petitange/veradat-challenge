const test = {
  2001: [
    {
      month: 'Enero',
      value: 10,
    },
    {
      month: 'Febrero',
      value: 9,
    },
  ],
};

class TableDate {
  years: any;
  months: Array<string>

  constructor() {
    this.years = {};
    this.months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
  }

  createYearData(year: number) {
    let monthValue: any = [];
    if (this.years[year]) {
      return;
    } else {
      this.years = { ...this.years, year };
      delete this.years.year
      this.months.
        map((month: string) => {
          monthValue.push({
            month,
            value: Math.floor(Math.random() * 10),
          });
        });
      this.years[year] = monthValue;
    }
  }

  generateYearData() {
    for (let i = 0; i < 10; i++) {
      this.createYearData(2000 + i);
    }

    return this.years;
  }
}

export default TableDate;
