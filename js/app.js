(function() {
    const paymentData = [
        { img: 'visa.png', payment: 'Visa' },
        { img: 'mastercard.png', payment: 'Mastercard' },
        { img: 'paypal.png', payment: 'PayPal' },
        { img: 'bitcoin.png', payment: 'Bitcoin' }
    ];
    const paymentLogoTemplate = document.querySelector('.payment-logo');
    const parent = paymentLogoTemplate.parentNode;

    paymentData.forEach(p => {
      const node = paymentLogoTemplate.cloneNode();
      node.src = node.dataset.src.replace('${img}', p.img);
      node.alt = node.alt.replace('${payment}', p.payment);
      parent.appendChild(node);
    })
    parent.removeChild(paymentLogoTemplate);

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