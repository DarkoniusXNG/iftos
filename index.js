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
    // const abilities2 = VDF.parse(result.body);
    // const abilities3 = valveKV.deserialize(result.body);
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
    const items1 = parseKV(result.body); // parse-kv doesn't parse item_trident correctly
    // const items2 = VDF.parse(result.body);
    // const items3 = valveKV.deserialize(result.body);
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
    // const heroes2 = VDF.parse(result.body);
    // const heroes3 = valveKV.deserialize(result.body);
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
    // const abilitytooltips2 = VDF.parse(result.body.replace(/" and turn rate reduced by %dMODIFIER_PROPERTY_TURN_RATE_PERCENTAGE%%%\./g, ' and turn rate reduced by %dMODIFIER_PROPERTY_TURN_RATE_PERCENTAGE%%%."'));
    // const abilitytooltips3 = valveKV.deserialize(result.body); // valve-kv ignores text outside of quotes
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
    // const dotatooltips2 = VDF.parse(result.body);
    // const dotatooltips3 = valveKV.deserialize(result.body);
    cb(null, dotatooltips2);
  });
}

dotaAbilities(function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(data.DOTAAbilities.abaddon_borrowed_time);
  // console.log(data.DOTAAbilities.invoker_forge_spirit.AbilityValues.spirit_hp);
});
dotaItems(function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(data.DOTAAbilities.item_trident);
});
dotaHeroes(function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(data.DOTAHeroes.npc_dota_hero_lion);
});
abilityTooltipsEnglish(function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(data.lang.Tokens.DOTA_Tooltip_modifier_nevermore_shadowraze_debuff_description);
  // console.log(data.lang.Tokens.DOTA_Tooltip_modifier_nevermore_requiem_slow);
});
dotaTooltipsEnglish(function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(data.lang.Tokens);
});
