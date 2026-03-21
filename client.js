console.log("🚀 Lembrete v2.0 Carregado!");

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: './icone.svg',
      text: 'Agendar Lembrete',
      callback: function(t) {
        return t.popup({ 
          title: 'Agendar Lembrete', 
          url: './popup.html',
          height: 500
        });
      }
    }];
  },
  'card-back-section': function(t, options) {
    return {
      title: '📅 Lembretes Agendados',
      icon: './icone.svg', 
      content: {
        type: 'iframe',
        url: t.signUrl('./section.html?v=10'), 
        height: 100
      }
    };
  }
});
