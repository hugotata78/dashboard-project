import React from 'react';
import {Line} from 'react-chartjs-2';
import '../assets/css/Graphics.css';

function Graphics(props) {
    const data={
        labels:["Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"],
        datasets:[
            {
            label:"Cantidad de contribuciones últimos 6 meses",
            fill: false,
            backgroundColor: 'rgba(73,155,234,1)',
            borderColor:'rgba(73,155,234,1)',
            pointBorderColor:'rgba(73,155,234,1)',
            pointBorderWidth:1,
            pointHoverRadius:5,
            pointHoverBackgroundColor:'rgba(73,155,234,1)',
            pointHoverBorderColor:'rgba(73,155,234,1)',
            pointRadius: 1,
            pointHitRadius: 10,
            data: [21, 4, 0, 6, 25, 11]
            }
        ]
    }
    return (
        <div className="containerGrafica">
            <Line data={data}/>
        </div>
    );
}

export default Graphics;