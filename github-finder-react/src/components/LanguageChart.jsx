import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ==========================================================
// chart.js e "tree-shaking" hoy - mane shudhu ja use korben
// setai register korte hoy, na hole error dey. Pie chart er
// jonno ArcElement (segment গুলো আঁকে), Tooltip, ar Legend lagbe.
// ==========================================================
ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = [
  "#f1e05a", "#3572A5", "#e34c26", "#563d7c", "#00ADD8",
  "#178600", "#b07219", "#89e051", "#f34b7d", "#2b7489",
];

// ==========================================================
// EKTA REUSABLE COMPONENT - "repos" prop hishebe pay,
// nijer bhitore shob calculation kore niye - App.jsx ke
// shudhu data dite hoy, chart-er kono detail jante hoy na.
// Eta "props" er shobcheye shadharon use - parent theke
// child e data pathano.
// ==========================================================
function LanguageChart({ repos }) {
  // Step 1: language onujayi repo count kori
  const languageCounts = {};
  repos.forEach((repo) => {
    if (repo.language) {
      languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
    }
  });

  const labels = Object.keys(languageCounts);
  const values = Object.values(languageCounts);

  // Kono language data na thakle chart dekhabo na
  if (labels.length === 0) {
    return <p className="no-lang">No language data available.</p>;
  }

  // Chart.js er expected data shape - eta "chart.js" library er
  // nijer convention, protyek chart type e emon object lage
  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: COLORS.slice(0, labels.length),
        borderColor: "#0d1117",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#c9d1d9",
          boxWidth: 12,
          font: { size: 11 },
        },
      },
    },
  };

  return (
    <div className="chart-wrapper">
      <h3>Languages Used:</h3>
      <Pie data={chartData} options={options} />
    </div>
  );
}

export default LanguageChart;