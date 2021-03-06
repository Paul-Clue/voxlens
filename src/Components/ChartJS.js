import React from "react";
import Canvas from "./Canvas";
// import Chart from "chart.js/auto";

const ChartsJS = () => {
  //   const ctx = document.getElementById("myChart");
  //   const myChart = new Chart(ctx, {
  //     type: "bar",
  //     data: {
  //       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //       datasets: [
  //         {
  //           label: "# of Votes",
  //           data: [12, 19, 3, 5, 2, 3],
  //           backgroundColor: [
  //             "rgba(255, 99, 132, 0.2)",
  //             "rgba(54, 162, 235, 0.2)",
  //             "rgba(255, 206, 86, 0.2)",
  //             "rgba(75, 192, 192, 0.2)",
  //             "rgba(153, 102, 255, 0.2)",
  //             "rgba(255, 159, 64, 0.2)",
  //           ],
  //           borderColor: [
  //             "rgba(255, 99, 132, 1)",
  //             "rgba(54, 162, 235, 1)",
  //             "rgba(255, 206, 86, 1)",
  //             "rgba(75, 192, 192, 1)",
  //             "rgba(153, 102, 255, 1)",
  //             "rgba(255, 159, 64, 1)",
  //           ],
  //           borderWidth: 1,
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //         },
  //       },
  //     },
  //   });
  return (
    <>
      <div className="col-8 offset-2 border border-info border-1 my-5">
        <div className="card">
          <div className="card-body">
            <h5>Testing VoxLens</h5>
            <hr />
            <Canvas />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartsJS;
