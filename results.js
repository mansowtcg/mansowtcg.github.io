// Esqueleto vacío. Los resultados reales se cargan automáticamente desde
// openfootball/worldcup.json en cuanto haya partidos jugados (lo hace
// applyAutoResultsFromOpenFootball en app.js). Solo edita a mano si quieres
// rellenar la Bota de Oro / Balón de Oro al final del torneo.
const RESULTS = {
  groups: {},
  thirdPlace: [],
  groupMatches: {},

  knockout: {
    matches: {
      round32: [],
      round16: [],
      quarterfinals: [],
      semifinals: [],
      thirdPlace: [],
      final: []
    }
  },

  awards: {
    goldenBoot: ['', '', ''],
    goldenBall: ['', '', '']
  }
};
