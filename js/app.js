(function() {
    const goodsData = [
      { img: 'goods-1.jpg', title: 'Embroidered Hoodie', descr: 'Yellow/Lilac/Fuchsia/Orange', price: '$89' },
      { img: 'goods-2.jpg', title: 'Faded Beach Trousers', descr: 'Navy/Ochre/Black/Khaki', price: '$139' },
      { img: 'goods-3.jpg', title: 'Text T-Shirt', descr: 'White', price: '$59' },
      { img: 'goods-4.jpg', title: 'Striped Long Sleeve Shirt', descr: 'Red/Sky Blue', price: '$119' }
    ];
    populate('.good-card', goodsData);

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