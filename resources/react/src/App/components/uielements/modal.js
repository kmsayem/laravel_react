import { Modal } from 'antd';
import ModalWrapper from './styles/modal.style';
import WithDirection from '@/settings/withDirection';

const WDStyledModal = ModalWrapper(Modal);
const StyledModal = WithDirection(WDStyledModal);

export default StyledModal;
