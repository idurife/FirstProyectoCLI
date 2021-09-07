import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import style from './style.scss';
import view from './view';

createCustomElement('x-652573-example-search', {
	renderer: {type: snabbdom},
	view,
	initialState: {
		searchString:''
	},
	styles: style
});
