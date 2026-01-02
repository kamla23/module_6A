

const developers = [
  {
    name: "Alice",
    skills: ["JavaScript", "React", "Node.js"],
    experience: { years: 4 },
    availability: true,
  },
  {
    name: "Bob",
    skills: ["HTML", "CSS", "JavaScript"],
    experience: { years: 2 },
    availability: true,
  },
  {
    name: "Eva",
    skills: ["JavaScript", "React", "GraphQL", "TypeScript"],
    experience: { years: 5 },
    availability: true,
  },
];

function buildTeamReport(developers, ex) {
  return developers
    .filter((dev) => dev.availability && dev.experience.years >= ex)
    .map((dev) => {
      const [primarySkill, ...secondarySkills] = dev.skills;
      return {
        name: dev.name,
        years: dev.experience.years,
        primarySkill,
        secondarySkills,
      };
    });
}

function generateReport() {
  const minExp = Number(document.getElementById("experience").value);
  const report = buildTeamReport(developers, minExp);

  const reportDiv = document.getElementById("report");
  reportDiv.innerHTML = ""; // clear old

  if (report.length === 0) {
    reportDiv.innerHTML = "<p>No eligible developers found!</p>";
    return;
  }

  report.forEach((dev) => {
    const card = document.createElement("div");
    card.className = "dev-card";
    card.innerHTML = `
      <h3>${dev.name}</h3>
      <p><strong>Experience:</strong> ${dev.years} years</p>
      <p><strong>Primary Skill:</strong> ${dev.primarySkill}</p>
      <p><strong>Other Skills:</strong> ${dev.secondarySkills.join(", ")}</p>
    `;
    reportDiv.appendChild(card);
  });
}
