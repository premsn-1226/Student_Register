import React from 'react';
import { HorizontalBar} from 'react-chartjs-2';
import './Home.css'
const localData = JSON.parse(localStorage.getItem('books'));
    const datas = localData.reduce((unique, o) => {
      if(!unique.some(obj => obj['university'] === o['university'])) {
        unique.push(o);
      }
      return unique;
    },[]);
let lab = datas.map(state => {return state['university']});

   var count = [];
   var inc=0;
   var k =0;
lab.map(state => {
  for(var i=0;i<localData.length;i++){
    if(state == localData[i].university){
      inc += 1;
    }
  }
  count[k]= inc;
  inc = 0;
  k++;
});
let counts = count.map(state =>{return state})
const data = {
  labels: lab,
  datasets: [
    {
      label: 'Number of students',
      backgroundColor: '#3e05',
      borderColor: '#ea1d63',
      borderWidth: 2,
      hoverBackgroundColor: '#ea1d63',
      hoverBorderColor: '#3e0748',
      data: counts,
      lineColor : 'blue',
    }
  ],
};
function UniversityBar() {
  const options = {
    title:{
      display : true,
      text : 'University Vs No.of.Students',
      fontColor: '#ea1d63',
      fontSize : '25',
      textAlign: 'center',
    },
    scales :{
      xAxes:[
        {
        ticks:{
          min : 0,
          stepSize : 1,
      fontColor: 'green',
      width: 5,
        }
      }
      ],
      yAxes:[
        {
        ticks:{
          fontStyle: "",
      fontColor: ' rgb(245, 98, 120)',
      fontSize:13
        }
      }
      ]
    },
    
  }
  return (
    <div className='App'>
      <div className="chart">
        <HorizontalBar
          className="Bar"
          data={data}
          width={500}
          options ={options}
        />
        </div>
    </div>
  );
}
export default UniversityBar;