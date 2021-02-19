(function() {
    const paymentData = [
        { img: 'visa.png', payment: 'Visa' },
        { img: 'mastercard.png', payment: 'Mastercard' },
        { img: 'paypal.png', payment: 'PayPal' },
        { img: 'bitcoin.png', payment: 'Bitcoin' }
    ];
    let template = document.querySelector('.payment-logo');
    let parent = template.parentNode;

    paymentData.forEach(p => {
      const node = template.cloneNode(true);
      node.src = node.dataset.src.replace('${img}', p.img);
      node.alt = node.alt.replace('${payment}', p.payment);
      parent.appendChild(node);
    })
    parent.removeChild(template);

    const footerMenuData = [
      { link: '#', name: 'Shop' },
      { link: '#', name: 'About Us' },
      { link: '#', name: 'Careers' },
      { link: '#', name: 'FAQ' },
      { link: '#', name: 'Blog' },
      { link: '#', name: 'Contacts' }
    ];
    template = document.querySelector('.footer-menu-item');
    parent = template.parentNode;

    footerMenuData.forEach(i => {
      const node = template.cloneNode(true);
      console.log(node);
      node.innerHTML = node.innerHTML
        .replace('${link}', i.link)
        .replace('${name}', i.name);
      parent.appendChild(node);
    });
    parent.removeChild(template);

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