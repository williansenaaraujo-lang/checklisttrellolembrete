/* global TrelloPowerUp */

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://cdn.icon-icons.com/icons2/1368/PNG/512/-clock_90432.png', // Ícone de relógio
      text: 'Lembrete de Checklist',
      callback: function(t) {
        return t.popup({
          title: 'Agendar Lembrete',
          url: './popup.html', // Vamos criar esta telinha no próximo passo!
          height: 250
        });
      }
    }];
  }
});
