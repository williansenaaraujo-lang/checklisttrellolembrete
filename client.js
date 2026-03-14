console.log("🚀 Lembrete de Checklist carregado!");

// Desenhamos o ícone de calendário direto no código (formato SVG) para não ter erro de bloqueio
var iconeCalendario = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23b6c2cf' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E";

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: iconeCalendario,
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
