const getData = async () => {
    const res = await fetch('QQQ_1m.csv');
    const resp = await res.text();
    //   console.log(resp);
    const cdata = resp.split('\n').map((row) => {
      const [name, time1, open, high, low, close, a, b] = row.split(',');
      String [time2, time3] = time1.split(' ');
      time3 = time3.substring(0, 8);
      return {
        time: new Date(`${time2}, ${time3}`).getTime() / 1000,
        open: open * 1,
        high: high * 1,
        low: low * 1,
        close: close * 1,
      };
    });
    return cdata;
    //   console.log(cdata);
  };
  
  // getData();
  
  const displayChart = async () => {
    const chartProperties = {
      width: 1500,
      height: 600,
      timeScale: {
        timeVisible: true,
        see: true,
      },
    };
  
    const domElement = document.getElementById('tvchart');
    const chart = LightweightCharts.createChart(domElement, chartProperties);
    const candleseries = chart.addCandlestickSeries();
    const klinedata = await getData();
    candleseries.setData(klinedata);
  };
  
  displayChart();