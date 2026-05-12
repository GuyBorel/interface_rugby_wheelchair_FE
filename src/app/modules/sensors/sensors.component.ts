import { Component, OnInit } from '@angular/core';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { DatabaseService } from '../../services/database.service';
import { NgForOf, NgIf } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import 'chartjs-adapter-date-fns'; // Ensure this is installed and imported
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  standalone: true,
  imports: [NgForOf, NgChartsModule, NgIf],
  styleUrls: ['./sensors.component.css'],
})
export class SensorsComponent implements OnInit {
  sensors: string[] = [];
  selectedSensor: string | null = null;

  // Chart Data
  lineChartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Temperature', fill: false, borderColor: 'red' },
      { data: [], label: 'Humidity', fill: false, borderColor: 'blue' },
    ],
  };

  barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Shocks Detected', backgroundColor: 'orange' },
    ],
  };

  heartRateChartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Heart Rate', fill: false, borderColor: 'green' },
    ],
  };

  // Chart Options
  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'time', // Use time scale
        time: {
          unit: 'minute',
          tooltipFormat: 'yyyy-MM-dd HH:mm:ss', // Date format for tooltip
          displayFormats: {
            minute: 'HH:mm:ss',
          },
        },
      },
    },
  };

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute',
          tooltipFormat: 'yyyy-MM-dd HH:mm:ss',
          displayFormats: {
            minute: 'HH:mm:ss',
          },
        },
      },
    },
  };

  constructor(
    private dbService: DatabaseService,
    private cdr: ChangeDetectorRef,
  ) {
    // Register required chart.js components
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.fetchSensors();
  }

  fetchSensors(): void {
    this.dbService.getSensors().subscribe((data: string[]) => {
      this.sensors = data.filter((sensor) => sensor !== null); // filter out null values
      console.log('Sensors:', this.sensors);

      if (this.sensors.length > 0) {
        // Automatically select the first sensor and fetch its data
        this.selectedSensor = this.sensors[0];
        this.fetchSensorData(this.selectedSensor);
      }
    });
  }

  onSensorSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedSensor = target.value;
    this.fetchSensorData(this.selectedSensor);
  }

  fetchSensorData(sensorId: string): void {
    this.dbService.getSensorData(sensorId).subscribe((data: any[]) => {
      // Convertir les timestamps en objets Date
      const timestamps = data.map((entry: any) => new Date(entry.timestamp));
      const temperatureData = data.map((entry: any) =>
        entry.temperature !== null ? entry.temperature : null,
      );
      const humidityData = data.map((entry: any) =>
        entry.humidity !== null ? entry.humidity : null,
      );
      const shockData = data.map((entry: any) =>
        entry.shock !== null ? entry.shock : 0,
      );
      const heartRateData = data.map((entry: any) =>
        entry.BPM !== null ? entry.BPM : null,
      );

      // Vérification des longueurs
      if (
        timestamps.length === temperatureData.length &&
        timestamps.length === humidityData.length &&
        timestamps.length === shockData.length &&
        timestamps.length === heartRateData.length
      ) {
        // Mettre à jour les données des graphiques
        this.lineChartData = {
          labels: timestamps,
          datasets: [
            {
              data: temperatureData,
              label: 'Temperature',
              fill: false,
              borderColor: 'red',
            },
            {
              data: humidityData,
              label: 'Humidity',
              fill: false,
              borderColor: 'blue',
            },
          ],
        };

        this.barChartData = {
          labels: timestamps,
          datasets: [
            {
              data: shockData,
              label: 'Shocks Detected',
              backgroundColor: 'orange',
            },
          ],
        };

        this.heartRateChartData = {
          labels: timestamps,
          datasets: [
            {
              data: heartRateData,
              label: 'Heart Rate',
              fill: false,
              borderColor: 'green',
            },
          ],
        };

        this.cdr.detectChanges(); // Forcer la détection des changements
      } else {
        console.error('Les longueurs des données ne correspondent pas');
      }
    });
  }
}
