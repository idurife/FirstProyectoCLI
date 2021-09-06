import '@servicenow/now-heading';

export default (state, helpers) => {
    const {
        visualizations,
        chartPadding,
        chartWidth,
        chartHeight,
        barWidth,
        barPadding,
        title
    } = state.properties;
    debugger;
    const totalHeight = chartHeight + 30;
     return (
        <div className="bar-container">
        <now-heading
            label={title}
            level="5"
            variant="title-tertiary"
        ></now-heading>
        <svg attrs={{
                width: chartWidth,
                height: totalHeight,
                class: "bar-chart"
        }}>
            {visualizations.map((val, i) => {
                const { count } = val;
                const height = count * 5;
                const x = chartPadding + i * (barWidth + barPadding);

                return (
                    <g>
                        <rect attrs={{
                            x: x,
                            y: chartHeight - height,
                            class: "bar",
                            fill: "rgb(255, 64, 44)",
                            width: barWidth,
                            height: height
                        }}></rect>
                        <text attrs={{x: x, y: chartHeight}}>
                            <tspan attrs={{dy: "1.5rem"}}>
                                {val.label}
                            </tspan>
                        </text>
                    </g>
                )
            })}
        </svg>
    </div>
)
};