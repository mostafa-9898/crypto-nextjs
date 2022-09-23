import { useEffect, useState } from "react";
import axios from "axios";

// moment 
import moment from "moment";


// Chart
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);


const CoinChart = ({ coin }) => {


    const [chartTime, setChartTime] = useState(1)
    const [chartData, setChartData] = useState([])

    useEffect(() => {

        const fetchChart = async () => {

            const result = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=${chartTime}`)
            const data = result.data
            const coinChartData = data.prices.map(value => ({ x: value[0], y: value[1].toFixed(5) }));
            setChartData(coinChartData)
        }

        fetchChart()


    }, [chartTime])


    return (
        <div className="px-4">
            <Line
                options={{
                    responsive: true,
                    elements: { point: { radius: 2 } },
                    scales: {
                        y: {
                            ticks: {
                                callback: function (val, index) {
                                    return val
                                },
                            }
                        },
                    }
                }}
                data={{
                    labels: chartData.map(value => chartTime === 1 ? moment(value.x).format('LT') : moment(value.x).format('MMM DD')),
                    datasets: [
                        {
                            label: coin.name,
                            data: chartData.map(val => val.y),
                            borderColor: 'rgb(99, 102, 241)',
                            backgroundColor: 'rgba(99, 102, 241, .5)',
                        }
                    ],
                }}
            />


            <div className="flex items-center justify-center mt-8 gap-4">

                <button
                    onClick={() => setChartTime(1)}
                    className={`border rounded-md px-4 py-1 ${chartTime === 1 && 'bg-indigo-500 text-white'}`}>
                    1d
                </button>

                <button
                    onClick={() => setChartTime(7)}
                    className={`border rounded-md px-4 py-1 ${chartTime === 7 && 'bg-indigo-500 text-white'}`}>
                    7d
                </button>

                <button
                    onClick={() => setChartTime(30)}
                    className={`border rounded-md px-4 py-1 ${chartTime === 30 && 'bg-indigo-500 text-white'}`}>
                    1m
                </button>

                <button
                    onClick={() => setChartTime(365)}
                    className={`border rounded-md px-4 py-1 ${chartTime === 365 && 'bg-indigo-500 text-white'}`}>
                    1y
                </button>

            </div>

        </div>
    )
}

export default CoinChart;