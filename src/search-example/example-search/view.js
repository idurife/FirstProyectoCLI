import '@servicenow/now-card';
import '@servicenow/now-input';
import '@servicenow/now-icon';
import '@servicenow/now-heading'
import '../example-search result'

export default (state, helpers) => {
	const { searchString } = state;
	const { updateState } = helpers;
	const triggerSearch = ({ target: { value } }) => {
		
		const searchString = value.trim();

		if (searchValue === searchString) {
			return;
		} else if (searchValue) {
			dispatch(SEARCH_REQUESTED, { searchString: searchValue });
		} else {
			updateState({
				searchString: searchValue,
				result: []
			});
		}
	};
	return (
		<div className="container">

			<div className="row">
				<div className="col-md-12">
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							placeholder="Search this blog"
							value={searchString}
							on-input={e => updateState({ searchString: e.target.value })}
						></input>
						<div className="input-group-append">
							<button className="btn btn-secondary" type="button">
								<now-icon slot="identifier" icon="magnifying-glass-outline" />
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-12 now-agent-assist">
					<x-652573-example-search-result searchString={searchString}></x-652573-example-search-result>
				</div>
			</div>
		</div>
	)
};