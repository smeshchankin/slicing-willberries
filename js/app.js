(function() {
    const paymentData = [
        { img: 'visa.png', payment: 'Visa' },
        { img: 'mastercard.png', payment: 'Mastercard' },
        { img: 'paypal.png', payment: 'PayPal' },
        { img: 'bitcoin.png', payment: 'Bitcoin' }
    ];
    populate('.payment-logo', paymentData);

    const footerMenuData = [
      { link: '#', name: 'Shop' },
      { link: '#', name: 'About Us' },
      { link: '#', name: 'Careers' },
      { link: '#', name: 'FAQ' },
      { link: '#', name: 'Blog' },
      { link: '#', name: 'Contacts' }
    ];
    populate('.footer-menu-item', footerMenuData);

    function populate(selector, data) {
      const template = document.querySelector(selector);
      const parent = template.parentNode;

      data.forEach(row => {
        const node = template.cloneNode(true);
        Object.keys(row).forEach(function(key) {
          const k = '${' + key + '}';
          node.innerHTML = node.innerHTML.replace(k, row[key]);
          if (node.alt) {
            node.alt = node.alt.replace(k, row[key]);
          }
        });

        if (node.dataset.src) {
          node.src = node.dataset.src.replace('${img}', row.img);
        }

        parent.appendChild(node);
      });
      parent.removeChild(template);
    }

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
      });
}());