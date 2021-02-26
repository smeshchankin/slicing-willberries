(function() {
  readData('db/sliders.json');

    const sliderData = [
      { id: 1, label: "Bestseller", title: "Sweater Choker Neck",
        description: "Women’s pearl basic knit sweater with a round neck. Available in several colours. Free shipping to stores.",
        price: 319 },
      { id: 2, label: "New", title: "Text T-Shirt",
        description: "Women’s pearl basic knit sweater with a round neck. Available in several colours. Free shipping to stores.",
        price: 229 },
    ];
    populate('.swiper-slide', sliderData);

    const navigationData = [
      { link: '#', name: 'Womens' },
      { link: '#', name: 'Mens' },
      { link: '#', name: 'Goods' },
      { link: '#', name: 'Accessories' },
      { link: '#', name: 'Brands' },
      { link: '#', name: 'Blog' }
    ];
    populate('.navigation-item', navigationData);

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