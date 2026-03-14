console.log("🚀 Lembrete de Checklist carregado!");

// Usando um link externo direto e confiável para o ícone
var linkDoIcone = "https://img.icons8.com/color/48/calendar--v1.png";

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: linkDoIcone,
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
