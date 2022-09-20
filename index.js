const request = require('request');
const parseKV = require('parse-kv');
const VDF = require('vdf-parser');
const valveKV = require('valve-kv');

function dotaAbilities (cb) {
  request.get({
    url: 'https://raw.githubusercontent.com/SteamDatabase/GameTracking-Dota2/master/game/dota/pak01_dir/scripts/npc/npc_abilities.txt'
  }, function (err, result) {
    if (err) {
      return cb(err);
    }
    const abilities1 = parseKV(result.body.replace(/redirect_range_scepter/g, '"redirect_range_scepter"'));
    const abilities2 = VDF.parse(result.body);
    const abilities3 = valveKV.deserialize(result.body);
    // if (abilities1) { console.log('parse-kv works'); }
    // if (abilities2) { console.log('vdf-parser works'); }
    // if (abilities3) { console.log('valve-kv works'); }
    cb(null, abilities1);
  });
}

function dotaItems (cb) {
  request.get({
    url: 'https://raw.githubusercontent.com/SteamDatabase/GameTracking-Dota2/master/game/dota/pak01_dir/scripts/npc/items.txt'
  }, function (err, result) {
    if (err) {
      return cb(err);
    }
    const items1 = parseKV(result.body);
    const items2 = VDF.parse(result.body);
    const items3 = valveKV.deserialize(result.body);
    // if (items1) { console.log('parse-kv works'); }
    // if (items2) { console.log('vdf-parser works'); }
    // if (items3) { console.log('valve-kv works'); }
    cb(null, items1);
  });
}

function dotaHeroes (cb) {
  request.get({
    url: 'https://raw.githubusercontent.com/SteamDatabase/GameTracking-Dota2/master/game/dota/pak01_dir/scripts/npc/npc_heroes.txt'
  }, function (err, result) {
    if (err) {
      return cb(err);
    }
    const heroes1 = parseKV(result.body);
    const heroes2 = VDF.parse(result.body);
    const heroes3 = valveKV.deserialize(result.body);
    // if (heroes1) { console.log('parse-kv works'); }
    // if (heroes2) { console.log('vdf-parser works'); }
    // if (heroes3) { console.log('valve-kv works'); }
    cb(null, heroes1);
  });
}

function abilityTooltipsEnglish (cb) {
  request.get({
    url: 'https://raw.githubusercontent.com/SteamDatabase/GameTracking-Dota2/master/game/dota/pak01_dir/resource/localization/abilities_english.txt'
  }, function (err, result) {
    if (err) {
      return cb(err);
    }
    const abilitytooltips1 = parseKV(result.body.replace(/" and turn rate reduced by %dMODIFIER_PROPERTY_TURN_RATE_PERCENTAGE%%%\./g, ' and turn rate reduced by %dMODIFIER_PROPERTY_TURN_RATE_PERCENTAGE%%%."'));
    const abilitytooltips2 = VDF.parse(result.body.replace(/" and turn rate reduced by %dMODIFIER_PROPERTY_TURN_RATE_PERCENTAGE%%%\./g, ' and turn rate reduced by %dMODIFIER_PROPERTY_TURN_RATE_PERCENTAGE%%%."'));
    const abilitytooltips3 = valveKV.deserialize(result.body);
    // if (abilitytooltips1) { console.log('parse-kv works'); }
    // if (abilitytooltips2) { console.log('vdf-parser works'); }
    // if (abilitytooltips3) { console.log('valve-kv works'); }
    cb(null, abilitytooltips1);
  });
}

function dotaTooltipsEnglish (cb) {
  request.get({
    url: 'https://raw.githubusercontent.com/SteamDatabase/GameTracking-Dota2/master/game/dota/pak01_dir/resource/localization/dota_english.txt'
  }, function (err, result) {
    if (err) {
      return cb(err);
    }
    const dotatooltips1 = parseKV(result.body);
    const dotatooltips2 = VDF.parse(result.body);
    const dotatooltips3 = valveKV.deserialize(result.body);
    // if (dotatooltips1) { console.log('parse-kv works'); }
    // if (dotatooltips2) { console.log('vdf-parser works'); }
    // if (dotatooltips3) { console.log('valve-kv works'); }
    cb(null, dotatooltips1);
  });
}

dotaAbilities(function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(data.DOTAAbilities);
});
dotaItems(function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(data.DOTAAbilities);
});
dotaHeroes(function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(data.DOTAHeroes);
});
abilityTooltipsEnglish(function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(data.lang.Tokens);
});
dotaTooltipsEnglish(function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(data.lang.Tokens);
});
