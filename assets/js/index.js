let body = document.getElementById('body');
let header = document.getElementById('header');
let linksPag = document.getElementsByClassName('linksPag');
let section = document.getElementsByTagName('section');
let conteudoInicio = document.getElementById('conteudoInicio');
let h2 = document.getElementsByTagName('h2');
let h3 = document.getElementsByTagName('h3');
let p = document.getElementsByTagName('p');
let strong = document.getElementsByTagName('strong');
let btnPhp = document.getElementById('btnPhp');
let btnHtmlCssJs = document.getElementById('btnHtmlCssJs');
let btnWpElem = document.getElementById('btnWpElem');
let btnLinksPag = document.getElementById('btnLinksPag');
let navLinksPag = document.getElementById('navLinksPag');
let imgMenu = document.getElementById('imgMenu');
let conteudoProj = document.getElementById('conteudoProj');
let projetosHtmlCssJs = document.getElementById('projetosHtmlCssJs');
let projetoPHP = document.getElementById('projetoPHP');
let projetosWpElem = document.getElementById('projetosWpElem');
let linksProj = document.getElementsByClassName('linksProj');
let linksRepo = document.getElementsByClassName('linksRepo');
let imgProj = document.getElementsByClassName('imgProj');
let divTecnologia = document.getElementsByClassName('tecnologia');
let btnLightMode = document.getElementById('btnLightMode');
let imgLightMode = document.getElementById('imgLightMode');
let btnDarkMode = document.getElementById('btnDarkMode');
let imgDarkMode = document.getElementById('imgDarkMode');
let videoProj = document.getElementById('videoProj');
let footer = document.getElementById('footer');
let footerP = document.getElementById('footerP');

btnPhp.addEventListener('click', () => {
    projetosHtmlCssJs.style.display = 'none';
    projetosWpElem.style.display = 'none';
    projetoPHP.style.display = 'block';
});

btnHtmlCssJs.addEventListener('click', () => {
    projetosHtmlCssJs.style.display = 'block';
    projetosWpElem.style.display = 'none';
    projetoPHP.style.display = 'none';
});

btnWpElem.addEventListener('click', () => {
    projetosHtmlCssJs.style.display = 'none';
    projetosWpElem.style.display = 'block';
    projetoPHP.style.display = 'none';
});

btnLinksPag.addEventListener('click', () => {
    if (btnLinksPag.className === 'close') {
        btnLinksPag.innerHTML = 
        `
            <img src="assets/imgs/menu-white.png" alt="Menu" id="imgMenu">
        `;
        navLinksPag.style.display = 'flex';
        navLinksPag.style.flexFlow = 'column nowrap';
        navLinksPag.style.position = 'absolute';
        navLinksPag.style.top = '92px';
        navLinksPag.style.left = '50%';
        navLinksPag.style.width = '50%';
        btnLinksPag.className = 'open';
        btnLinksPag.innerHTML += 
        `
            <nav id="navLinksPag">
                <a href="#inicio" class="linksPag">Início</a>
                <a href="#sobre" class="linksPag">Sobre</a>
                <a href="#habilidades" class="linksPag">Habilidades</a>
                <a href="#projetos" class="linksPag">Projetos</a>
            </nav>
        `;
    } else {
        navLinksPag.style.display = 'none';
        btnLinksPag.className = 'close';
        btnLinksPag.innerHTML = 
        `
            <img src="assets/imgs/menu-dark-mode.png" alt="Menu" id="imgMenu">
        `;
    }
});

btnLightMode.addEventListener('click', () => {
    body.style.backgroundColor = '#F4F7F9';
    header.style.backgroundColor = '#005A8D';
    header.style.color = '#FFFFFF';
    conteudoInicio.style.backgroundColor = 'rgba(214, 214, 214, 0.498)';
    btnLinksPag.style.backgroundColor = '#005A8D';
    imgMenu.src = 'assets/imgs/menu-dark-mode.png';
    footer.style.backgroundColor = '#1E293B';
    footerP.style.color = '#F4F7F9';
    videoProj.style.border = '1px solid black';

    for (let i = 0; i < imgProj.length; i++) {
        imgProj[i].style.border = '1px solid black';
    }

    for (let i = 0; i < divTecnologia.length; i++) {
        divTecnologia[i].style.border = '1px solid black';
    }

    for (let i = 0; i < h2.length; i++) {
        h2[i].style.color = 'black';
    }

    for (let i = 0; i < h3.length; i++) {
        h3[i].style.color = 'black';
    }

    for (let i = 0; i < linksProj.length; i++) {
        linksProj[i].style.backgroundColor = '#F77F00';
        linksProj[i].addEventListener('mouseenter', () => {
            linksProj[i].style.backgroundColor = '#D86900';
        });
        linksProj[i].addEventListener('mouseleave', () => {
            linksProj[i].style.backgroundColor = '#F77F00';
        });
    }

    for (let i = 0; i < linksRepo.length; i++) {
        linksRepo[i].style.backgroundColor = '#0077B6';
        linksRepo[i].addEventListener('mouseenter', () => {
            linksRepo[i].style.backgroundColor = '#005A8D';
        });
        linksRepo[i].addEventListener('mouseleave', () => {
            linksRepo[i].style.backgroundColor = '#0077B6';
        });
    }

    for (let i = 0; i < strong.length; i++) {
        strong[i].style.color = '#F77F00';
    }

    for (let i = 0; i < section.length; i++) {
        section[i].style.backgroundColor = '#FFFFFF';
        section[i].style.border = '1px solid black';
    }

    for (let i = 0; i < p.length; i++) {
        p[i].style.color = '#1E293B';
    }

    for (let i = 0; i < linksPag.length; i++) {
        linksPag[i].style.backgroundColor = '#005A8D';
        linksPag[i].style.color = '#F77F00';
        linksPag[i].addEventListener('mouseenter', () => {
            linksPag[i].style.backgroundColor = '#D86900';
            linksPag[i].style.color = 'white';
        });
        linksPag[i].addEventListener('mouseleave', () => {
            linksPag[i].style.backgroundColor = '#005A8D';
            linksPag[i].style.color = '#F77F00';
        });
    }
    
    btnLinksPag.addEventListener('click', () => {
        if (btnLinksPag.className === 'close') {
            btnLinksPag.innerHTML = 
            `
                <img src="assets/imgs/menu-dark-mode.png" alt="Menu" id="imgMenu">
            `;
        } else {
            btnLinksPag.innerHTML = 
            `
                <img src="assets/imgs/menu-white.png" alt="Menu" id="imgMenu">
            `;
        }
    });
});

