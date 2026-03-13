console.log("🚀 O client.js do Lembrete carregou com sucesso!");

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    console.log("Trello pediu os botões e nós enviamos!");
    
    return [{
      // Usando um ícone nativo e seguro do próprio Trello (um checklistzinho)
      icon: 'https://a.trellocdn.com/prgb/dist/images/tips/info-image-03@1x.png', 
      text: 'Lembrete de Checklist',
      callback: function(t) {
        return t.popup({
          title: 'Agendar Lembrete',
          url: './popup.html',
          height: 250
        });
      }
    }];
  }
});
