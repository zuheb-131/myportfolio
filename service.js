
fetch('assets/data/services.json')
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector('#services .row');
    data.services.forEach((service, index) => {
      const delay = (index + 1) * 100;
      const col = document.createElement('div');
      col.className = 'col-lg-4 col-md-6';
      col.setAttribute('data-aos', 'fade-up');
      col.setAttribute('data-aos-delay', delay);

      col.innerHTML = `
        <div class="service-item">
          <i class="${service.icon}"></i>
          <h4>${service.title}</h4>
          <p>${service.description}</p>
        </div>
      `;

      container.appendChild(col);
    });
  })
  .catch(err => {
    console.error("Error loading services.json:", err);
  });
