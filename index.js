window.onload = function () { 
    const labels2 = [' ', ' ', ' ', ' ', ' ', ' '];
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { 
            data_chart = JSON.parse(this.responseText).data_charts.map((item) => parseInt(item, 10));
             const data = {
        labels: labels2,
        datasets: [{
            backgroundColor: '#5444bc',
            borderColor: '#5444bc',
            data: data_chart,
            tension: 0.6,
            fill: true
        }]
    };
    const config = {
        type: 'line',
        responsive: true,
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                y: {
                    max: 90000,
                    min: 10000,
                    grace: '5%',
                    ticks:{
                            display:false
                            }
                }, x: {
    						grid: {
     							 display: false
    							}
							  }
            },
            

        },
             
    };
   const myChart_2 = new Chart(
        document.getElementById('myChart_2'),
        config
    )
        }
    }
    request.open("GET", "data.json", true);
	request.send();
    
}