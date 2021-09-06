import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import style from './styles.scss';
import view from './view';
import listactions from './actions';


createCustomElement('x-652573-experience-dashboard', {
    renderer: {type: snabbdom},
    view,
    styles: style,
    ...listactions
});