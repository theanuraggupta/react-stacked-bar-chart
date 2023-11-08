import { createRoot } from 'react-dom/client';
import './index.css';
/**
 * Sample for stackingBar series
 */
import * as React from "react";
import { useEffect } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingBarSeries, Tooltip, Highlight } from '@syncfusion/ej2-react-charts';

import { Browser } from '@syncfusion/ej2-base';
export let data = [
    { x: 'Jan', y: 6 }, { x: 'Feb', y: 8 }, { x: 'Mar', y: 12 },
    { x: 'Apr', y: 15.5 }, { x: 'May', y: 20 }, { x: 'Jun', y: 24 }
];
export let data2 = [
    { x: 'Jan', y: 6 }, { x: 'Feb', y: 8 }, { x: 'Mar', y: 11 },
    { x: 'Apr', y: 16 }, { x: 'May', y: 21 }, { x: 'Jun', y: 25 }
];
export let data3 = [
    { x: 'Jan', y: -1 }, { x: 'Feb', y: -1.5 }, { x: 'Mar', y: -2 },
    { x: 'Apr', y: -2.5 }, { x: 'May', y: -3 }, { x: 'Jun', y: -3.5 }
];
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const StackedBar = () => {
    const onChartLoad = (args) => {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    const load = (args) => {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    };
    return (<div className='control-pane'>
            <style>{SAMPLE_CSS}</style>
            <div className='control-section'>
                <ChartComponent id='charts' style={{ textAlign: "center" }} legendSettings={{ enableHighlight: true }} primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }} width={Browser.isDevice ? '100%' : '75%'} chartArea={{ border: { width: 0 } }} primaryYAxis={{ lineStyle: { width: 0 }, majorTickLines: { width: 0 }, labelFormat: '{value}%', edgeLabelPlacement: 'Shift' }} load={load.bind(this)} title='Sales Comparison' loaded={onChartLoad.bind(this)} tooltip={{ enable: true }}>
                    <Inject services={[StackingBarSeries, Category, Legend, Tooltip, Highlight]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={data} width={2} xName='x' yName='y' border={{ width: 1, color: "white" }} columnWidth={0.6} name='Apple' type='StackingBar'/>
                        <SeriesDirective dataSource={data2} width={2} xName='x' yName='y' border={{ width: 1, color: "white" }} columnWidth={0.6} name='Orange' type='StackingBar'/>
                        <SeriesDirective dataSource={data3} width={2} xName='x' yName='y' border={{ width: 1, color: "white" }} columnWidth={0.6} name='Wastage' type='StackingBar'/>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>);
};
export default StackedBar;

const root = createRoot(document.getElementById('sample'));
root.render(<StackedBar />);