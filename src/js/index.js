import createMenu from './menu';
import '../styles/styles.scss';
let menu = createMenu(['Главная','Обо мне','Портфолио'], 'menu');
document.body.appendChild(menu);