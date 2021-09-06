import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import style from './propsdemo.scss';
import view from './view';
import listActions from './actions';
createCustomElement('x-652573-example-props', {
	renderer: { type: snabbdom },
	view,
	initialState: {
		tally: 0
	},
	styles: style,
	...listActions
});
