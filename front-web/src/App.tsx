import { useEffect, useMemo, useState } from 'react';
import { FilterData, PieChartConfig, SalesByPaymentMehod, SalesByStore } from './types';
import { buildFilterParams, makeRequest } from './utils/requests';
import { buildSalesByPaymentMethodChart, buildSalesByStoreChart } from './helpers';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDateComponent from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import SalesTable from './components/sales-table';

import './App.css';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByStore, setSalesByStore] = useState<PieChartConfig>();
  const [salesByPaymentMethod, setSalesByPaymentMethod] = useState<PieChartConfig>();
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);
  useEffect(() => {
    makeRequest
      .get<SalesByStore[]>('/sales/by-store', { params })
      .then((response) => {
        const newSalesByStore = buildSalesByStoreChart(response.data);
        setSalesByStore(newSalesByStore);
      })
      .catch(() => {
        console.log('Fail to fetch /sales/by-store');
      });
  }, [params]);
  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };
  useEffect(() => {
    makeRequest
      .get<SalesByPaymentMehod[]>('/sales/by-payment-method', { params })
      .then((response) => {
        const newSalesByPaymentMehod = buildSalesByPaymentMethodChart(response.data);
        setSalesByPaymentMethod(newSalesByPaymentMehod);
      })
      .catch(() => {
        console.log('Fail to fetch /sales/by-payment-method');
      });
  }, [params]);

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
              labels={salesByStore?.labels}
              series={salesByStore?.series}
            />
            <PieChartCard
              name="Pagamento"
              labels={salesByPaymentMethod?.labels}
              series={salesByPaymentMethod?.series}
            />
          </div>
          <SalesTable />
        </div>
      </>
    </div>
  );
}

export default App;
