import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { FilterData, SalesSummaryData } from '../../types';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/requests';

import './styles.css';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  min: 0,
  max: 0,
  avg: 0,
  count: 0
};

function SalesSummary({ filterData }: Props) {
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);
  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.log('Error to fetch sales-by=date');
      });
  }, [params]);
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={summary?.avg.toFixed(2)} label="Média" icon={<DoneIcon />} />
      <SalesSummaryCard value={summary?.count} label="Média" icon={<SyncIcon />} />
      <SalesSummaryCard value={summary?.min} label="Média" icon={<BarChartIcon />} />
      <SalesSummaryCard value={summary?.max} label="Média" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
