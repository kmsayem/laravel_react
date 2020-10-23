import { Button } from 'antd';
import { Buttons, ButtonsGroup } from './styles/button.style';
import WithDirection from '@/settings/withDirection';

const AntButton = Buttons(Button);
const antButtons = WithDirection(AntButton);
const AntButtonGroup = ButtonsGroup(Button.Group);
const ButtonGroup = WithDirection(AntButtonGroup);

export default antButtons;
export { ButtonGroup };
