
            Highcharts.chart('container', {
                chart: {
                    type: 'bubble',
                    plotBorderWidth: 0,
                    zoomType: 'xy',
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                },
                legend: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: 'Software Capabilities'
                },
                accessibility: {
                    point: {
                        valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
                    }
                },
                xAxis: {
                    gridLineWidth: 1,
                    title: {
                        text: 'Internal Projects'
                    },
                    labels: {
                        format: '{value} %'
                    },
                    plotLines: [{
                        color: 'black',
                        dashStyle: 'dot',
                        width: 2,
                        value: 0,
                        label: {
                            rotation: 0,
                            y: 15,
                            style: {
                                fontStyle: 'italic'
                            },
                            text: ''
                        },
                        zIndex: 3
                    }],
                    accessibility: {
                        rangeDescription: 'CCC.'
                    }
                },
                yAxis: {
                    startOnTick: false,
                    endOnTick: false,
                    title: {
                        text: 'External Projects'
                    },
                    labels: {
                        format: '{value} %'
                    },
                    maxPadding: 0.2,
                    plotLines: [{
                        color: 'black',
                        dashStyle: 'dot',
                        width: 2,
                        value: 0,
                        label: {
                            align: 'right',
                            style: {
                                fontStyle: 'italic'
                            },
                            text: '',
                            x: 10
                        },
                        zIndex: 3
                    }],
                    accessibility: {
                        rangeDescription: 'BBBB.'
                    }
                },
                tooltip: {
                    useHTML: true,
                    headerFormat: '<table>',
                    pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
                        '<tr><th>Used in internal projects:</th><td>{point.x} %</td></tr>' +
                        '<tr><th>Used in external projects:</th><td>{point.y} %</td></tr>' +
                        '<tr><th>Value:</th><td>{point.z}%</td></tr>',
                    footerFormat: '</table>',
                    followPointer: true
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }
                },
                series: [{
		   name: 'Programming Languages',
                    data: [
		    	{ x: 100, y: 100, z: 10, name: 'C++'},
		    	{ x: 80, y: 80, z: 10, name: 'Python'},
                        { x: 80, y: 60, z: 10, name: 'PHP' },
			{ x: 70, y: 60, z: 10, name: 'Bash'},
                        { x: 60, y: 70, z: 10, name: 'C'},
                    ],
                },
                {
		    name: 'Technologies',
                    data: [
		    	{ x: 80, y: 100, z: 10, name: 'API'},
			{ x: 80, y: 80, z: 10, name: 'On Premise'},
                        { x: 20, y: 80, z: 10, name: 'Cloud'},
                        { x: 10, y: 90, z: 10, name: 'Standalone'},
                    ],
                },
                {
		    name: 'AI',
                    data: [
                        { x: 20, y: 80, z: 10, name: 'CV'},
                        { x: 40, y: 80, z: 10, name: 'ML'},
                    ],
                }
                ]});
