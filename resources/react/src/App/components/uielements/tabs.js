import { Tabs } from 'antd';
import AntTab from './styles/tab.style';
import WithDirection from '@/settings/withDirection';

const WDTabs = AntTab(Tabs);
const TabPane = Tabs.TabPane;
const antTabs = WithDirection(WDTabs);

export default antTabs;
export { TabPane };
