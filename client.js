console.log("🚀 Lembrete v2.1 - O Destruidor de Cache Definitivo");

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: './icone.svg',
      text: 'Agendar Lembrete',
      callback: function(t) {
        return t.popup({ 
          title: 'Agendar Lembrete', 
          // 💥 O SEGREDO ESTAVA AQUI: Forçando o Trello a baixar o popup novo!
          url: './popup.html?v=99', 
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
        url: t.signUrl('./section.html?v=99'), 
        height: 120
      }
    };
  }
});
