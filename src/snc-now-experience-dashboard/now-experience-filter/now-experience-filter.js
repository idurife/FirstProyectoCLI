import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view';
import listactions from './actions';
import styles from './filter-styles.scss';

createCustomElement('x-652573-now-experience-filter', {
    renderer: { type: snabbdom },
    view,
    styles,
    initialState: {
        query: ''
    },
    properties: {},
    ...listactions
});