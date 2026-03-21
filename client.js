console.log("🚀 Lembrete v4.0 - Com Desfibrilador Anti-Ghost");

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: './icone.svg',
      text: 'Agendar Lembrete',
      callback: function(t) {
        return t.popup({ 
          title: 'Agendar Lembrete', 
          url: './popup.html?v=40', // 🚀 Versão 40
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
        url: t.signUrl('./section.html?v=40'), // 🚀 Versão 40
        height: 120
      }
    };
  }
});
