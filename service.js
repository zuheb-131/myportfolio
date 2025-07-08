// service.js
fetch('assets/data/portfolio.json')
  .then(res => res.json())
  .then(data => {
    const services = data.sections.find(section => section.id === "services").list;
    const container = document.querySelector('#services .row');

    services.forEach((service, index) => {
      const delay = (index + 1) * 100;

      const col = document.createElement('div');
      col.className = 'col-lg-4 col-md-6';
      col.setAttribute('data-aos', 'fade-up');
      col.setAttribute('data-aos-delay', delay);

      col.innerHTML = `
        <div class="service-item">
          <i class="bi bi-check-circle"></i>
          <h4>${service}</h4>
          <p>This is one of my offered services. Feel free to contact me for more info.</p>
        </div>
      `;

      container.appendChild(col);
    });
  })
  .catch(err => {
    console.error("Failed to load services from JSON:", err);
  });
