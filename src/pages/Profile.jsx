import { useState, useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import dummydata from "../data/dummydata";
import Icons from "../../public/";

function Profile() {
  const [isSelected, setIsSelected] = useState(0);

  const [chartData, setChartData] = useState({
    labels: dummydata.myProfiles.map((data) => data.name),
    datasets: [
      {
        data: [52.7, 52.7, 52.7, 52.7, 52.7, 52.7, 52.7],
        backgroundColor: [], // Akan diisi dengan gambar
        borderWidth: 2,
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // Nonaktifkan tooltip default
      },
    },
    onHover: (event, chartElement) => {
      const chart = event.chart;
      const dataset = chart.data.datasets[0];

      // Reset skala dan warna latar belakang
      dataset.backgroundColor.forEach((color, i) => {
        dataset.backgroundColor[i] = color; // Kembalikan warna ke warna asli
        dataset.data[i] = 52.7; // Kembalikan data ke nilai asli
      });

      if (chartElement.length) {
        const { datasetIndex, index } = chartElement[0];
        console.log(datasetIndex);
        // Menambahkan efek hover pada elemen yang dihover
        dataset.data[index] = 62.7; // Ubah nilai untuk efek skala lebih besar

        // Mengubah warna latar belakang saat dihover (tetap sama)
        dataset.backgroundColor = dataset.backgroundColor.map(
          (color, i) => (i === index ? color : color) // Tetap sama untuk non-hovered
        );

        // Menggerakkan elemen sedikit ke atas
        const originalValue = dataset.data[index];
        dataset.data[index] = originalValue + 0; // Menambah sedikit tinggi elemen

        chart.update();
      } else {
        // Reset skala jika tidak ada elemen yang dihover
        dataset.data.forEach((value, i) => {
          dataset.data[i] = 52.7; // Kembalikan nilai asli
        });
        chart.update();
      }
    },
    onLeave: (event) => {
      const chart = event.chart;
      const dataset = chart.data.datasets[0];

      // Kembalikan nilai data ke normal
      dataset.data.forEach((value, i) => {
        dataset.data[i] = 52.7; // Kembalikan nilai asli
      });

      // Kembalikan warna latar belakang ke normal
      dataset.backgroundColor = chartData.datasets[0].backgroundColor;

      chart.update();
    },
    onClick: (event) => {
      const chart = event.chart;
      const activePoints = chart.getElementsAtEventForMode(
        event.native,
        "nearest",
        { intersect: true },
        false
      );

      if (activePoints.length) {
        const { datasetIndex, index } = activePoints[0];
        console.log(chart.data);
        const label = chart.data.labels[index];
        const childlabel = chart.data.childname[index];
        alert(`Clicked on ${label} with value: ${childlabel}`);
      }
    },
  };

  const chartRef = useRef(null);

  useEffect(() => {
    const images = dummydata.myProfiles.map((profile) => {
      const img = new Image();
      img.src = profile.image;
      return new Promise((resolve) => {
        img.onload = () => {
          const pattern = chartRef.current.ctx.createPattern(img, "repeat");
          resolve(pattern);
        };
      });
    });

    Promise.all(images).then((patterns) => {
      setChartData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            backgroundColor: patterns,
          },
        ],
      }));
    });
  }, []);

  return (
    <section className="section-profile">
      <div className="donutchart hidden md:block">
        <Doughnut ref={chartRef} data={chartData} options={options} />
        <div className="roundedprofile">
          <img src="/images/profile/rounded.png" alt="roundedprofile" />
        </div>
      </div>
      <ul className="section-profile-list md:hidden">
        {dummydata.myProfiles.map((data, index) => (
          <li
            key={index}
            className={`list-items ${index === isSelected ? "active" : ""}`}
          >
            <button
              onClick={() => setIsSelected(index)}
              className="item"
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span className="childname">{data.childname}</span>
              <span className="name">{data.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Profile;
