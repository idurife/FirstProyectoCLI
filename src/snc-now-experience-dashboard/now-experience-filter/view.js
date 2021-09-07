import '@servicenow/now-button';

export default (state, helpers) => {

    const { dispatch } = helpers;
    const { query } = state;
    
    return (
        <div className="filter-container">
        <div className="input-input-container">
            <input 
                className="input -lg" 
                value={query} 
                on-input={(e) => {
                    dispatch('FILTER_CHANGED', {
                        value: e.target.value
                    });
                }} 
            ></input>
            <now-button 
                label="Run Query"
                size="sm"
                variant="tertiary"
                append-to-payload={{"type": "run"}}
            ></now-button>
            <now-button
                label="Clear Query" 
                size="sm"
                variant="tertiary"
                append-to-payload={{"type": "clear"}}
            ></now-button>
        </div>
    </div>
    )
};