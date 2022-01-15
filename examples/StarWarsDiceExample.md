# StarWars Dice & Symbols for Obsidian

I love the Gensys Narrative Dice System, but unlike normal dice, which are easily abreviated with `dXX`, there hasn't been a good way of referencing these dice in plaintext. 

This CSS Snippet changes tags of the form `#StarWars<die or symbol name>` into the image of that die or symbol. In addition to adding pretty #StarWarsBoost NDS #StarWarsAbility symbols #StarWarsProficiency into your documents, this simplifies writing about Gensys because tags autocomplete.  

| Tag             | Result |
|-----------------|--------|
| `#StarWarsAbility`   | #StarWarsAbility |
| `#StarWarsBoost`     | #StarWarsBoost |
| `#StarWarsChallenge` | #StarWarsChallenge |
| `#StarWarsDifficulty` | #StarWarsDifficulty |
| `#StarWarsProficiency` | #StarWarsProficiency |
| `#StarWarsSetback`   | #StarWarsSetback |
| `#StarWarsAdvantage` | #StarWarsAdvantage |
| `#StarWarsDespair`   | #StarWarsDespair |
| `#StarWarsFailure`   | #StarWarsFailure |
| `#StarWarsSuccess`   | #StarWarsSuccess |
| `#StarWarsThreat`    | #StarWarsThreat |
| `#StarWarsTriumph`   | #StarWarsTriumph |
| `#StarWarsForce`     | #StarWarsForce |
| `#StarWarsLightSide` | #StarWarsLightSide |
| `#StarWarsDarkSide`  | #StarWarsDarkSide |
| `#StarWarsLightDark` | #StarWarsLightDark |

