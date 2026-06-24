var listaVideos = [
    { id: "dQw4w9WgXcQ", titulo: "Início - Rick Astley" },
    { id: "kJQP7kiw5Fk", titulo: "Música LoFi Chill" },
    { id: "9bZkp7q19f0", titulo: "Ajuda e Suporte" },
    { id: "09R8_2nJtjg", titulo: "Configurações" }
];

var indexSelecionado = 0;
var playerAtivo = false;

window.onload = function() {
    renderizarMenu();
    configurarControleRemoto();
};

function renderizarMenu() {
    var sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = '';

    listaVideos.forEach(function(video, posicao) {
        var btn = document.createElement('div');
        btn.className = 'menu-item';
        btn.id = 'menu-' + posicao;
        btn.setAttribute('tabindex', '0');

        var iconePath = "M8 5v14l11-7z"; 

        btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="' + iconePath + '"/></svg><span>' + video.titulo.split(' - ')[0] + '</span>';

        btn.onclick = function() {
            selecionarItem(posicao);
            playVideo(video.id);
        };

        sidebar.appendChild(btn);
    });

    adicionarBotaoGemini(sidebar);
}

function adicionarBotaoGemini(sidebar) {
    var posicao = listaVideos.length;
    var btn = document.createElement('div');
    btn.className = 'menu-item gemini-btn';
    btn.id = 'menu-' + posicao;
    btn.setAttribute('tabindex', '0');
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 2a1 1 0 0 1 .93.64l1.92 4.8a2 2 0 0 0 1.1 1.1l4.8 1.92a1 1 0 0 1 0 1.86l-4.8 1.92a2 2 0 0 0-1.1 1.1l-1.92 4.8a1 1 0 0 1-1.86 0l-1.92-4.8a2 2 0 0 0-1.1-1.1l-4.8-1.92a1 1 0 0 1 0-1.86l4.8-1.92a2 2 0 0 0 1.1-1.1l1.92-4.8A1 1 0 0 1 12 2z"/></svg><span>Gemini</span>';
    
    btn.onclick = function() {
        selecionarItem(posicao);
        chamarGemini();
    };
    sidebar.appendChild(btn);
}

function selecionarItem(posicao) {
    var itens = document.querySelectorAll('.menu-item');
    for (var i = 0; i < itens.length; i++) {
        itens[i].classList.remove('active');
    }
    
    indexSelecionado = posicao;
    var itemAtual = document.getElementById('menu-' + posicao);
    if (itemAtual) itemAtual.classList.add('active');
}

function playVideo(videoId) {
    var player = document.getElementById('tv-player');
    if (player) {
        player.src = "https://youtu.be/qlzcHe_gusE?si=JDzuaE6_TPlvyOdZ" + videoId + "?autoplay=1&controls=1";
        playerAtivo = true;
    }
}

function chamarGemini() {
    var container = document.getElementById('video-player-container');
    if (container) {
        // Centralização absoluta perfeita para navegadores antigos
        container.innerHTML = '<div style="position:absolute;top:0;left:0;width:100%;height:100%;background:#181818;color:#8ab4f8;font-family:sans-serif;text-align:center;padding-top:15%;box-sizing:border-box;"><h1 style="font-size:36px;margin-bottom:10px;font-weight:normal;">Gemini AI</h1><p style="color:#8e8e8e;font-size:16px;width:70%;margin:0 auto;line-height:1.6;">Modo Web App Adaptável Ativo!<br>Interface limpa, minimalista e balanceada para a sua TV.</p></div>';
        playerAtivo = true;
    }
}

function stopVideo() {
    var container = document.getElementById('video-player-container');
    if (container) {
        container.innerHTML = '<iframe id="tv-player" src="" allowfullscreen style="width:100%;height:100%;border:none;background-color:#101010;"></iframe>';
        playerAtivo = false;
    }
}

