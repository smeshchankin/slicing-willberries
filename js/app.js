(function() {
    populator.populateFromJson();

    readData('db/sliders.json')
      .then(data => populate('.swiper-slide', data))
      .then(buildSwiper);

    readData('db/menu.json')
      .then(data => populate('.footer-menu-item', data));

    readData('db/social.json')
      .then(data => populate('.social-link', data));

    readData('db/payment.json')
      .then(data => populate('.payment-logo', data));

    function populate(selector, data) {
      const template = document.querySelector(selector);
      const parent = template.parentNode;

      data.forEach(row => {
        const node = template.cloneNode(true);
        if (node.className && row.id) {
          const k = '${id}';
          node.className = node.className.replaceAll(k, row.id);
        }

        Object.keys(row).forEach(function(key) {
          const k = '${' + key + '}';
          node.innerHTML = node.innerHTML.replaceAll(k, row[key]);
          if (node.alt) {
            node.alt = node.alt.replaceAll(k, row[key]);
          }
        });

        if (node.dataset.src) {
          node.src = node.dataset.src.replaceAll('${img}', row.img);
        }

        parent.appendChild(node);
      });
      parent.removeChild(template);
    }

    async function readData(filename) {
      const response = await fetch(filename);

      if (response.ok) {
        const json = await response.json();
        return json;
      } else {
        console.log('File ' + filename + ' was not found. Status: ' + response.status);
      }
    }

    function buildSwiper() {
      return new Swiper('.swiper-container', {
        loop: true,

        // Navigation arrows
        navigation: {
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    }
}());