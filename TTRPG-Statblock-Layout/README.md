# Genesys / Star Wars RPG Statblocks (TTRPG Statblocks)
This is a Statblock Layout for the TTRPG Statblocks plugin for Obsidian. It does not require Craftidore's dice snippet to be installed.

## Features / Functionalities
* Dice Pool calculations for primary skills (nemesis / rivals).
* Dice Pool rolling for skills (requires Dice Roller plugin to be installed).
* Dice Pool skill calculations for type minion quantity (minion).
* Health calculations for type minion quantity (minion).
* Interactive wounds counter which adjusts minion dice pools.

## To install
1. Download your desired .json file.
2. Download the relevant CSS files (minimum essentials required for statblock styling, SWRPG styling optional).
3. In the TTRPG Statblocks plugin settings, select 'Import from JSON,' and select the downloaded json file.
4. Turn on CSS styling in Appearance settings.

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
layout: Genesys
name: Imperial Stormtrooper
creature: Imperial Stormtrooper Demo
qty: 3
image: https://static.wikia.nocookie.net/starwars/images/c/ca/Anovos_Stormtrooper.png/revision/latest/top-crop/width/360/height/360?cb=20160407220950
type: Minion
soak: 5
wounds: 5
strain: null
rdef: 0
mdef: 0
stats: [3,3,2,2,3,1]
discipline: null
melee: null
rangedheavy: null
rangedlight: null
athletics: null
coordination: null
equipment:
 - name: Blaster Rifle
   desc: "Ranged Heavy, Damage +9, Critical 3, Long Range, Stun"
 - name: Light Repeating Blaster
   desc: "Ranged Heavy, Damage +11, Critical 3, Long Range, Auto-fire, Cumbersome 4, Pierce 1, Weapon Sling."
 - name: Vibro Knife
   desc: "Melee, Damage +4, Crit 2, Engaged, Pierce 2, Vicious 1"
 - name: Frag Grenade
   desc: "Ranged Light, Damage +8, Crit 4, Short Range, Blast 6, Limited Ammo 1"
 - name: Extra Gear
   desc: "Utility belt, Extra reloads, Stormtrooper armor, 2 frag grenades"
```
````