The CSS in this snippet was adapted from [this](https://www.reddit.com/r/genesysrpg/comments/a92p12/gm_binder_genesys_dice_and_symbols_style/) reddit post. 

```css
/* Style Settings comment for use with the Style Settings Community Plugin */
/* @settings

name: StarWars Dice CSS Snippet
id: craftidore-genesys-dice-snippet
settings:
    - 
        id: do-not-invert-symbols
        title: "Don't Invert Symbols"
		description: Don't invert the color of the symbols while in dark theme. 
        type: class-toggle
		default: false
*/

/* Apllies to Everything */ 
.tag[href^="#StarWarsAbility"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsAbility:not(.cm-formatting),
.tag[href^="#StarWarsBoost"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsBoost:not(.cm-formatting),
.tag[href^="#StarWarsChallenge"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsChallenge:not(.cm-formatting),
.tag[href^="#StarWarsDifficulty"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsDifficulty:not(.cm-formatting),
.tag[href^="#StarWarsProficiency"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsProficiency:not(.cm-formatting),
.tag[href^="#StarWarsSetback"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsSetback:not(.cm-formatting),
.tag[href^="#StarWarsAdvantage"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsAdvantage:not(.cm-formatting),
.tag[href^="#StarWarsDespair"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsDespair:not(.cm-formatting),
.tag[href^="#StarWarsFailure"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsFailure:not(.cm-formatting),
.tag[href^="#StarWarsSuccess"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsSuccess:not(.cm-formatting),
.tag[href^="#StarWarsThreat"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsThreat:not(.cm-formatting),
.tag[href^="#StarWarsTriumph"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsTriumph:not(.cm-formatting) {
	display: inline-flex;
	align-self: center;
	top: .175em;
	position: relative;
	height: 1em;
	width: 1em;
	border: 0;
}

/* Because I don't want the `#` showing up in the tag */
.is-live-preview .cm-line:not(.cm-active) .cm-formatting.cm-tag-StarWarsAbility,
.is-live-preview .cm-line:not(.cm-active) .cm-formatting.cm-tag-StarWarsBoost,
.is-live-preview .cm-line:not(.cm-active) .cm-formatting.cm-tag-StarWarsChallenge,
.is-live-preview .cm-line:not(.cm-active) .cm-formatting.cm-tag-StarWarsDifficulty,
.is-live-preview .cm-line:not(.cm-active) .cm-formatting.cm-tag-StarWarsProficiency,
.is-live-preview .cm-line:not(.cm-active) .cm-formatting.cm-tag-StarWarsSetback,
.is-live-preview .cm-line:not(.cm-active) .cm-formatting.cm-tag-StarWarsAdvantage,
.is-live-preview .cm-line:not(.cm-active) .cm-formatting.cm-tag-StarWarsDespair,
.is-live-preview .cm-line:not(.cm-active) .cm-formatting.cm-tag-StarWarsFailure,
.is-live-preview .cm-line:not(.cm-active) .cm-formatting.cm-tag-StarWarsSuccess,
.is-live-preview .cm-line:not(.cm-active) .cm-formatting.cm-tag-StarWarsThreat,
.is-live-preview .cm-line:not(.cm-active) .cm-formatting.cm-tag-StarWarsTriumph {
	display: none;
}

/* Dice */

.tag[href^="#StarWarsAbility"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsAbility:not(.cm-formatting) {
	content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny41IDExMi41OCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMxNTg5MTU7fS5jbHMtMntmaWxsOiM0MmJiNDI7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5ncmVlbi1ibGFuay1nZW48L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMCw4NC40NGw0OC43NSwyOC4xNEw5Ny41LDg0LjQ0VjI4LjE1TDQ4Ljc1LDAsMCwyOC4xNVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik05Ny41LDg0LjQ0LDQ4Ljc1LDAsMCw4NC40NFoiLz48L2c+PC9nPjwvc3ZnPg==");
}

.tag[href^="#StarWarsBoost"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsBoost:not(.cm-formatting) {
	padding-right: 1px;
	padding-left: 1px;
	content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4Ni4yNSA4Ni4yNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM4YmQ1ZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5ibHVlLWJsYW5rLWdlbjwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yLjEsMEg4NC4xNWEyLjEsMi4xLDAsMCwxLDIuMSwyLjFWODQuMTVhMi4xLDIuMSwwLDAsMS0yLjEsMi4xSDIuMUEyLjEsMi4xLDAsMCwxLDAsODQuMTVWMi4xQTIuMSwyLjEsMCwwLDEsMi4xLDBaIi8+PC9nPjwvZz48L3N2Zz4=");
}

.tag[href^="#StarWarsChallenge"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsChallenge:not(.cm-formatting) {
	content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDcuMDcgMTEyLjU4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzdlMmQzMTt9LmNscy0ye2ZpbGw6I2EzNDM0Nzt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnJlZC1ibGFuay1nZW48L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMCw3My42OWwyMC40NSwyOC4xNCwzMy4wOSwxMC43NSwzMy4wOC0xMC43NSwyMC40NS0yOC4xNFYzOC45TDg2LjYyLDEwLjc1LDUzLjU0LDAsMjAuNDUsMTAuNzUsMCwzOC45WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTc2LjM0LDg3Ljg3bDE0LjEtNDMuMzhMNTMuNTQsMTcuNjgsMTYuNjQsNDQuNDksMzAuNzMsODcuODdaIi8+PC9nPjwvZz48L3N2Zz4=");
}

.tag[href^="#StarWarsDifficulty"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsDifficulty:not(.cm-formatting) {
	content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny41IDExMi41OCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM2YzEwODc7fS5jbHMtMntmaWxsOiNhNTQ1Yzc7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5wdXJwbGUtYmxhbmstZ2VuPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTAsODQuNDRsNDguNzUsMjguMTRMOTcuNSw4NC40NFYyOC4xNUw0OC43NSwwLDAsMjguMTVaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNOTcuNSw4NC40NCw0OC43NSwwLDAsODQuNDRaIi8+PC9nPjwvZz48L3N2Zz4=");
}

.tag[href^="#StarWarsProficiency"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsProficiency:not(.cm-formatting) {
	content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDcuMDcgMTEyLjU4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2QxYTAyODt9LmNscy0ye2ZpbGw6I2ZmZDg0Mjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnllbGxvdy1ibGFuay1nZW48L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMCwzOC45LDIwLjQ1LDEwLjc1LDUzLjU0LDAsODYuNjIsMTAuNzUsMTA3LjA3LDM4LjlWNzMuNjlMODYuNjIsMTAxLjgzLDUzLjU0LDExMi41OCwyMC40NSwxMDEuODMsMCw3My42OVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zMC43Myw4Ny44NywxNi42NCw0NC40OWwzNi45LTI2LjgxLDM2LjksMjYuODFMNzYuMzQsODcuODdaIi8+PC9nPjwvZz48L3N2Zz4=");
}

.tag[href^="#StarWarsSetback"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsSetback:not(.cm-formatting) {
	padding-right: 1px;
	padding-left: 1px;
	content: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjAiIHk9IjAiIHdpZHRoPSI4Ni4yNSIgaGVpZ2h0PSI4Ni4yNSIgdmlld0JveD0iMCwgMCwgODYuMjUsIDg2LjI1Ij4KICA8ZyBpZD0iTGF5ZXJfMiI+CiAgICA8cGF0aCBkPSJNMi4xLDAgTDg0LjE1LDAgQzg1LjMxLDAgODYuMjUsMC45NCA4Ni4yNSwyLjEgTDg2LjI1LDg0LjE1IEM4Ni4yNSw4NS4zMSA4NS4zMSw4Ni4yNSA4NC4xNSw4Ni4yNSBMMi4xLDg2LjI1IEMwLjk0LDg2LjI1IDAsODUuMzEgMCw4NC4xNSBMMCwyLjEgQzAsMC45NCAwLjk0LDAgMi4xLDAgeiIgZmlsbD0iIzIxMjEyMSIvPgogIDwvZz4KPC9zdmc+");
}

/* Symbols */
.tag[href^="#StarWarsAdvantage"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsAdvantage:not(.cm-formatting) {
	content: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE0NXB4IiBoZWlnaHQ9IjE0NXB4IiB2aWV3Qm94PSIwIDAgMTQ1MCAxNDUwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KPGcgaWQ9ImxheWVyMSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIj4KIDxwYXRoIGQ9Ik0xMTg1IDExODQgYy0xMDQgLTY4IC0yNTAgLTE2MyAtMzIyIC0yMTAgbC0xMzMgLTg2IC0zMzYgMTk3IGMtMjAxIDExOCAtMzM5IDE5NCAtMzQ1IDE4OCAtNSAtNSAxMzMgLTIzNyAzNDMgLTU3NiAzMzMgLTUzNyAzNTMgLTU2NyAzNjggLTU1MCAyOCAzMCA2NDEgMTE0NCA2MzQgMTE1NCAtMyA1IC04IDkgLTEyIDkgLTQgMCAtOTIgLTU3IC0xOTcgLTEyNnogbS0yOTcgLTUyNiBjLTc3IC0xMzkgLTE0MSAtMjU0IC0xNDMgLTI1NiAtMiAtMiAtNTEgNzUgLTExMSAxNzAgLTU5IDk1IC0xMjkgMjA4IC0xNTYgMjUxIC0zMCA0OSAtNDIgNzUgLTMxIDY5IDEwIC02IDc2IC00NCAxNDYgLTg2IDcxIC00MiAxMzQgLTc2IDE0MCAtNzYgNyAwIDczIDQwIDE0NyA4OSA3NCA0OSAxMzggOTAgMTQyIDkwIDMgMSAtNTcgLTExMyAtMTM0IC0yNTF6Ii8+CiA8L2c+Cgo8L3N2Zz4=");
}

.tag[href^="#StarWarsDespair"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsDespair:not(.cm-formatting) {
	content: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE0NXB4IiBoZWlnaHQ9IjE0NXB4IiB2aWV3Qm94PSIwIDAgMTQ1MCAxNDUwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KPGcgaWQ9ImxheWVyMSIgZmlsbD0iIzA1MDcwNyIgc3Ryb2tlPSJub25lIj4KIDxwYXRoIGQ9Ik02MjUgMTM1MyBjLTQ0IC00NyAtOTggLTk0IC0xMTkgLTEwNSAtMjIgLTExIC02MyAtMzYgLTkyIC01NSBsLTUyIC0zNSAtNTggMzkgYy0zMSAyMSAtNjMgNDIgLTcwIDQ4IC05IDYgLTE3IDYgLTI1IC0yIC04IC04IC0zIC0yMyAyMiAtNTggNjkgLTk2IDY4IC04MyAxNiAtMTY3IC0yNiAtNDEgLTQ3IC03OSAtNDcgLTg0IDAgLTYgLTQzIC01MiAtOTUgLTEwMyAtNTIgLTUyIC05NSAtOTkgLTk1IC0xMDYgMCAtNyA0MyAtNTQgOTUgLTEwNiA1MiAtNTEgOTUgLTk4IDk1IC0xMDQgMCAtNyAyMCAtNDMgNDUgLTgxIDI0IC0zOCA0NSAtNzQgNDUgLTgwIDAgLTUgLTIxIC0zOCAtNDYgLTczIC0zNiAtNDcgLTQ0IC02NSAtMzUgLTc0IDggLTggMTYgLTggMjUgLTIgNyA2IDM5IDI3IDcwIDQ4IGw1OCAzOSA1MiAtMzUgYzI5IC0xOSA3MCAtNDQgOTIgLTU1IDIxIC0xMSA3NyAtNTkgMTIzIC0xMDYgNDYgLTQ3IDg5IC04NiA5NyAtODYgNyAwIDUwIDM3IDk2IDgzIDQ3IDQ4IDEwOSA5OCAxNDMgMTE2IDMzIDE4IDc1IDQ0IDkyIDU4IDM3IDI3IDQzIDI1IDEyNCAtMzMgMjYgLTE5IDUxIC0zNCA1NyAtMzQgMjcgMCAxOSAyNSAtMjggODYgLTI4IDM2IC01MCA2OSAtNDggNzMgMiAzIDI0IDM4IDUxIDc4IDI2IDM5IDQ3IDc3IDQ3IDg0IDAgNyA0MSA1MiA5MCAxMDAgNTAgNDcgOTAgOTQgOTAgMTA0IDAgMTAgLTM5IDU1IC04NiAxMDEgLTUyIDQ5IC05NCAxMDAgLTEwNiAxMjUgLTEwIDIzIC0zNCA2NCAtNTQgOTEgLTE5IDI4IC0zMiA1NCAtMjggNjEgNCA3IDI3IDM4IDUxIDcwIDQwIDUyIDQ3IDc3IDIyIDc3IC01IDAgLTMwIC0xNSAtNTYgLTM0IC04OCAtNjIgLTg0IC02MiAtMTU5IC0xMSAtMzcgMjUgLTc0IDQ1IC04MSA0NSAtNyAwIC01NyA0MyAtMTA5IDk1IC01MyA1MiAtMTA0IDk0IC0xMTMgOTQgLTkgLTEgLTUyIC00MCAtOTYgLTg2eiBtMjI5IC0xOTkgYzU4IC0xNSAxMzYgLTUxIDEzNiAtNjMgMCAtMyAtMTUgLTE2IC0zMyAtMjggLTE3IC0xMiAtNzUgLTUxIC0xMjcgLTg3IC01MiAtMzYgLTk4IC02NiAtMTAzIC02NiAtMTIgMCAtMjU3IDE3MyAtMjU3IDE4MiAwIDExIDU2IDM4IDEyMCA1OSA2OSAyMyAxODMgMjQgMjY0IDN6IG0tNDY2IC0xOTYgYzExIC0xOCA1MSAtNzggOTAgLTEzMyBsNjkgLTEwMCAtODUgLTEyNSBjLTQ3IC02OSAtODggLTEyOSAtOTIgLTEzMyAtMTMgLTE0IC01OCA3MyAtNzQgMTQzIC0yOCAxMTcgLTEyIDI0OSA0MCAzMzcgMTQgMjQgMjYgNDMgMjggNDMgMiAwIDEzIC0xNSAyNCAtMzJ6IG03NjcgLTkzIGMzNiAtMTE3IDE3IC0yODggLTQwIC0zNzMgLTE3IC0yNSAtMjUgLTI5IC0zMiAtMjAgLTM0IDQzIC0xNjYgMjQ0IC0xNjYgMjUzIDAgOSA5NSAxNTMgMTU3IDIzNyBsMTkgMjggMjIgLTMzIGMxMiAtMTcgMzAgLTU5IDQwIC05MnogbS0yOTAgLTQxNSBjNjkgLTQ3IDEyNSAtODggMTI1IC05MSAwIC0zIC0xNyAtMTUgLTM3IC0yNiAtMTAxIC01NiAtMjQ5IC02OSAtMzY5IC0zMiAtNjggMjEgLTExNCA0NSAtMTE0IDU5IDAgNCA1MiA0MyAxMTUgODYgNjQgNDIgMTE4IDgxIDEyMSA4NiAxMCAxNiAzMyA0IDE1OSAtODJ6Ii8+CiA8L2c+Cgo8L3N2Zz4=");
}

.tag[href^="#StarWarsFailure"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsFailure:not(.cm-formatting) {
	content: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE0NXB4IiBoZWlnaHQ9IjE0NXB4IiB2aWV3Qm94PSIwIDAgMTQ1MCAxNDUwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KPGcgaWQ9ImxheWVyMSIgZmlsbD0iIzA0MDcwNyIgc3Ryb2tlPSJub25lIj4KIDxwYXRoIGQ9Ik0yMDUgMTIzOSBjLTQgLTYgMzkgLTc5IDk2IC0xNjIgNTcgLTg0IDEzNSAtMTk4IDE3MyAtMjU0IGw3MCAtMTAzIC03MCAtMTAyIGMtMzggLTU3IC0xMTYgLTE3MiAtMTczIC0yNTYgLTY5IC0xMDAgLTEwMSAtMTU2IC05NSAtMTYyIDcgLTcgMzYgOCA4NSA0MSA0MSAyOCAxNTUgMTA3IDI1NSAxNzUgbDE4MCAxMjMgMjQ3IC0xNjkgYzEzNiAtOTMgMjUxIC0xNzEgMjU3IC0xNzUgNiAtMyAxMyAwIDE2IDggMyA4IC02NyAxMTggLTE2MyAyNTggLTkyIDEzNCAtMTY3IDI1MSAtMTY3IDI1OSAwIDggNzYgMTI1IDE2OCAyNTkgOTYgMTQwIDE2NSAyNTAgMTYyIDI1OCAtMyA4IC0xMCAxMiAtMTYgOCAtNSAtMyAtMTIxIC04MiAtMjU2IC0xNzUgbC0yNDcgLTE2OSAtNjEgNDEgYy0zNCAyMyAtMTQ0IDk4IC0yNDYgMTY4IC0yMjQgMTUzIC0yMDcgMTQzIC0yMTUgMTI5eiIvPgogPC9nPgoKPC9zdmc+");
}

.tag[href^="#StarWarsSuccess"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsSuccess:not(.cm-formatting) {
	content: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE0NXB4IiBoZWlnaHQ9IjE0NXB4IiB2aWV3Qm94PSIwIDAgMTQ1MCAxNDUwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KPGcgaWQ9ImxheWVyMSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIj4KIDxwYXRoIGQ9Ik03MDcgMTM3MSBjLTggLTY2IC01MCAtMTg5IC04OCAtMjU3IC0zMSAtNTUgLTMyIC01NiAtNjggLTQ5IC02MCAxMSAtMTgxIDYzIC0yNDQgMTA1IC04NyA1OSAtOTUgNTUgLTQzIC0xNyA0NiAtNjUgODAgLTEzNSAxMDUgLTIxOCAyMSAtNjcgMjEgLTcwIDQgLTgzIC00NSAtMzUgLTE4NyAtOTQgLTI2MSAtMTEwIC03NSAtMTUgLTEwOCAtMzIgLTY0IC0zMiA0NiAwIDE4NCAtNDMgMjYwIC04MiBsODQgLTQxIC03IC0zNiBjLTEyIC02NSAtNjUgLTE4NSAtMTEwIC0yNTEgLTI0IC0zNiAtNDAgLTY2IC0zNSAtNjggNSAtMiAzNyAxNSA3MCAzOCA3MiA0OSAxNDYgODMgMjI0IDEwMyBsNTYgMTUgMzUgLTYyIGM0MSAtNzMgNjkgLTE1MiA4NiAtMjM2IDYgLTMzIDE1IC02MCAxOSAtNjAgMyAwIDEyIDMwIDE5IDY3IDE1IDgwIDYxIDIwNCA5NiAyNTUgbDI1IDM2IDU3IC0xNSBjNzcgLTIwIDE3NCAtNjUgMjM0IC0xMDggMjcgLTE5IDUxIC0zNSA1NCAtMzUgMTIgMCAyIDI0IC0yOSA2NyAtNDYgNjUgLTgwIDEzNSAtMTA1IDIxNyAtMjUgODEgLTMzIDcwIDk0IDEzMSA3OSAzNyAxMTMgNDggMjIzIDcxIDMxIDYgMjcgMjQgLTYgMjQgLTUyIDAgLTE0NiAzMCAtMjM5IDc1IC05MiA0NSAtOTIgNDYgLTg2IDc4IDEyIDY0IDY0IDE4NSAxMDkgMjUxIDI1IDM4IDQzIDcwIDQwIDczIC0zIDMgLTM3IC0xNiAtNzcgLTQyIC02OSAtNDYgLTE4MCAtOTYgLTI0NiAtMTEwIC0zMCAtNiAtMzMgLTQgLTY3IDU3IC0zNSA2MiAtNzkgMTg2IC05MSAyNjEgLTggNTIgLTIxIDQ2IC0yOCAtMTJ6IG0xMTQgLTQ1OCBjNzIgLTM3IDExMSAtOTMgMTE3IC0xNjggMTkgLTIyNyAtMjY5IC0zMjQgLTM5NSAtMTMzIC0yNCAzNSAtMjggNTIgLTI4IDEwOCAwIDkwIDM3IDE1MiAxMTQgMTkyIDY5IDM2IDEyMSAzNiAxOTIgMXoiLz4KIDwvZz4KCjwvc3ZnPg==");
}

.tag[href^="#StarWarsThreat"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsThreat:not(.cm-formatting) {
	content: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE0NXB4IiBoZWlnaHQ9IjE0NXB4IiB2aWV3Qm94PSIwIDAgMTQ1MCAxNDUwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KPGcgaWQ9ImxheWVyMSIgZmlsbD0iIzA2MDYwNiIgc3Ryb2tlPSJub25lIj4KIDxwYXRoIGQ9Ik02MDMgMTMzNiBjLTcyIC0xOCAtMTUzIC01OSAtMjA3IC0xMDcgbC00NiAtNDEgLTkzIDAgYy04NCAxIC0xMTUgNSAtMTcyIDI4IC0xMiA0IDEgLTE1IDMyIC00OCAyOCAtMzAgNjUgLTgyIDgyIC0xMTUgMjkgLTU5IDMwIC02MyAyNCAtMTY0IC0xMCAtMTgzIDM2IC0zMDkgMTUxIC00MTcgNjIgLTU4IDE3MSAtMTIyIDIwNyAtMTIyIDM2IDAgMTM4IC0xNzUgMTM5IC0yMzcgMCAtMTMgNSAtMjMgMTAgLTIzIDYgMCAxMCA5IDEwIDIwIDAgNTYgOTYgMjI4IDEzMiAyMzggMTEgMiA1MSAyMCA4OSAzOCAxOTkgOTUgMzE3IDM0MCAyNjggNTUzIC05IDQxIC03IDUwIDIxIDEwOCAxNyAzNCA1NCA4OCA4MyAxMjAgMzIgMzQgNDQgNTQgMzIgNDkgLTQ5IC0xOCAtMTIzIC0yOCAtMTg5IC0yNCAtNjUgMyAtNzYgNiAtMTE2IDQwIC0xMjQgMTAxIC0zMDEgMTQyIC00NTcgMTA0eiBtMjkzIC0xNDEgYzMxIC0xNyA2MSAtMzcgNjcgLTQ1IDE0IC0yMyAtNDcgLTE0MiAtMTA1IC0yMDYgLTI3IC0yOCAtNDggLTU0IC00OCAtNTcgMCAtMyAxNyAxIDM4IDEwIDQwIDE3IDE5NSAyNCAyNDUgMTAgMjYgLTcgMjcgLTEwIDI3IC03MCAwIC0xMzAgLTY1IC0yNDggLTE4MCAtMzI1IGwtNjQgLTQ0IC0yOCAzNCBjLTM3IDQ0IC0xMDggMTg0IC0xMDggMjE0IDAgMTIgLTQgMjYgLTEwIDI5IC02IDQgLTEwIC02IC0xMCAtMjIgMCAtMzUgLTUwIC0xNDIgLTk2IC0yMDUgbC0zNiAtNDggLTQ5IDI3IGMtMTAwIDU0IC0xNzcgMTY0IC0xOTkgMjgyIC0xMyA3NCAtNiAxMTggMjEgMTI2IDExIDQgNTkgNyAxMDcgNiA4MCAwIDExMiAtNSAxNjcgLTI3IDEyIC01IC0yIDE2IC0zMyA1MSAtNDggNTMgLTk5IDEzNiAtMTE2IDE5MiAtNiAxOCAxIDI2IDM5IDQ4IDc0IDQ0IDEyMSA1NSAyMjIgNTIgNzggLTIgOTkgLTcgMTQ5IC0zMnoiLz4KIDwvZz4KCjwvc3ZnPg==");
}

.tag[href^="#StarWarsTriumph"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsTriumph:not(.cm-formatting) {
	content: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE1MHB4IiBoZWlnaHQ9IjE1MHB4IiB2aWV3Qm94PSIwIDAgMTUwMCAxNTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KPGcgaWQ9ImxheWVyMSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIj4KIDxwYXRoIGQ9Ik02MDUgMTQ3NiBjLTE1OCAtMzIgLTI3MiAtOTIgLTM4NSAtMjA2IC05NiAtOTYgLTE0OCAtMTc4IC0xODcgLTI5NSAtMjUgLTcyIC0yNyAtOTQgLTI4IC0yMzAgMCAtMTMxIDMgLTE1OSAyMyAtMjIwIDgzIC0yNDcgMjU1IC00MTkgNDk3IC00OTUgMTA3IC0zNCAyNzQgLTM4IDM4OCAtMTEgNDM0IDEwNCA2NzYgNTQ3IDUzMSA5NzMgLTc3IDIyOCAtMjc4IDQxMyAtNTEyIDQ3MyAtODkgMjIgLTI0MiAyOCAtMzI3IDExeiBtOTAgLTE1MyBjLTEwIC00MSAtNjkgLTE2NSAtOTIgLTE5MiBsLTE5IC0yNCAtNjAgMTggYy02OCAxOSAtMTc0IDY1IC0xNzQgNzQgMCA0IDI4IDI1IDYzIDQ4IDYxIDQwIDE0NSA3NSAyMjIgOTIgNjUgMTUgNjggMTQgNjAgLTE2eiBtMjI1IC0zIGM2MiAtMTggMTY4IC03NCAyMDAgLTEwNiAxMyAtMTMgMTMgLTE2IDAgLTI0IC0zOCAtMjQgLTE2NCAtNzEgLTE5NiAtNzMgLTM1IC0yIC0zOCAxIC03MCA1OCAtMTkgMzMgLTQzIDg2IC01MyAxMTggbC0yMCA1OCAzNyAtNiBjMjAgLTQgNjYgLTE1IDEwMiAtMjV6IG0tNTgyIC0yOTQgYzUyIC0xNDUgNTcgLTEyOCAtNjAgLTE4NiAtMTQ3IC03MSAtMTUyIC02OSAtMTIzIDQ1IDIwIDc2IDU1IDE1MyA5NyAyMTEgMzkgNTUgNDMgNTIgODYgLTcweiBtOTQ3IC0yMSBjMjkgLTYxIDM4IC05NCA2MSAtMjAyIGw0IC0yMyAtNjMgMjQgYy02OSAyNiAtMTMxIDU2IC0xNjEgNzkgLTE3IDEzIC0xOCAxOCAtNyA2MyA3IDI3IDI2IDgyIDQzIDEyMyBsMzEgNzUgMjkgLTM1IGMxNiAtMTkgNDQgLTY1IDYzIC0xMDR6IG0tNDgwIC01NiBjMjUgLTcgNTggLTI5IDg2IC01OCA3OSAtNzggODggLTE3NSAyNiAtMjY4IC0xMTcgLTE3MiAtMzg4IC04OSAtMzg3IDExOSAwIDY3IDI3IDEyNyA3NCAxNjQgNjMgNTEgMTI1IDY0IDIwMSA0M3ogbS01NjUgLTI4MyBjMzAgLTEzIDc0IC0zNCA5NyAtNDkgbDQxIC0yNiAtMTUgLTU4IGMtOCAtMzEgLTI4IC04NyAtNDUgLTEyMyBsLTI5IC02NSAtMjUgMzAgYy01NiA2NyAtMTI0IDIzNSAtMTI0IDMwNSAwIDI0IDYgMjMgMTAwIC0xNHogbTEwOTkgLTE3IGMtMTAgLTYxIC0yNSAtMTEwIC01MSAtMTY0IC0yMyAtNDggLTgxIC0xMzUgLTg5IC0xMzUgLTE0IDAgLTg5IDE5NCAtODkgMjMxIDAgMTcgMTAwIDc1IDE3NyAxMDQgNjAgMjIgNjEgMjEgNTIgLTM2eiBtLTcxOCAtMzIwIGMzMiAtNTYgODIgLTE3OSA3NSAtMTg2IC0yMiAtMjMgLTI1MSA2MyAtMzIxIDEyMCBsLTI5IDI0IDQ0IDIzIGM1MiAyNyAxODAgNzAgMTk1IDY2IDUgLTEgMjEgLTIzIDM2IC00N3ogbTM2OSAyMyBjMjUgLTggNzAgLTI1IDk5IC0zOSBsNTUgLTI0IC01MCAtMzUgYy03OSAtNTggLTIyNCAtMTE0IC0yOTMgLTExNCAtMjEgMCAtMjEgMCA0IDY2IDEzIDM2IDM5IDg5IDU3IDExOSAzNiA2MCAzMiA1OSAxMjggMjd6Ii8+CiA8L2c+Cgo8L3N2Zz4=");
}

/* Dark-theme fixes. Can be toggled off with Style Settings plugin */
.theme-dark:not(.do-not-invert-symbols) .tag[href^="#StarWarsAdvantage"], .theme-dark:not(.do-not-invert-symbols) .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsAdvantage:not(.cm-formatting), 
.theme-dark:not(.do-not-invert-symbols) .tag[href^="#StarWarsDespair"], .theme-dark:not(.do-not-invert-symbols) .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsDespair:not(.cm-formatting), 
.theme-dark:not(.do-not-invert-symbols) .tag[href^="#StarWarsFailure"], .theme-dark:not(.do-not-invert-symbols) .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsFailure:not(.cm-formatting), 
.theme-dark:not(.do-not-invert-symbols) .tag[href^="#StarWarsSuccess"], .theme-dark:not(.do-not-invert-symbols) .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsSuccess:not(.cm-formatting), 
.theme-dark:not(.do-not-invert-symbols) .tag[href^="#StarWarsThreat"], .theme-dark:not(.do-not-invert-symbols) .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsThreat:not(.cm-formatting), 
.theme-dark:not(.do-not-invert-symbols) .tag[href^="#StarWarsTriumph"], .theme-dark:not(.do-not-invert-symbols) .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsTriumph:not(.cm-formatting) {
	filter: invert(1);
}

/* css here to 
A: make the square dice less flat-seeming 
B: make sure the setback die can be seen in dark mode
*/
.tag[href^="#StarWarsSetback"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsSetback:not(.cm-formatting) {
	background-color: #686868;
	border-radius: 1px;
}
.tag[href^="#StarWarsBoost"], .is-live-preview .cm-line:not(.cm-active) .cm-tag-StarWarsBoost:not(.cm-formatting) {
	background-color: #989898;
	border-radius: 1px;
}
```