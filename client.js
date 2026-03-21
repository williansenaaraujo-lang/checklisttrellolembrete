console.log("🚀 Lembrete v3.0 - Sistema Híbrido");

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: './icone.svg',
      text: 'Agendar Lembrete',
      callback: function(t) {
        return t.popup({ 
          title: 'Agendar Lembrete', 
          url: './popup.html?v=30', // 🚀 Fura-Cache 30
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
        url: t.signUrl('./section.html?v=30'), // 🚀 Fura-Cache 30
        height: 120
      }
    };
  }
});
