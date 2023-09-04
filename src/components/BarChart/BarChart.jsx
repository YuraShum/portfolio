import { Bar } from "react-chartjs-2"
import { CategoryScale, Chart, LinearScale, BarElement} from "chart.js";

export function BarChart (){
    Chart.register(CategoryScale);
    Chart.register(LinearScale);
    Chart.register(BarElement);

    const data = {
        labels: ['css (scss)', 'JavaScript', 'React', 'HTML', 'Motivation'],
        datasets: [
          {
            label: '',
            data: [90, 80, 85, 90, 100],
            backgroundColor: [
                'rgba(250, 70, 22, 0.7)',
                'rgba(255, 165, 0, 0.7)',
                'rgba(255, 255, 0, 0.7)',
                'rgba(115, 205, 50, 0.7)',
                'rgba(50,205,50, 0.7)'],
            borderColor: [
                'rgba(250, 70, 22, 1)',
                'rgba(255, 165, 0, 1)',
                'rgba(255, 255, 0, 1)',
                'rgba(115, 205, 50, 1)',
                'rgba(50, 205, 50, 1)'],
            borderWidth: 2,
            
            
          }
        ]
      };
    return (
        <>
        <Bar data={data}></Bar>
        </>
    )
}