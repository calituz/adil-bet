const { Match, Bet } = require('../../db.js');

async function getMatchs(league, teams, country){
    let attributes = {}

    console.log(league, teams, country);
    
      // Filters
      if(league) attributes['league'] = league;
      if(country) attributes['country'] = country;
      
    // Find matchs
    let allMatchs = await Match.findAll({ where: attributes,
        include: {
            model: Bet,
            attributes: [
              'amount',
            ],
          }, 
    })

    if(!allMatchs) throw new Error('No existen partidos con esos filtros');

    // Team Filter
    if(teams){
        allMatchs = allMatchs.filter(m => {
            if(m.dataValues.homeTeam === teams) return true;
            if(m.dataValues.awayTeam === teams) return true;
        });
    }

    if(!allMatchs) throw new Error('No existen partidos con esos filtros');

    return allMatchs;
}

module.exports = getMatchs;