import defaultTheme from './themedefault';
import clone from 'clone';

const theme = clone(defaultTheme);
theme.palette.primary = ['#00AEC2'];
theme.palette.secondary = ['#2d3446'];
export default theme;