btnDarkMode.addEventListener('click', () => {
    body.style.backgroundColor = '#121721';
    header.style.backgroundColor = '#0D131A';
    header.style.color = '#E5E7EB';
    conteudoInicio.style.backgroundColor = 'rgba(0, 0, 0, 0.502)';
    btnLinksPag.style.backgroundColor = '#0D131A';
    imgMenu.src = 'assets/imgs/menu-dark-mode.png';
    footer.style.backgroundColor = '#0D131A';
    videoProj.style.border = '1px solid #00A6FB';

    for (let i = 0; i < imgProj.length; i++) {
        imgProj[i].style.border = '1px solid #00A6FB';
    }

    btnLinksPag.addEventListener('click', () => {
        if (btnLinksPag.className === 'close') {
            btnLinksPag.innerHTML = 
            `
                <img src="assets/imgs/menu-dark-mode.png" alt="Menu" id="imgMenu">
            `;
        } else {
            btnLinksPag.innerHTML = 
            `
                <img src="assets/imgs/menu-white.png" alt="Menu" id="imgMenu">
            `;
        }
    });

    for (let i = 0; i < divTecnologia.length; i++) {
        divTecnologia[i].style.border = '1px solid #00A6FB';
    }

    for (let i = 0; i < h2.length; i++) {
        h2[i].style.color = '#ADB5BD';
    }

    for (let i = 0; i < h3.length; i++) {
        h3[i].style.color = '#ADB5BD';
    }

    for (let i = 0; i < linksProj.length; i++) {
        linksProj[i].style.backgroundColor = '#FF9100';
        linksProj[i].addEventListener('mouseenter', () => {
            linksProj[i].style.backgroundColor = '#D67800';
        });
        linksProj[i].addEventListener('mouseleave', () => {
            linksProj[i].style.backgroundColor = '#FF9100';
        });
    }

    for (let i = 0; i < linksRepo.length; i++) {
        linksRepo[i].style.backgroundColor = '#00A6FB';
        linksRepo[i].addEventListener('mouseenter', () => {
            linksRepo[i].style.backgroundColor = '#0077B6';
        });
        linksRepo[i].addEventListener('mouseleave', () => {
            linksRepo[i].style.backgroundColor = '#00A6FB';
        });
    }

    for (let i = 0; i < strong.length; i++) {
        strong[i].style.color = '#FF9100';
    }

    for (let i = 0; i < section.length; i++) {
        section[i].style.backgroundColor = '#1C2532';
        section[i].style.border = '1px solid white';
    }

    for (let i = 0; i < p.length; i++) {
        p[i].style.color = '#E5E7EB';
    }

    for (let i = 0; i < linksPag.length; i++) {
        linksPag[i].style.backgroundColor = '#0D131A';
        linksPag[i].style.color = '#F77F00';
        linksPag[i].addEventListener('mouseenter', () => {
            linksPag[i].style.backgroundColor = '#D67800';
            linksPag[i].style.color = 'white';
        });
        linksPag[i].addEventListener('mouseleave', () => {
            linksPag[i].style.backgroundColor = '#0D131A';
            linksPag[i].style.color = '#F77F00';
        });
    }
});

btnLightMode.addEventListener('mouseenter', () => {
    imgLightMode.src = 'assets/imgs/sol-light-mode-white.png';
});

btnLightMode.addEventListener('mouseleave', () => {
    imgLightMode.src = 'assets/imgs/sol-light-mode.png';
});

btnDarkMode.addEventListener('mouseenter', () => {
    imgDarkMode.src = 'assets/imgs/lua-dark-mode-white.png';
});

btnDarkMode.addEventListener('mouseleave', () => {
    imgDarkMode.src = 'assets/imgs/lua-dark-mode.png';
});