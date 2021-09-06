import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view';
import listActions from './actions';
import styles from './styles.scss';

createCustomElement('x-652573-now-experience-bar-chart', {
    renderer: {type: snabbdom},
    view,
    styles,
    initialState: {},
    properties: {
        title: {
            default: ''
        },
        visualizations: {
            default: []
        },
        chartPadding: {
            default: 10
        },
        chartWidth: {
            default: 400
        },
        chartHeight: {
            default: 250
        },
        barWidth: {
            default: 40
        },
        barPadding: {
            default: 20
        }
    },
    ...listActions
});