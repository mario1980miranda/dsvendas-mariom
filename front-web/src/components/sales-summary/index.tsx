import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';

import './styles.css';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={430} label="Média" icon={<DoneIcon />} />
      <SalesSummaryCard value={300} label="Média" icon={<SyncIcon />} />
      <SalesSummaryCard value={520} label="Média" icon={<BarChartIcon />} />
      <SalesSummaryCard value={832} label="Média" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
