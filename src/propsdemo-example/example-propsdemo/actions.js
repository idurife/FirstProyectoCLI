import { actionTypes } from '@servicenow/ui-core';
import { createHttpEffect } from '@servicenow/ui-effect-http';
import {
	BUTTON_BTN_CLICKED,

} from './constants';

export default {
	actionHandlers: {
		[BUTTON_BTN_CLICKED]: ({ dispatch }) => {
			dispatch('EVENT_FIRED', {
				'event-payload': 'I cannot believe this worked'
			});
			
			console.log('I been clicked');

		}
	}
};
