import '@servicenow/now-button';
export default (state, { updateState }) => {
	
	return (
		<div>
			<h2>Eventos UI Builder</h2>
			<now-button label="Fire Event" variant="secondary" size="md" icon="fire-fill" configAria={{ "button": { "aria-label": "" } }} tooltipContent="Fire an event"></now-button>
		</div>
	);
};
