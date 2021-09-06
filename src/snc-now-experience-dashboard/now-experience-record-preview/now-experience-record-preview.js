import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view';
import listActions from './actions';
import styles from './record-preview-styles.scss';

createCustomElement('x-652573-now-experience-record-preview', {
    renderer: {type: snabbdom},
    view,
    styles,
    initialState: {
        label: 'Please select a record'
    },
    transformState: (state) => {
        const { recordTitle, recordDetails } = state.properties;
        if (!recordTitle) {
            return state;
        }

        return {
            ...state,
            label: `${recordTitle} - ${recordDetails}`
        }
    },
    properties: {
        items: {
            default: []
        },
        recordTitle: {
            default: ''
        },
        recordDetails: {
            default: ''
        }
    },
    ...listActions
});