import '@servicenow/now-label-value';
import '@servicenow/now-heading';

export default (state, helpers) => {
    const { label, properties } = state;
    const { items } = properties;
     return (
     
          <div classname="card-container">
                <div className="card">
                    <now-heading label={label} level="6" variant="title-secondary" />
                    <now-label-value-stacked size="sm" items={items} />
                </div>
            </div>
    
)
};