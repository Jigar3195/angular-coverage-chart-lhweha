import { ViewChild } from "@angular/core";

export class ChartConfig {

  excellentDevices = [];
  goodDevices = [];
  poorDevices = [];
  averageDevices = [];
  deviceNumberLimit = 12;

  public pieChartOptions: any;
  public pieChartLabels = [];
  public pieChartType: string;
  public pieChartLegend: boolean;
  public pieChartData = [];
  public pieChartColors: any;

  @ViewChild('chartContainer', null) chartContainer;


  chart: anychart.charts.Polar = null;
  legend = anychart.standalones.legend();
  legendItems = [
    {
      text: 'Excellent',
      iconType: 'square',
      iconFill: '#6cd053',
      iconStroke: { color: 'black', thickness: 2 }
    },
    {
      text: 'Good',
      iconType: 'square',
      iconFill: '#46978d',
      iconStroke: { color: 'black', thickness: 2 }
    },
    {
      text: 'Average',
      iconType: 'square',
      iconFill: '#274553',
      iconStroke: { color: 'black', thickness: 2 }
    },
    {
      text: 'Poor',
      iconType: 'square',
      iconFill: '#28323c',
      iconStroke: { color: 'black', thickness: 2 }
    }
  ];



  public generateChart(dataSet) {
    // anychart.theme('dark_blue');
    this.chart = anychart.polar();
    this.chart.data(dataSet);
    this.chart.padding('80px');
    this.loadMarkers(dataSet);


    this.chart.yGrid().palette([['#7E57C2 0.8', '#7E57C2 0.8'], ['#9575CD 0.8', '#9575CD 0.8'], ['#B39DDB 0.8', '#B39DDB 0.8'], ['#D1C4E9 0.8', '#D1C4E9 0.8'], ['#D1C4E9 0.8', '#D1C4E9 0.8']]);
    this.chart.yGrid().stroke('#FAFAFA', 0);
    this.chart.xGrid(false);
    this.chart.xScale().maximum(360);
    this.chart.yScale()
      .maximum(10)
      .minimum(0);
    this.chart.xAxis(false);
    this.chart.yAxis(false);
    this.chart.yAxis().stroke(null);
    this.chart.background('#E5E6EF');

    // adjsut tooltip
    // signalQuality: device.signalQuality
    this.chart.tooltip().format('Signal Quality: {%signalQuality}\nSignal Strength: {%signal} dB\nMAC address: {%mac}');
    this.chart.tooltip().titleFormat('{%name}');

  }


  public loadMarkers(dataSet) {
    const series = this.chart.marker(dataSet);
    series.type('circle');
    series.normal().fill(placeImages);
    series.normal().size(15).stroke(null);
    series.hovered().size(17);
    series.selected().size(17);
    series.selected().fill(placeImages).stroke('#0f4b86', 1);
    series.labels(true);

    series.labels()
      .anchor('center')
      .offsetY(-2)
      .fontSize(12)
      .fontColor('white')
      .format(function () {
        //  series.normal().fill(placeImages(this.getData('deviceType')))
        //  return this.getData('index');
      });

    function placeImages() {
      let src;
      // console.log(typeof this.getData('deviceType'));
      // tablet.png
      if (!this.getData('deviceType')) {
        src = '../../assets/images/devices/device_unknown.png';
      } else if (this.getData('deviceType') === 'Mobile') {
        src = '../../assets/images/devices/android.png';
      } else if (this.getData('deviceType') === 'Apple Device') {
        src = '../../assets/images/devices/apple.png';
      } else if (this.getData('deviceType') === 'Computer') {
        src = '../../assets/images/devices/laptop.png';
      } else if (this.getData('deviceType') === 'Printer') {
        src = '../../assets/images/devices/printer.png';
      } else if (this.getData('deviceType') === 'Tablet') {
        src = '../../assets/images/devices/tablet.png';
      } else if (this.getData('deviceType') === 'wifi') {
        src = '../../assets/images/devices/wifi.png';
      } else {
        src = '../../assets/images/devices/device_unknown.png';
      }
      return {
        src: src,
        mode: 'fit',
        opacity: 1
      };
    }
  }

  public reloadData(dataSet) {
    this.chart.data(dataSet);
    this.loadMarkers(dataSet);
  }

  pieChartShow(dataSet: any[]) {
    this.excellentDevices = [];
    this.goodDevices = [];
    this.averageDevices = [];
    this.poorDevices = [];
    this.pieChartLabels = ['Excellent', 'Good', 'Average', 'Poor'];
    this.pieChartType = 'pie';
    this.pieChartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };
    this.pieChartLegend = true;

    dataSet = dataSet.filter(data => data.mac !== 'N/A');

    for (let i = 0; i < dataSet.length; i++) {
      if (dataSet[i].signalQuality === 'Excellent') {
        this.excellentDevices.push(dataSet[i]);
      } else if (dataSet[i].signalQuality === 'Good') {
        this.goodDevices.push(dataSet[i]);
      } else if (dataSet[i].signalQuality === 'Average') {
        this.averageDevices.push(dataSet[i]);
      } else if (dataSet[i].signalQuality === 'Poor') {
        this.poorDevices.push(dataSet[i]);
      } else if (dataSet[i].signalQuality == null) {
        console.warn('We got null signalquality', dataSet[i]);
      }
    }
    this.pieChartData = [this.excellentDevices.length, this.goodDevices.length, this.averageDevices.length, this.poorDevices.length];
    this.pieChartColors =
      [{
        backgroundColor: ['#009688', '#42A5F5', '#DCE775', '#f44336']
      }];
  }
  // tslint:disable-next-line:eofline
}