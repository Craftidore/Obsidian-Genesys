```statblock
layout: Genesys
monster: string
name: string
type: nemesis/rival/minion
desc: string
qty: int
stats: [brw,agi,int,cun,wil,pre]
soak: int
wounds: int
strain: int
rdef: int
mdef: int
astrogation: int
athletics: int
brawl: int
charm: int
coercion: int
computers: int
cool: int
coordination: int
cybernetics: int
deception: int
discipline: int
gunnery: int
coreworlds: int
education: int
lore: int
outerrim: int
underworld: int
warfare: int
xenology: int
leadership: int
lightsaber: int
mechanics: int
medicine: int
melee: int
negotiation: int
perception: int
pilotingplanetary: int
pilotingspace: int
rangedheavy: int
rangedlight: int
resilience: int
skulduggery: int
stealth: int
streetwise: int
survival: int
vigilance: int
talents:
 - name: string
   desc: string
equipment: 
 - name: string
   desc: string
 - name: string
   desc: string
abilities: 
 - name: string
   desc: string
 - name: string
   desc: string
```


```statblock
layout: Genesys
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