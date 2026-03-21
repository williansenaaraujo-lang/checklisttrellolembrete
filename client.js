console.log("🚀 Lembrete de Checklist carregado com Painel Fixo!");

TrelloPowerUp.initialize({
  // 1. O Botão de sempre para abrir o popup de agendar
  'card-buttons': function(t, options) {
    return [{
      icon: './icone.svg',
      text: 'Agendar Lembrete',
      callback: function(t) {
        return t.popup({ 
          title: 'Agendar Lembrete', 
          url: './popup.html',
          height: 500 // 🚀 A MÁGICA AQUI: Aumentamos a altura do popup!
        });
      }
    }];
  },
  
  // 2. A MÁGICA: O Painel fixo dentro do corpo do cartão!
  'card-back-section': function(t, options) {
   return {
      title: '📅 Lembretes Agendados',
      icon: './icone.svg', 
      content: {
        type: 'iframe',
        url: t.signUrl('./section.html?v=4'), // 🚀 FORÇANDO A VERSÃO 3
        height: 100
      }
    };
  }
});
