import { Select } from 'antd';
import { AntSelect } from './styles/select.style';
import WithDirection from '@/settings/withDirection';

const WDSelect = AntSelect(Select);
const antSelect = WithDirection(WDSelect);
const SelectOption = Select.Option;

export default antSelect;
export { SelectOption };
