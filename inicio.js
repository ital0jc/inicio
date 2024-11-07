document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de interatividade: mensagem de boas-vindas
    console.log('Bem-vindo ao novo Portal IFMG!');  // Mudança para log no console, em vez de alert

    // Menu interativo
    const menuItems = document.querySelectorAll('nav ul li');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('a').style.backgroundColor = '#004d26';
        });
        item.addEventListener('mouseleave', () => {
            item.querySelector('a').style.backgroundColor = '';
        });
    });

    // Animação ao rolar a página
    window.addEventListener('scroll', () => {
        const banner = document.querySelector('.banner');
        if (banner) {
            banner.style.opacity = 1 - window.scrollY / 500;
        }
    });

    // Animação nos destaques da página inicial
    const highlightBoxes = document.querySelectorAll('.highlight-box');
    highlightBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'translateY(-5px)';
            box.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        box.addEventListener('mouseleave', () => {
            box.style.transform = '';
            box.style.boxShadow = '';
        });
    });
});



