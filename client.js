console.log("🚀 Lembrete de Checklist carregado!");

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      // Agora o Trello confia, pois a imagem vem da mesma pasta do código!
      icon: './icone.svg', 
      text: 'Lembrete de Checklist',
      callback: function(t) {
        return t.popup({
          title: 'Agendar Lembrete',
          url: './popup.html'
        });
      }
    }];
  }
});
