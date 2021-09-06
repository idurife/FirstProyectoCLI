import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './table-styles.scss';
import view from './view';


createCustomElement('x-652573-now-experience-table', {
    renderer: {type: snabbdom},
    view,
    properties: {
        dataColumns: {
            default: []
        },
        dataRows: {
            default: []
        }
    },
    styles
});