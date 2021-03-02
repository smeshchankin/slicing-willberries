(function() {
    readData('db/navigation.json')
      .then(data => populate('.navigation-item', data));

    readData('db/goods.json')
      .then(data => populate('.good-card', data));

    readData('db/payment.json')
      .then(data => populate('.payment-logo', data));

      readData('db/menu.json')
      .then(data => populate('.footer-menu-item', data));

      const socialLinks = [
      { id: 'facebook', class: 'icon-facebook', width: 10, height: 18 },
      { id: 'twitter', class: 'icon-twitter', width: 18, height: 16 },
      { id: 'instagram', class: 'icon-instagram', width: 18, height: 18 }
    ];
    populate('.social-link', socialLinks);

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

    readData('db/sliders.json')
      .then(data => populate('.swiper-slide', data))
      .then(() => 
        new Swiper('.swiper-container', {
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
        })
      );
}());