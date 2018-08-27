// importante verificar se o navegador suporta service workers.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
            // IMPORTANTE: O diretório passado é relativo
            //  a URL, não ao arquivo app.js
            .register('./sw.js')
              .then(function() { console.log('Service Worker registrado ! :)'); })
              .catch(function(e) { console.error(e); });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
            .register('./service-worker.js')
              .then(function() { console.log('Service Worker registrado ! :)'); })
              .catch(function(e) { console.error(e); });

  navigator.serviceWorker.oncontrollerchange = function(controllerchangeevent) {
    // aqui dentro podemos disparar algum evento em uma 
    //  store por exemplo para o usuário saber que existe
    //  novas funcionalidades esperando pelo seu refresh
    alert("Atualize sua página para ter acesso a um conteúdo mais novo");  
  }
}
