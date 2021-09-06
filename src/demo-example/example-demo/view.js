import '@servicenow/now-button';
export default (state, {updateState}) => {
	const {tally} = state;
	return (
		<div>
		<h2>Welcome to PandaTech!!!</h2>
		<now-button label="Click me" variant="primary" size="md"></now-button>
	</div>	
	);
};
