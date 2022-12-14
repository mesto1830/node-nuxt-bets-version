export const apimixin = value => ({
  data() {
    return {
      leagues: {},
      leaguesLength: 0,
      search: {},
      lid: null,
      mid: null,
      newlimit: null
    }
  },
  methods: {
    transCountries(value) {
      value.forEach(item => {
        let RegionName = item.RegionName
          .replace('Algeria', 'Cezayir')
          .replace('Armenia', 'Ermenistan')
          .replace('Argentina', 'Arjantin')
          .replace('Albania', 'Arnavutluk')
          .replace('Africa', 'Afrika')
          .replace('Australia', 'Avusturalya')
          .replace('Avusturalya & Oceania', 'Avusturalya')
          .replace('Austria', 'Avusturya')
          .replace('Azerbaijan', 'Azerbaycan')
          .replace('Belarus', 'Beyaz Rusya')
          .replace('Bolivia', 'Bolivya')
          .replace('Bosnia and Herzegovina', 'Bosna Hersek')
          .replace('Brazil', 'Brezilya')
          .replace('Bulgaria', 'Bulgaristan')
          .replace('Canada', 'Kanada')
          .replace('Cameroon', 'Kamerun')
          .replace('Cape Verde', 'Fildişi Sahili')
          .replace("Côte d'Ivoire", 'Fildişi Sahili')
          .replace('Colombia', 'Kolombiya')
          .replace('China', 'Çin')
          .replace('Cambodia', 'Kamboçya')
          .replace('Chile', 'Şili')
          .replace('Costa Rica', 'Kosta Rika')
          .replace('Cyprus', 'Kıbrıs')
          .replace('Croatia', 'Hırvatistan')
          .replace('Czech Republic', 'Çek Cumhuriyeti')
          .replace('Czech Rep.', 'Çek Cumhuriyeti')
          .replace('Belgium', 'Belçika')
          .replace('Denmark', 'Danimarka')
          .replace('Dominican Republic', 'Dominik Cumhuriyeti')
          .replace('DR Congo', 'Kongo')
          .replace('Ecuador', 'Ekvator')
          .replace('Egypt', 'Mısır')
          .replace('England', 'İngiltere')
          .replace('Estonia', 'Estonya')
          .replace('Ethiopia', 'Etyopya')
          .replace('Europe', 'Avrupa')
          .replace('France', 'Fransa')
          .replace('Faroe Islands', 'Faroe Adaları')
          .replace('FYR of Macedonia', 'Makedonya')
          .replace('Georgia', 'Gürcistan')
          .replace('Germany', 'Almanya')
          .replace('Ghana', 'Gana')
          .replace('Greece', 'Yunanistan')
          .replace('Hungary', 'Macaristan')
          .replace('Italy', 'İtalya')
          .replace('Iceland', 'İzlanda')
          .replace('India', 'Hindistan')
          .replace('Indonesia', 'Endenozya')
          .replace('International', 'Uluslararası')
          .replace('Iraq', 'Irak')
          .replace('Iran', 'İran')
          .replace('Israel', 'İsrail')
          .replace('Ivory Coast', 'Fildişi Sahili')
          .replace('Japan', 'Japonya')
          .replace('Jordan', 'Urdün')
          .replace('Kazakhstan', 'Kazakistan')
          .replace('Korea Republic', 'Kore Cumhuriyeti')
          .replace('Kosovo', 'Kosova')
          .replace('Korea (South)', 'Güney Kore')
          .replace('Kongo', 'Kongo Cumhuriyeti')
          .replace('Kyrgyzstan', 'Kırgızistan')
          .replace('Latvia', 'Letonya')
          .replace('Lebanon', 'Lübnan')
          .replace('Lithuania', 'Litvanya')
          .replace('Malaysia', 'Malezya')
          .replace('Mauritania', 'Marutanya')
          .replace('Mexico', 'Meksika')
          .replace('Moldova', 'Moldovya')
          .replace('Morocco', 'Fas')
          .replace('Maldives', 'Maldivler')
          .replace('Netherlands', 'Hollanda')
          .replace('New Caledonia', 'Yeni Kaledonya')
          .replace('New Zealand', 'Yeni Zellanda')
          .replace('Northern Ireland', 'Kuzey irlanda')
          .replace('North & Central America', 'Orta Amerika')
          .replace('North America', 'Kuzey Amerika')
          .replace('Norway', 'Norveç')
          .replace('Nicaragua', 'Nikaraguay')
          .replace('Nigeria', 'Nijerya')
          .replace('Oman', 'Umman')
          .replace('Qatar', 'Katar')
          .replace('Poland', 'Polonya')
          .replace('Portugal', 'Portekiz')
          .replace('Republic of Ireland', 'irlanda Cumhuriyeti')
          .replace('Republic of the Congo', 'Kongo Cumhuriyeti')
          .replace('Russia', 'Rusya')
          .replace('Romania', 'Romanya')
          .replace('Réunion', 'Reunion')
          .replace('Saudi Arabia', 'Sudi Arabistan')
          .replace('Palestine', 'Filistin')
          .replace('Turkey', 'Türkiye')
          .replace('Seychelles', 'Seyşeller')
          .replace('Switzerland', 'İsviçre')
          .replace('Spain', 'İspanya')
          .replace('Sweden', 'İsveç')
          .replace('South Korea', 'Güney Kore')
          .replace('South Afrika', 'Güney Afrika')
          .replace('South America', 'Güney Amerika')
          .replace('Slovakia', 'Slovakya')
          .replace('Serbia', 'Sırbistan')
          .replace('Scotland', 'iskoçya')
          .replace('Syria', 'Suriye')
          .replace('Tanzania', 'Tanzanya')
          .replace('Taiwan', 'Tayvan')
          .replace('Tajikistan', 'Tacikistan')
          .replace('Thailand', 'Tayland')
          .replace('Tunisia', 'Tunus')
          .replace('Ukraine', 'Ukrayna')
          .replace('United Arab Emirates', 'Birleşik Arap Emirlikleri')
          .replace('Wales', 'Galler')
          .replace('World', 'Dünya')
        item.RegionName = RegionName
      })
    },
    transMarkets(value) {
      value.forEach(item => {
        if (item.name) {
          const Name = item.name.value
            .replace('Total Goal Bands 1st Half', 'İlk Yarı Gol Aralıgı')
            .replace('Total Goal Bands', 'Toplam Gol Aralıgı')
            .replace('Rest of the Match – Current Score', 'Maçın Kalanı Skor')
            .replace('Rest of the Half – Current result', 'İlk Yarı Kalanı Skor')
            .replace('Handicap', 'Handikap')
            .replace('Half Time Handikap', 'İlk Yarı Handikap')
            .replace('Rest of the Match First Half – Current Score', 'İlk Yarı Kalanı Skor')
            .replace('Rest of the Match – Current Score', 'Maçın Kalanı Skor')
            .replace('Red Card', 'Kırmızı Kart')
            .replace('Yellow Card', 'Sarı Kart')
            .replace('1st', '1.')
            .replace('2nd', '2.')
            .replace('3rd', '3.')
            .replace('4th', '4.')
            .replace('5th', '5.')
            .replace('6th', '6.')
            .replace('7th', '7.')
            .replace('8th', '8.')
            .replace('9th', '9.')
            .replace('10th', '10.')
          item.name.value = Name
        }
      })
    },
    transOdds(value) {
      value.forEach(item => {
        item.results.forEach(item2 => {
          const oddoptions = item2.name.value
            .replace('No yellow card', 'Sarıkart Olmaz')
            .replace('Both at the same time', 'Aynı Zamanda')
            .replace('Draw & No', 'Beraberlik & Yok')
            .replace('Equal number of corners', 'Eşitlik')
            .replace('Equal no. of goals', 'Eşitlik')
            .replace('1st half', 'İlk Yarı')
            .replace('2nd half', 'İkinci Yarı')
            .replace('Under', 'Alt')
            .replace('Over', 'Üst')
            .replace('Draw', 'Beraberlik')
            .replace('Even', 'Çift')
            .replace('Odd', 'Tek')
            .replace('Yes', 'Evet')
            .replace('Tie', 'Eşit')
            .replace('Kick', 'Ayakla')
            .replace('Free kick', 'Serbest Vuruş')
            .replace('Header', 'Kafayla')
            .replace('X / X', 'Beraberlik / Beraberlik')
            .replace('/ X', '/ Beraberlik')
            .replace('X /', 'Beraberlik /')
            .replace('X or ', 'Beraberlik & ')
            .replace('or X', '& Beraberlik')
            .replace(' or more goals', ' & Üstü')
            .replace(' or ', ' & ')
            .replace('Own Gol', 'Kendi Kalesine')
            .replace('less', 'Daha Az')
            .replace('1st Quarter', '1.Çeyrek')
            .replace('2nd Quarter', '2.Çeyrek')
            .replace('3rd Quarter', '3.Çeyrek')
            .replace('4th Quarter', '4.Çeyrek')
            .replace(' more', 'Üstü')
            .replace('Any other score', 'Farklı Skor')
            .replace('Equal number of yellow cards', 'Eşitlik')
            .replace('More corners ', '')
            .replace('No corner', 'Korner Olmaz')
            .replace('No penalty', 'Penaltı Olmaz')
            .replace('Team 1 to win and over 2,5 combined goals scored in the game', 'Evsahibi/Üst')
            .replace('Team 1 to win and under 2,5 combined goals scored in the game', 'Evsahibi/Alt')
            .replace('Team 2 to win and over 2,5 combined goals scored in the game', 'Deplasman/Üst')
            .replace('Team 2 to win and under 2,5 combined goals scored in the game', 'Deplasman/Alt')
            .replace('Team 1 to win and over 3,5 combined goals scored in the game', 'Evsahibi/Üst')
            .replace('Team 1 to win and under 3,5 combined goals to be scored in the game', 'Evsahibi/Alt')
            .replace('Team 2 to win and over 3,5 combined goals scored in the game', 'Deplasman/Üst')
            .replace('Team 2 to win and under 3,5 combined goals scored in the game', 'Deplasman/Alt')
            .replace('Neither team wins both halves', 'Hiçbiri')
            .replace('Team 1 to win by any other score', 'Evsahibi/Farklı Skor')
            .replace('Team 2 to win by any other score', 'Delasman/Farklı Skor')
            .replace(' to win and both teams to score', '/Var')
            .replace(' to win to nil', '/Yok')
            .replace('Both teams not to score', 'Gol Olmaz')
            .replace('Both teams to score and the match to end in a draw', 'Beraberlik/Var')
            .replace('No corner', 'Korner Olmaz')
            .replace('No goal', 'Gol Olmaz')
            .replace(/^[No]{2}$/, 'Hayır')
            .replace('goals', 'Gol')
            .replace('goal', 'Gol')
          item2.name.value = oddoptions
        })
        item.results.sort((a, b) => {
          if (a.name.value.substring(0, 3) === 'Alt') {
            return a.name.value > b.name.value ? 1 : -1
          }
        })
      })
    },
    getFlags(value) {
      try {
        return require(`~/static/img/${value}.png`)
      } catch (error) {
        return require(`~/static/img/Dünya.png`)
      }
    },
    setGroup(arr, value) {
      return arr.reduce(function (acc, obj) {
        let key = obj[value];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});
    }
  }
})