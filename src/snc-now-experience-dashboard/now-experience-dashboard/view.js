import '@servicenow/now-button';
import '../now-experience-table';
import '../now-experience-filter';
import '../now-experience-record-preview';
import '../now-experience-bar-chart'
import { columns, taskTables } from './default.js';

export default (state, helpers) => {
        const displayColumns = columns.filter((col) => {
                return col.field !== 'sys_id';
        });

        const {
                dataRows,
                recordTitle,
                recordDetails,
                items,
                chartData
        } = state;
        debugger;
        return (
                <div className="container">
                        <div className="panel-content">
                        <div className="chart">hola
                        <x-652573-now-experience-bar-chart visualizations={chartData}>
                        </x-652573-now-experience-bar-chart>
                    </div>
                                <x-652573-now-experience-record-preview
                                        items={items}
                                        recordTitle={recordTitle}
                                        recordDetails={recordDetails}
                                ></x-652573-now-experience-record-preview>
                        </div>
                        <div className="table-content">
                                <x-652573-now-experience-filter></x-652573-now-experience-filter>
                                <x-652573-now-experience-table
                                        title="Task table"
                                        dataColumns={displayColumns}
                                        dataRows={dataRows}
                                ></x-652573-now-experience-table>
                        </div>

                </div>
        );
};