function configurarControleRemoto() {
    document.onkeydown = function(e) {
        var ev = e || window.event;
        var totalBotoes = listaVideos.length + 1;

        if (ev.keyCode === 45 || ev.keyCode === 10009) { 
            if (playerAtivo) {
                if (ev.preventDefault) ev.preventDefault();
                stopVideo();
                return false;
            }
        }

        if (ev.keyCode === 38) { // CIMA
            if (indexSelecionado > 0) selecionarItem(indexSelecionado - 1);
        } else if (ev.keyCode === 40) { // BAIXO
            if (indexSelecionado < totalBotoes - 1) selecionarItem(indexSelecionado + 1);
        } else if (ev.keyCode === 13) { // OK
            var itemAtivo = document.getElementById('menu-' + indexSelecionado);
            if (itemAtivo) {
                if (indexSelecionado === listaVideos.length) {
                    chamarGemini();
                } else {
                    playVideo(listaVideos[indexSelecionado].id);
                }
            }
        }
    };
}
    });

    adicionarBotaoGemini(sidebar);
}

function adicionarBotaoGemini(sidebar) {
    var posicao = listaVideos.length;
    var btn = document.createElement('div');
    btn.className = 'menu-item gemini-btn';
    btn.id = 'menu-' + posicao;
    btn.setAttribute('tabindex', '0');
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 2a1 1 0 0 1 .93.64l1.92 4.8a2 2 0 0 0 1.1 1.1l4.8 1.92a1 1 0 0 1 0 1.86l-4.8 1.92a2 2 0 0 0-1.1 1.1l-1.92 4.8a1 1 0 0 1-1.86 0l-1.92-4.8a2 2 0 0 0-1.1-1.1l-4.8-1.92a1 1 0 0 1 0-1.86l4.8-1.92a2 2 0 0 0 1.1-1.1l1.92-4.8A1 1 0 0 1 12 2z"/></svg><span>Gemini</span>';
    
    btn.onclick = function() {
        selecionarItem(posicao);
        chamarGemini();
    };
    sidebar.appendChild(btn);
}

function selecionarItem(posicao) {
    var itens = document.querySelectorAll('.menu-item');
    for (var i = 0; i < itens.length; i++) {
        itens[i].classList.remove('active');
    }
    
    indexSelecionado = posicao;
    var itemAtual = document.getElementById('menu-' + posicao);
    if (itemAtual) itemAtual.classList.add('active');
}

function playVideo(videoId) {
    var player = document.getElementById('tv-player');
    if (player) {
        player.src = "//www.youtube-nocookie.com/embed/" + videoId + "?autoplay=1&controls=1";
        playerAtivo = true;
    }
}

function chamarGemini() {
    var container = document.getElementById('video-player-container');
    if (container) {
        // Centralização absoluta perfeita para navegadores antigos
        container.innerHTML = '<div style="position:absolute;top:0;left:0;width:100%;height:100%;background:#181818;color:#8ab4f8;font-family:sans-serif;text-align:center;padding-top:15%;box-sizing:border-box;"><h1 style="font-size:36px;margin-bottom:10px;font-weight:normal;">Gemini AI</h1><p style="color:#8e8e8e;font-size:16px;width:70%;margin:0 auto;line-height:1.6;">Modo Web App Adaptável Ativo!<br>Interface limpa, minimalista e balanceada para a sua TV.</p></div>';
        playerAtivo = true;
    }
}

function stopVideo() {
    var container = document.getElementById('video-player-container');
    if (container) {
        container.innerHTML = '<iframe id="tv-player" src="" allowfullscreen style="width:100%;height:100%;border:none;background-color:#101010;"></iframe>';
        playerAtivo = false;
    }
}

function configurarControleRemoto() {
    document.onkeydown = function(e) {
        var ev = e || window.event;
        var totalBotoes = listaVideos.length + 1;

        if (ev.keyCode === 45 || ev.keyCode === 10009) { 
            if (playerAtivo) {
                if (ev.preventDefault) ev.preventDefault();
                stopVideo();
                return false;
            }
        }

        if (ev.keyCode === 38) { // CIMA
            if (indexSelecionado > 0) selecionarItem(indexSelecionado - 1);
        } else if (ev.keyCode === 40) { // BAIXO
            if (indexSelecionado < totalBotoes - 1) selecionarItem(indexSelecionado + 1);
        } else if (ev.keyCode === 13) { // OK
            var itemAtivo = document.getElementById('menu-' + indexSelecionado);
            if (itemAtivo) {
                if (indexSelecionado === listaVideos.length) {
                    chamarGemini();
                } else {
                    playVideo(listaVideos[indexSelecionado].id);
                }
            }
        }
    };
}
