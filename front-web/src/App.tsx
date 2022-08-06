import { useState } from 'react';
import { FilterData } from './types';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDateComponent from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import SalesTable from './components/sales-table';

import './App.css';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };
  return (
    <div className="App">
      <>
        <Header />
        <div className="app-container">
          <Filter onFilterChange={onFilterChange} />
          <SalesByDateComponent filterData={filterData} />
          <div className="sales-overview-container">
            <SalesSummary filterData={filterData} />
            <PieChartCard
              name="Lojas"
              labels={['Quebec', 'Motreal', 'Trois-Rivières']}
              series={[40, 30, 30]}
            />
            <PieChartCard
              name="Pagamento"
              labels={['Crédito', 'Débito', 'Dinheiro']}
              series={[20, 50, 30]}
            />
          </div>
          <SalesTable />
        </div>
      </>
    </div>
  );
}

export default App;
