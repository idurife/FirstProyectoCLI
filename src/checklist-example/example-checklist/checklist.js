import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view';
import styles from './checklist.scss';
import checklistActions from './actions';
import {FILTER} from '../constants';

createCustomElement('x-652573-example-checklist', {
	renderer: {type: snabbdom},
	view,
	styles,
	initialState: {
		inputValue: '',
		userSysId: '',
		items: [],
		isLoading: true
	},
	properties: {
		itemsLeft: {
		
			computed({items = []}) {
				
				return items.filter(item => !item.active).length;
			}
		},
		filter: {
			default: FILTER.ALL
		}
	},
	...checklistActions
	
	
});
