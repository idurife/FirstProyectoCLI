import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import style from './demo.scss';
import view from './view';

createCustomElement('x-652573-example-demo', {
	renderer: {type: snabbdom},
	view,
	initialState: {
		tally: 0
	},
	styles: style
});
