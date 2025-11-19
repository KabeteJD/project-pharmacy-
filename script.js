// barre barre 
const canvas = document.getElementById("monthlyRevenueChart");
const ctx = canvas.getContext("2d");

// Données pour 12 mois
const sales = [1200, 1350, 1100, 1450, 1600, 1250, 1400, 1550, 1700, 1500, 1600, 1800];
const transactions = [48, 52, 45, 55, 60, 50, 58, 62, 70, 65, 68, 75];
const bestProducts = [
  "Paracétamol", "Vitamine C", "Crème antiseptique", "Masques médicaux", 
  "Doliprane", "Vitamine D", "Sérum", "Aspirine", 
  "Sirop", "Compresses", "Gel antiseptique", "Omeprazole"
];
const labels = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];

const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels,
    datasets: [{
      label: "Ventes mensuelles",
      data: sales,
      backgroundColor: "#0ca678aa",
      borderColor: "#0ca678",
      borderWidth: 1,
      borderRadius: 10
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#ffffff",
        titleColor: "#0ca678",
        bodyColor: "#1e293b",
        borderColor: "#0ca678",
        borderWidth: 1,
        cornerRadius: 12,
        yAlign: "bottom",
        callbacks: {
          title: (items) => items[0].label,
          label: (item) => {
            const index = item.dataIndex;
            const total = sales[index];
            const prev = sales[index - 1] || total;
            const diff = total - prev;
            const variation = ((diff / prev) * 100).toFixed(1);
            const trans = transactions[index];
            const bestProduct = bestProducts[index];
            const message = diff >= 0 ? "Les ventes ont augmenté 🌿" : "Les ventes ont diminué 📉";

            return [
              `Total : $${total}`,
              `Variation : ${variation}%`,
              `Transactions : ${trans}`,
              `Produit top : ${bestProduct}`,
              message
            ];
          }
        }
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "#e9ecef" } }
    }
  }
});
