import '@servicenow/now-card';
import '@servicenow/now-button';
import '@servicenow/now-input';
import '@servicenow/now-modal';
import '@servicenow/now-icon';
import '@servicenow/now-heading';
import '@servicenow/now-loader';
import '@servicenow/now-label-value';
import '@servicenow/now-rich-text';
import Fragment from '@servicenow/ui-renderer-snabbdom/lib/fragment';


export default (state, helpers) => {

	const { searchString } = state.properties;
	const { selectedResult, flag } = state;
	const { updateState, dispatch } = helpers;

	return (


		<now-card size="md" interaction="none" sidebar={{ "color": "positive", "variant": "primary" }} className="border-card">
			{state.showLoading ?
				(<now-loader />) : (
					<main>
						<now-card-header
							heading={{ "label": "Search results for " + searchString + " here!!", "size": "sm", "lines": 2, "level": 2, "variant": "primary" }}
							dropdowns={[{
								"id": "dropdown1", "items": [{ "id": "dropdownItem1", "label": "Action One" },
								{ "id": "dropdownItem2", "label": "Action Two" }], "icon": "ellipsis-v-outline", "label": "More actions"
							}]}
							actions={[{ "id": "action1", "icon": "download-outline", "label": "Download" }]}>

						</now-card-header>
						<now-card-divider full-width></now-card-divider>
						<Fragment>
							{state.searchResults.length ? (

								state.searchResults.map(result => (

									<summary>

										<now-button-iconic
											bare
											icon="circle-info-outline"
											size="md"
											tooltipContent="Settings"
											// on-click={() => updateState({ selectedResult: result })}
											on-click={() => {
												dispatch("KB_KNOWLEDGE_CLICKED", { selectedResult: result });
											}}
										>

										</now-button-iconic>
										{result.short_description}
									</summary>
								))
							) : (
								<span className="no-response-found">
									<now-heading label="No se econtró  resultados" variant="title-tertiary" />
									<now-label-value-inline label="Try modifying your search text or filter to find what you\'re looking for" />
								</span>
							)}

						</Fragment>

						<now-card-divider full-width></now-card-divider>
						<now-card-footer split="unequal">
							<now-highlighted-value slot="start" label="Start Label" status="high" show-icon />
							<now-highlighted-value slot="end" label="End Label" status="high" show-icon />
						</now-card-footer>

					</main>
				)}

			{flag ? (

				<now-modal
					opened={flag}
					size="lg"
					header-label={selectedResult.number}
					contentFullWidth={false}

					footerActions={[
						{
							label: 'Done',
							variant: 'primary',
							clickActionType: 'NOW_MODAL#OPENED_SET'
						}

					]}
				>
					<now-rich-text html={selectedResult.text} hasNoMargin={true} ></now-rich-text>
				</now-modal>
			) : null}
		</now-card>
	)



};