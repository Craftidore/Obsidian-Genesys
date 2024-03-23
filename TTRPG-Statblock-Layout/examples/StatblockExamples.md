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
monster: Stalking Acklay
name: Stalking Acklay
image: https://lumiere-a.akamaihd.net/v1/images/databank_acklay_01_169_e544124f.jpeg?region=0%2C0%2C1560%2C878
type: Nemesis
qty: 1
stats: [5,3,1,3,3,1]
soak: 12
wounds: 25
strain: 15
rdef: 0
mdef: 2
athletics: 4
brawl: 4
coordination: 2
talentranks:
 - name: Adversary 1
 - name: Silhouette 2
extends:
 - Adversary
 - Large claws
 - Amphibious
 - Many-armed
 - Silhouette
```