# Genesys / Star Wars RPG Statblocks (TTRPG Statblocks)
This is a Statblock Layout for the TTRPG Statblocks plugin for Obsidian. It requires both the plugin and one of Craftidore's dice snippets to be installed. 

## Features / Functionalities
* Dice Pool calculations for primary skills (nemesis / rivals)
* Dice Pool skill calculations for type minion quantity (minion)
* Health calculations for type minion quantity (minion)
* Interactive wounds counter which adjusts minion dice pools.

## To install
1. Download [this json](https://github.com/Craftidore/Obsidian-Genesys/blob/3b7c9165a54b63db6cc52dc0ad8eeb28827f6724/TTRPG-Statblock-Layout/jsons/Genesys.json).
2. In the TTRPG Statblocks plugin settings, select 'Import from JSON,' and select the downloaded json file.

# Usage
A statblock may be defined in a note using the syntax below. Please refer to the TTRPG Statblocks README for general guidance.

All fields are optional, though many are required for effective use of the statblock layout.

The Genesys / Star Wars RPG Layout includes the following sections:
* name
* type
* qty
* desc
* image
* characteristics (stats)
* stats (property)
* talents (traits)
* skills (property)
* abilities (traits)
* equipment (traits)

The following fields are essential to core functionality:
* qty (affects wound + skill calculations when used in combination with 'Minion' type)
* type (Minion)
* diceprof (must populate with dice of choice from css)
* dice ability (as above)

Skills will only render if they are included in the YAML. Including skill: 0 (null) will render the dice pool despite having no ranks in the skill.

````
```statblock
name: Imperial Stormtrooper
monster: Imperial Stormtrooper
desc: Standard Imperial Canonfodder
qty: 3
image: https://static.wikia.nocookie.net/starwars/images/c/ca/Anovos_Stormtrooper.png/revision/latest/top-crop/width/360/height/360?cb=20160407220950
type: Minion
soak: 5
wounds: 5
strain: null
rdef: 0
mdef: 0
stats: [3,3,2,2,3,1]
athletics: null
discipline: null
melee: null
rheavy: null
equipment:
  - name: Blaster Rifle
    desc: Ranged Heavy, Damage +9, Critical 3, Long Range, Stun
  - name: Light repeating blaster
    desc: Ranged Heavy, Damage +11, Critical 3, Long Range, Auto-fire, Cumbersome 4,
      Pierce 1, Weapon Sling.
  - name: Vibro Knife
    desc: Melee, Damage +4, Crit 2, Engaged, Pierce 2, Vicious 1
  - name: Frag Grenade
    desc: Ranged Light, Damage +8, Crit 4, Short Range, Blast 6, Limited Ammo 1
  - name: Extra Gear
    desc: Utility belt, Extra reloads, Stormtrooper armor, 2 frag grenades
```
````

## Editing Skills
Using the inbuilt TTRPG Statblock layout editor, all aspects of the layout can be adjusted, including skills. Currently, the dice pool calculations use parallel arrays, and are populated with Star Wars RPG skills.

```
let skills = [];
let characteristics = [];
skills.push(monster.astrogation,monster.athletics,monster.brawl, monster.charm,monster.coercion,monster.computers, monster.cool,monster.coordination,monster.cybernetics, monster.deception,monster.discipline, monster.gunnery, monster.coreworlds, monster.education, monster.lore, monster.outerrim, monster.underworld, monster.warfare, monster.xenology, monster.leadership, monster.lightsaber, monster.mechanics, monster.medicine, monster.melee, monster.negotiation, monster.perception, monster.pplanetary, monster.pspace, monster.rheavy, monster.rlight, monster.resilience, monster.skulduggery, monster.stealth, monster.streetwise, monster.survival, monster.vigilance);
characteristics.push (monster.stats[2], monster.stats[0], monster.stats[0], monster.stats[5], monster.stats[4], monster.stats[2], monster.stats[5], monster.stats[1], monster.stats[2], monster.stats[3], monster.stats[4], monster.stats[1], monster.stats[2], monster.stats[2], monster.stats[2], monster.stats[2], monster.stats[2], monster.stats[2], monster.stats[2], monster.stats[5], monster.stats[0], monster.stats[2], monster.stats[2], monster.stats[0], monster.stats[5], monster.stats[3], monster.stats[1], monster.stats[1], monster.stats[1], monster.stats[1], monster.stats[0], monster.stats[3], monster.stats[1], monster.stats[3], monster.stats[3], monster.stats[4]);
```

Any of the above skills can be changed/tweaked to fit your game. The characteristics array is as presented in the statblock render; [brw, agi, int, cun, wil, pre], and needs to match the same array location as the appropriate skill. E.g. if you edit the first skill, the first entry in the characteristics array needs to match the appropriate stat for that skill. I.e. astrogation uses int, so the first entry in the characteristics array is monster.stats[2] (int). 
