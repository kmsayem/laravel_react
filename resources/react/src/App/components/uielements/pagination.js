import { Pagination } from 'antd';
import AntPagination from './styles/pagination.style';
import WithDirection from '@/settings/withDirection';

const Paginations = AntPagination(Pagination);
const antPaginations = WithDirection(Paginations);

export default antPaginations;
