import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import style from './style.scss';
import view from './view';
import listActions from './actions';

createCustomElement('x-652573-example-search-result', {
	renderer: { type: snabbdom },
	styles: style,
	view,
	initialState: {
		showLoading:true,
		searchResults:[],
		selectedResult:null,
		flag:false,
	},
	properties: {
		searchString: { default: 'something' }
	},
	
	...listActions
});
