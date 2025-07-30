const resources = [
  {
    name: "FreeCodeCamp",
    description: "Free coding tutorials and certifications.",
    url: "https://www.freecodecamp.org"
  },
  {
    name: "W3Schools",
    description: "HTML/CSS/JS reference and examples.",
    url: "https://www.w3schools.com"
  },
  {
    name: "Mental Health America",
    description: "Mental health resources and screenings.",
    url: "https://www.mhanational.org"
  }
];

const searchInput = document.getElementById('search');
const resultsList = document.getElementById('results');

function displayResources(filteredResources) {
  resultsList.innerHTML = '';

  if (filteredResources.length === 0) {
    resultsList.innerHTML = '<li>No resources found.</li>';
    return;
  }

  filteredResources.forEach(resource => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${resource.name}</strong><br>${resource.description}<br><a href="${resource.url}" target="_blank">Visit site</a>`;
    resultsList.appendChild(li);
  });
}

searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const filtered = resources.filter(res =>
    res.name.toLowerCase().includes(query) ||
    res.description.toLowerCase().includes(query)
  );
  displayResources(filtered);
});

// Show all on load
displayResources(resources);
