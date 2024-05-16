import './App.css';
import TableDate from './model/createTableDates';
import {averageByMonth, getSumValuesPerYear} from './utils/operations';

function App() {
  const data = new TableDate().generateYearData()
  const averageArr = averageByMonth(data)
  const sumVal = getSumValuesPerYear(data)

  return (
    <div className="App">
      <table className="blueTable">
        <thead>
          <tr>
            <th>Año</th>
            <th>Enero</th>
            <th>Febrero</th>
            <th>Marzo</th>
            <th>Abril</th>
            <th>Mayo</th>
            <th>Junio</th>
            <th>Julio</th>
            <th>Agosto</th>
            <th>Septiembre</th>
            <th>Octubre</th>
            <th>Noviembre</th>
            <th>Diciembre</th>
            <th>Promedio</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((year, index) => (
            <tr key={year}>
              <td>{year}</td>
              {Object.keys(data[year]).map((month) => (
                <td key={month}>{data[year][month].value}</td>
              ))}
              <td>{sumVal[index].value}</td>
            </tr>
          ))}
          <tr>
            <td>Promedio Mensual</td>
            {averageArr.map((average:number) => (
              <td key={Math.random()}>{average}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
