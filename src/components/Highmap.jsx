
import { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsMap from 'highcharts/modules/map';
import statesData from '../data/mexicoMapdata.json';

if (typeof Highcharts === 'object') {
  HighchartsMap(Highcharts);
}

const Highmap = () => {
    const data = [
        ['mx-mx', 18],['mx-df', 20],['mx-ve', 27],['mx-oa', 32],
        ['mx-yu', 38], ['mx-sl', 41],['mx-hg', 42]
        
    ];
    useEffect(() => {
      Highcharts.mapChart('container', {
        chart: {
            map: statesData
        },

        title: {
            text: 'Mapa de Cobertura'
        },

        subtitle: {
            text: 'Ti Clean & Business'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
           minColor: '#BADA55',
           maxColor: '#BADA58'
        },

        series: [{
            data: data,
            name: 'Cobertura Total',
            color: '#BADA55',
            borderColor: '#808080',
            borderWidth: 0.5,
            states: {
                hover: {
                    color: '#06dd7e'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });

},[]);

  
    return (
        <div  className="md:flex overflow-hidden sm:grid sm:grid-cols-1 align-items-center sm:mx-auto md:mx-32 rounded-xl shadow-lg">
            <div className="grid py-8 place-content-center">
                <h1 className="font-bold text-center text-2xl p-8">Cobertura Nacional</h1>
                <p className="px-8 text-left font-light">Actualmente contamos con cobertura en el servicio de limpieza y sistemas de seguridad en
                    los siguientes estados de la Republica Mexicana, no dudes en contactarnos para obtener 
                    informacion mas detallada y presupuestos, estaremos encantados de atenderlo.
                </p>
            </div>
          
                <div className='p-2' id="container" style={{ height: '100%', width: '100vw'}} />
               
        </div>    
    )
  };

export default Highmap;
