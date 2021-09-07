import {actionTypes} from '@servicenow/ui-core'
import {createHttpEffect} from '@servicenow/ui-effect-http';
import {debounce} from 'lodash'
const requestSearchResults=({properties,dispatch})=>{
	
	if(properties.searchString){
		const sysparm_query = `short_descriptionLIKE${properties.searchString}^ORtextLIKE${properties.searchString}`;
		dispatch('SEARCH_RESULTS_REQUESTS', {
			table: 'kb_knowledge',
			sysparm_query,
			sysparm_limit: '220'
		});
	};
	}


export default {
     actionHandlers: {
     [actionTypes.COMPONENT_CONNECTED]: requestSearchResults,
	 [actionTypes.COMPONENT_PROPERTY_CHANGED]: debounce(
		 requestSearchResults,
		250),
     SEARCH_RESULTS_REQUESTS:createHttpEffect('/api/now/table/:table', {
		pathParams: ['table'],
		queryParams: ['sysparm_query'],
		startActionType: 'KB_KNOWLEDGE_FETCH_STARTED',
		successActionType: 'KB_KNOWLEDGE_FETCH_SUCCESS',
		errorActionType: 'KB_KNOWLEDGE_FETCH_FAILED'
	}),
    KB_KNOWLEDGE_FETCH_STARTED: ({updateState}) => {
		updateState({showLoading: true});
	},
    KB_KNOWLEDGE_FETCH_SUCCESS: ({action, updateState}) => {
		
		const {
			payload: {result = []}
		} = action;
		updateState({
			showLoading: false,
			searchResults:result
		});
	},
    KB_KNOWLEDGE_FETCH_FAILED: ({action, updateState}) => {
		const {
			type,
			payload: {
				statusText,
				data: {
					error: {message}
				}
			}
		} = action;
		console.error(`[${type}] ${statusText}: ${message}!`); // eslint-disable-line no-console
		updateState({showLoading: false, searchResults: []});
	},
	'NOW_MODAL#OPENED_SET': ({action, updateState, dispatch, state}) => {
		
	//	updateState({showLoading: false,selectedResult:state.selectedResult});
		updateState({flag:false})
	},
	'KB_KNOWLEDGE_CLICKED': ({action, updateState, dispatch, state}) => {
		
		const {
			payload: {selectedResult}
		} = action;	
		// const {
		// 	payload: {itemId}
		// } = action;
		// updateState({
		// 	items: state.items.filter(item => item.itemId !== itemId)
		// });
		updateState({ selectedResult})
		updateState({flag:true})
	//	dispatch(DELETE_ITEM_REQUESTED, {id: itemId});
	},
     }
}