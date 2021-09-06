import { actionTypes } from '@servicenow/ui-core'
import { createHttpEffect } from '@servicenow/ui-effect-http';
export default {
    actionHandlers: {
        'FILTER_CHANGED': ({ action, updateState }) => {
            const { value } = action.payload;
debugger;
            updateState({
                query: value
            });
        },
        'NOW_BUTTON#CLICKED': ({ action, dispatch, state, updateState }) => {
            const { type } = action.payload;
            const query = type === "clear" ? '' : state.query;
            debugger;
            updateState({ query });
            dispatch('NOW_EXPERIENCE_FILTER#CHANGED', { query });
        }
    }
}