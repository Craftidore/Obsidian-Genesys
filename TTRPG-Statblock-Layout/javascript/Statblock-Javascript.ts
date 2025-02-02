let icons = {
    "soak": 0x1F9FD,
    "wounds": 0x1FA78,
    "strain": 0x1F4A2,
    "rdef": 0x1F3F9,
    "mdef": 0x1F6E1,
    "def": 0x1F6E1,
  };
  
  let names = {
  "soak": "Soak",
  "wounds": "Wounds",
  "strain": "Strain",
  "rdef": "Ranged Def",
  "mdef": "Melee Def",
  "def": "Defense",
  };
  
  let difficulties = {
    "simple": 0,
    "easy": 1,
    "average": 2,
    "hard": 3,
    "daunting": 4,
    "formidable": 5
  };
  
  let diceprofIcon = "#Proficiency"
  let diceabilityIcon = "#Ability"
  let skillValues = [];
  let characteristicsValues = [];
  
  //Add skillValues.push() here
  skillValues.push(monster.astrogation, monster.athletics, monster.brawl, monster.charm, monster.coercion, monster.computers, monster.cool, monster.coordination, monster.cybernetics, monster.deception, monster.discipline, monster.gunnery, monster.coreworlds, monster.education, monster.lore, monster.outerrim, monster.underworld, monster.warfare, monster.xenology, monster.leadership, monster.lightsaber, monster.mechanics, monster.medicine, monster.melee, monster.negotiation, monster.perception, monster.pilotingplanetary,monster.pilotingspace, monster.rangedheavy, monster.rangedlight, monster.resilience, monster.skulduggery, monster.stealth, monster.streetwise, monster.survival, monster.vigilance);
  //Add characteristicsValues.push() here
  characteristicsValues.push(monster.stats[2], monster.stats[0], monster.stats[0], monster.stats[5], monster.stats[4], monster.stats[2], monster.stats[5], monster.stats[1], monster.stats[2], monster.stats[3], monster.stats[4], monster.stats[1], monster.stats[2], monster.stats[2], monster.stats[2], monster.stats[2], monster.stats[2], monster.stats[2], monster.stats[2], monster.stats[5], monster.stats[0], monster.stats[2], monster.stats[2], monster.stats[0], monster.stats[5], monster.stats[3], monster.stats[1], monster.stats[1], monster.stats[1], monster.stats[1], monster.stats[0], monster.stats[3], monster.stats[1], monster.stats[3], monster.stats[3], monster.stats[4]);
  //Add skillLabels = here
  let skillLabels = ["Astro", "Athletics", "Brawl", "Charm", "Coercion", "Computers", "Cool", "Coordinat.", "Cybernet.", "Deception", "Discipline", "Gunnery", "K/Core", "K/Educ", "K/Lore", "K/OuterRim", "K/Underw.", "K/Warfare", "K/Xeno", "Leadership", "Lightsaber", "Mechanics", "Medicine", "Melee", "Negotiat.", "Perception", "P/Planet", "P/Space", "R/Heavy", "R/Light", "Resilience", "Skuldugg.", "Stealth", "Streetwise", "Survival", "Vigilance"];
  
  //Initial Parralell Array Declarations
  let presentSkillsArray = [];
  let presentCharacteristicsArray = [];
  let presentLabelsArray = [];
  let dicepoolArray = [];
  let rollerArray = [];
  
  let currentDifficulty = "easy";
  let currentSetbacks = 0;
  let currentBoosts = 0;
  
  // Boost 1
  let boost1Button = document.createElement('button');
  boost1Button.dataset.genesys = "#Boost1";
  boost1Button.addEventListener('click', () => {
            
    if  (currentBoosts == 1) {
            currentBoosts = 0
            boost1Button.style.boxShadow = 'unset';
            }
        else {
            currentBoosts = 1
            boost1Button.style.boxShadow = '0 3px 0 #781113';
        }
    
        boost2Button.style.boxShadow = 'unset';
        boost3Button.style.boxShadow = 'unset';
        // Loop through all stored update functions and call them
        statUpdateFunctions.forEach(updateFunc => {
            updateFunc(); // Call each stat's update method
        });
  });

    // Boost 2
    let boost2Button = document.createElement('button');
    boost2Button.dataset.genesys = "#Boost1";
    boost2Button.addEventListener('click', () => {
        currentBoosts = 2;
        boost1Button.style.boxShadow = '0 3px 0 #781113';
        boost2Button.style.boxShadow = '0 3px 0 #781113';
        boost3Button.style.boxShadow = 'unset';
        // Loop through all stored update functions and call them
        statUpdateFunctions.forEach(updateFunc => {
            updateFunc(); // Call each stat's update method
        });
    });

  // Boost 3
  let boost3Button = document.createElement('button');
  boost3Button.dataset.genesys = "#Boost1";
  boost3Button.addEventListener('click', () => {
        currentBoosts = 3;   
        boost1Button.style.boxShadow = '0 3px 0 #781113';
        boost2Button.style.boxShadow = '0 3px 0 #781113';
        boost3Button.style.boxShadow = '0 3px 0 #781113';
        // Loop through all stored update functions and call them
        statUpdateFunctions.forEach(updateFunc => {
            updateFunc(); // Call each stat's update method
        });
  });

    // Setback 1
    let setback1Button = document.createElement('button');
    setback1Button.dataset.genesys = "#Setback1";
    setback1Button.addEventListener('click', () => {
              
      if  (currentSetbacks == 1) {
              currentSetbacks = 0
              setback1Button.style.boxShadow = 'unset';
              }
          else {
              currentSetbacks = 1
              setback1Button.style.boxShadow = '0 3px 0 #781113';
          }
      
          setback2Button.style.boxShadow = 'unset';
          setback3Button.style.boxShadow = 'unset';
          // Loop through all stored update functions and call them
          statUpdateFunctions.forEach(updateFunc => {
              updateFunc(); // Call each stat's update method
          });
    });
  
      // Setback 2
      let setback2Button = document.createElement('button');
      setback2Button.dataset.genesys = "#Setback1";
      setback2Button.addEventListener('click', () => {
          currentSetbacks = 2;
          setback1Button.style.boxShadow = '0 3px 0 #781113';
          setback2Button.style.boxShadow = '0 3px 0 #781113';
          setback3Button.style.boxShadow = 'unset';
          // Loop through all stored update functions and call them
          statUpdateFunctions.forEach(updateFunc => {
              updateFunc(); // Call each stat's update method
          });
      });
  
    // Setback 3
    let setback3Button = document.createElement('button');
    setback3Button.dataset.genesys = "#Setback1";
    setback3Button.addEventListener('click', () => {
          currentSetbacks = 3;   
          setback1Button.style.boxShadow = '0 3px 0 #781113';
          setback2Button.style.boxShadow = '0 3px 0 #781113';
          setback3Button.style.boxShadow = '0 3px 0 #781113';
          // Loop through all stored update functions and call them
          statUpdateFunctions.forEach(updateFunc => {
              updateFunc(); // Call each stat's update method
          });
    });

  // Easy Button
  let easyButton = document.createElement('button');
    easyButton.dataset.genesys = "#Difficulty1";
    easyButton.style.boxShadow = '0 3px 0 #781113';
  easyButton.addEventListener('click', () => {
        if  (currentDifficulty == "easy") {
            currentDifficulty = "simple"
            easyButton.style.boxShadow = 'none';
            }
        else {
            currentDifficulty = "easy"
            easyButton.style.boxShadow = '0 3px 0 #781113';
        }
    
        averageButton.style.boxShadow = 'none';
        hardButton.style.boxShadow = 'none';
        dauntingButton.style.boxShadow = 'none';
        formidableButton.style.boxShadow = 'none';
        // Loop through all stored update functions and call them
        statUpdateFunctions.forEach(updateFunc => {
            updateFunc(); // Call each stat's update method
        });
  });
  
  // Average Button
  let averageButton = document.createElement('button');
  averageButton.dataset.genesys = "#Difficulty1";
  averageButton.addEventListener('click', () => {
        currentDifficulty = "average";
        easyButton.style.boxShadow = '0 3px 0 #781113';
        averageButton.style.boxShadow = '0 3px 0 #781113';
        hardButton.style.boxShadow = 'unset';
        dauntingButton.style.boxShadow = 'unset';
        formidableButton.style.boxShadow = 'unset';
        // Loop through all stored update functions and call them
        statUpdateFunctions.forEach(updateFunc => {
            updateFunc(); // Call each stat's update method
        });
  });
  
  // Hard Button
  let hardButton = document.createElement('button');
  hardButton.dataset.genesys = "#Difficulty1";
  hardButton.addEventListener('click', () => {
        currentDifficulty = "hard";
        easyButton.style.boxShadow = '0 3px 0 #781113';
        averageButton.style.boxShadow = '0 3px 0 #781113';
        hardButton.style.boxShadow = '0 3px 0 #781113';
        dauntingButton.style.boxShadow = 'unset';
        formidableButton.style.boxShadow = 'unset';
        // Loop through all stored update functions and call them
        statUpdateFunctions.forEach(updateFunc => {
        updateFunc(); // Call each stat's update method
    });
  });

    // Daunting Button
    let dauntingButton = document.createElement('button');
    dauntingButton.dataset.genesys = "#Difficulty1";
    dauntingButton.addEventListener('click', () => {
          currentDifficulty = "daunting";
          easyButton.style.boxShadow = '0 3px 0 #781113';
          averageButton.style.boxShadow = '0 3px 0 #781113';
          hardButton.style.boxShadow = '0 3px 0 #781113';
          dauntingButton.style.boxShadow = '0 3px 0 #781113';
          formidableButton.style.boxShadow = 'unset';
          // Loop through all stored update functions and call them
          statUpdateFunctions.forEach(updateFunc => {
          updateFunc(); // Call each stat's update method
      });
    });

    // Formidable Button
    let formidableButton = document.createElement('button');
    formidableButton.dataset.genesys = "#Difficulty1";
    formidableButton.addEventListener('click', () => {
            currentDifficulty = "formidable";
            easyButton.style.boxShadow = '0 3px 0 #781113';
            averageButton.style.boxShadow = '0 3px 0 #781113';
            hardButton.style.boxShadow = '0 3px 0 #781113';
            dauntingButton.style.boxShadow = '0 3px 0 #781113';
            formidableButton.style.boxShadow = '0 3px 0 #781113';
            // Loop through all stored update functions and call them
            statUpdateFunctions.forEach(updateFunc => {
            updateFunc(); // Call each stat's update method
        });
    });

  // Add buttons to a container div
  let diceButtons = document.createElement('div');
  diceButtons.id = "div_diceButtons";
  
  // Append buttons to the container div
  diceButtons.appendChild(easyButton);
  diceButtons.appendChild(averageButton);
  diceButtons.appendChild(hardButton);
  diceButtons.appendChild(dauntingButton);
  diceButtons.appendChild(formidableButton);
  diceButtons.appendChild(boost1Button);
  diceButtons.appendChild(boost2Button);
  diceButtons.appendChild(boost3Button);
  diceButtons.appendChild(setback1Button);
  diceButtons.appendChild(setback2Button);
  diceButtons.appendChild(setback3Button);

  //POPULATE PARALLEL ARRAYS
  function populateArrays() {
    for (let x = 0; x < skillValues.length; x++) {
        let stat = skillValues[x];
        let label = skillLabels[x];
        let characteristic = characteristicsValues[x];
        let dicepoolElement = document.createElement('span');
        let qty = 0;
    
        // Skill level based on Qty if type minion
        if (typeof stat !== "undefined" ) {
            // Skill cap at 5 (qty 6)
            if (monster.qty > 6) {
            qty = 6
            }
            else {
            qty = monster.qty
            }
            if  (monster.type == "Minion" || monster.type == 'minion') {
            stat = qty-1;
            }
        
            // Dice Pool Calculations
            let ability = Math.max(stat, characteristic) - Math.min(stat, characteristic);
            let prof = Math.min(stat, characteristic);
            let diff = difficulties[currentDifficulty];
            
            //Div per Icon
            const profdice = document.createElement('span');
            const abilitydice = document.createElement('span');
            profdice.dataset.genesys = diceprofIcon + prof;
            abilitydice.dataset.genesys = diceabilityIcon + ability;
            
            //Declare DiceRoller API stuffs
            const diceRollerPlugin = window.DiceRoller;
        
            addDice = async function (diceString, parent) {
            const diceRoller = await diceRollerPlugin.getRoller(diceString);
            const el = await diceRoller.containerEl;
            parent.appendChild(el);
            }
            
            const diceDiv = createEl('div');
            diceDiv.id = "div_dice";
            addDice(prof+"y"+ability+"g"+diff+"d"+currentBoosts+"b"+currentSetbacks+"s", diceDiv);
        
            // Add to Parallel Arrays
            dicepoolElement.appendChild(profdice);
            dicepoolElement.appendChild(abilitydice);
            dicepoolArray.push(dicepoolElement);
            presentSkillsArray.push(stat);
            presentCharacteristicsArray.push(characteristic);
            presentLabelsArray.push(label);
            rollerArray.push(diceDiv);
        }
    }
  }
  
  populateArrays();
  
    // Create an array to store update methods for each stat
    let statUpdateFunctions = [];

  //Stats (Wounds, Strain etc.) Calculation Function
  function statWithIcon(targetStat) {
  
        //Definitions
        let statValue = 0; //statValue starts at 0
        let icon = String.fromCodePoint(icons[targetStat]);
        let name = names[targetStat];
        let nameElement = document.createElement('strong');
        nameElement.id = "div_stat";
        nameElement.textContent = name;
        let iconElement = document.createElement('span');
        iconElement.style.marginLeft = '5px';
        let statElement = document.createElement('span');
        statElement.id = "span_stat";
    
        //I do not know why this is here...
        if (targetStat == undefined || (targetStat in monster === false && targetStat !== "def") ) {
            return null;
        }
    
        // Calculate Wounds based on QTY if MINION
        if ((monster.type == "Minion" || monster.type == "minion") && names[targetStat] == "Wounds") {
            statValue = monster[targetStat] * monster.qty;
        } else {
            statValue = monster[targetStat];
        }
    
        // Handle rdef/mdef as a single object
        if (targetStat == "def") {
            let mdeficon = String.fromCodePoint(icons["mdef"])
            let rdeficon = String.fromCodePoint(icons["rdef"])
            statElement.textContent = monster["rdef"] + "\u25CE"+ " | " + monster["mdef"] + "\uD83D\uDEE1";
        } else {
            statElement.textContent = statValue;
        }
    
        function updateExistingContent() {
            // Floor statValue at 1.
            if (statValue < 1) {
                statValue = 1;
            }
    
            // Update statElement's text content
            if (statElement) {
                statElement.textContent = statValue;
            } else {
                console.error("statElement is not defined or not in the DOM.");
                return;
            }
    
            // Check if the monster is a minion and the target stat is "Wounds"
            //if ((monster.type === "Minion" || monster.type === "minion") && names[targetStat] === "Wounds") {
            if (names[targetStat] === "Wounds") {
                // Validate outputElement exists
                if (!outputElement) {
                    console.error("outputElement is not defined or not in the DOM.");
                    return;
                }
    
                // Clear the children of outputElement after the "tapered-rule" element
                let clearChildren = false;
                Array.from(outputElement.children).forEach(child => {
                    if (clearChildren) {
                        child.remove();
                    }
                    if (child.classList.contains("tapered-rule")) {
                        clearChildren = true;
                    }
                });
                
                //Keep diceButtons at the top.
                outputElement.appendChild(diceButtons);

                // Update the dicepoolArray with new values based on the updated statValue
                dicepoolArray.forEach((_, i) => {
                    if ( monster.type === "Minion" || monster.type === "minion") {
                        stat = Math.ceil(statValue / monster.wounds) - 1;
                        stat = Math.min(stat, 5); // Cap stat at 5
                    }
                    else {
                        stat = presentSkillsArray[i];
                    }

                    const characteristic = presentCharacteristicsArray[i];
                    const ability = Math.max(stat, characteristic) - Math.min(stat, characteristic);
                    const prof = Math.min(stat, characteristic);
                    const diff = difficulties[currentDifficulty];
                    
                    // Create dice elements
                    const profdice = document.createElement("span");
                    profdice.dataset.genesys = diceprofIcon + prof;
    
                    const abilitydice = document.createElement("span");
                    abilitydice.dataset.genesys = diceabilityIcon + ability;
    
                    //Declare DiceRoller API stuffs
                    const diceRollerPlugin = window.DiceRoller;
                
                    addDice = async function (diceString, parent) {
                        const diceRoller = await diceRollerPlugin.getRoller(diceString);
                        const el = await diceRoller.containerEl;
                        parent.appendChild(el);
                    }
                    
                    const diceDiv = createEl('div');
                    diceDiv.id = "div_dice";
                    addDice(prof+"y"+ability+"g"+diff+"d"+currentBoosts+"b"+currentSetbacks+"s", diceDiv);
    
                    // Update the dicepoolArray with the new dice spans
                    const poolElement = document.createElement("span");
                    poolElement.appendChild(profdice);
                    poolElement.appendChild(abilitydice);
                    dicepoolArray[i] = poolElement;
                    rollerArray[i] = diceDiv;
                });
    
                // Repopulate outputElement with updated dice pools and skills
                presentSkillsArray.forEach((stat, x) => {
                    const label = presentLabelsArray[x];
                    const diceElement = dicepoolArray[x];
                    const roller = rollerArray[x];
    
                    if (stat !== undefined) {
                        const skillElement = document.createElement("strong");
                        skillElement.id = "div_skillName"
                        skillElement.textContent = label;
    
                        const dicecontainerElement = document.createElement("div");
                        dicecontainerElement.id = "div_dicecontainer";
                        dicecontainerElement.appendChild(skillElement);
                        //dicecontainerElement.appendChild(document.createTextNode(": "));
                        dicecontainerElement.appendChild(diceElement);
                        dicecontainerElement.appendChild(roller);
                        dicecontainerElement.appendChild(document.createElement("br"));

                        outputElement.appendChild(dicecontainerElement);
                    }
                });
            }
        }
    
        // Store the update method for this stat
        statUpdateFunctions.push(updateExistingContent);

        //DECREMENT BUTTON
        let decrementButton = document.createElement('button');
        decrementButton.id = "decrementButton"
        decrementButton.textContent = '-';
        decrementButton.addEventListener('click', () => {
            statValue--;
            updateExistingContent();
        });
    
        //MULTIPLE DECREMENT BUTTON
        let decrementWholeButton = document.createElement('button');
        decrementWholeButton.id = "decrementMulti"
        decrementWholeButton.textContent = '-'+monster.wounds;
        decrementWholeButton.addEventListener('click', () => {
        statValue = statValue-monster.wounds;
        updateExistingContent();
        });
    
        //INCREMENT BUTTON
        let incrementButton = document.createElement('button');
        incrementButton.id = "incrementButton"
        incrementButton.textContent = '+';
        incrementButton.addEventListener('click', () => {
            statValue++;
            updateExistingContent();
        });
    
        //MULTIPLE INCREMENT BUTTON
        let incrementWholeButton = document.createElement('button');
        incrementWholeButton.id = "incrementMulti"
        incrementWholeButton.textContent = '+'+monster.wounds;
        incrementWholeButton.addEventListener('click', () => {
            statValue = statValue+monster.wounds;
            updateExistingContent();
        });
        
        //Build Individual Stat Rows
        
        //Create Individual Elements
        let statcontainerElement = document.createElement('div');
        statcontainerElement.id = "div_statcontainer";
        let buttoncontainerElement = document.createElement('div');
        buttoncontainerElement.id = "div_button";
        let decreaseButtons = document.createElement('div');
        decreaseButtons.id = "decreasebuttons"
        let increaseButtons = document.createElement('div');
        increaseButtons.id = "increasebuttons"
    
        statcontainerElement.appendChild(nameElement);
        if ((targetStat == "wounds" || targetStat == "strain") && (monster.type == "Minion" || monster.type == 'minion')) {
            decreaseButtons.appendChild(decrementWholeButton);
            decreaseButtons.appendChild(decrementButton);
            buttoncontainerElement.appendChild(decreaseButtons);
        }
        buttoncontainerElement.appendChild(statElement);
        if ((targetStat == "wounds" || targetStat == "strain") && (monster.type == "Minion" || monster.type == 'minion')) {
            increaseButtons.appendChild(incrementButton);
            increaseButtons.appendChild(incrementWholeButton);
            buttoncontainerElement.appendChild(increaseButtons);
        }
            statcontainerElement.appendChild(buttoncontainerElement);
        
        return statcontainerElement;
  };
  
  // Create Containers & IDs (Individual containers for Styling purposes)
  let outputElement = document.createElement('div');
  outputElement.id = "div_output"
  let allDicePoolsElement = document.createElement('div');
  allDicePoolsElement.id = "div_dicePools";
  let soakContainer = document.createElement('div');
  soakContainer.id = "div_soak"
  let woundsContainer = document.createElement('div');
  woundsContainer.id = "div_wounds"
  let strainContainer = document.createElement('div');
  strainContainer.id = "div_strain"
  let rdefMdefContainer = document.createElement('div');
  rdefMdefContainer.id = "div_rdefMdefContainer"
  
  let allStatsContainer = document.createElement('div');
  allStatsContainer.id = "div_allstats"
  
  // Render Stats into div
  soakContainer.appendChild(statWithIcon("soak"));
  woundsContainer.appendChild(statWithIcon("wounds"));
  if (monster.type !== "undefined" && (monster.type !== "Minion" && monster.type !== "minion" && monster.type !== "Rival" && monster.type !== "rival")) {
  strainContainer.appendChild(statWithIcon("strain"));
  }
  rdefMdefContainer.appendChild(statWithIcon("def"));
  
  allStatsContainer.appendChild(soakContainer);
  allStatsContainer.appendChild(woundsContainer);
  allStatsContainer.appendChild(strainContainer);
  //If Defense is relevant, add to container
  if (monster.rdef > 0 || monster.mdef > 0) {
    allStatsContainer.appendChild(rdefMdefContainer);
  }
  
  //Add the stats to the output
  outputElement.appendChild(allStatsContainer);
  
  //Separate the stat/dice pool sections with a line.
  let lineElement = document.createElement('div');
  lineElement.id = "div_line"
  lineElement.classList.add('tapered-rule');
  outputElement.appendChild(lineElement);
  outputElement.appendChild(diceButtons);
  
  // Render Dice Pools per Skill - If monster type is minion, exclude Skill level
  for (let x = 0; x < presentSkillsArray.length; x++) {
    let stat = presentSkillsArray[x];
    let label = presentLabelsArray[x];
    let roller = rollerArray[x];
    if (typeof stat !== "undefined" ) {
        let statElement = document.createElement('span');
        statElement.textContent = '('+stat+')';
        statElement.style.marginRight = '5px'; 
        let skillElement = document.createElement('strong');
        skillElement.textContent = label;
        let diceElement = document.createElement('span');
        diceElement = dicepoolArray[x];
  
        let dicecontainerElement = document.createElement('div');
        dicecontainerElement.id = "div_dicecontainer";
        dicecontainerElement.appendChild(skillElement);
  
        if (monster.type !== "Minion" && monster.type !== "minion") {
        //dicecontainerElement.appendChild(statElement);
        }
        dicecontainerElement.appendChild(diceElement);
        dicecontainerElement.appendChild(roller);
        dicecontainerElement.appendChild(document.createElement('br'));
        allDicePoolsElement.appendChild(dicecontainerElement);
  
    }
  }
  
  outputElement.appendChild(allDicePoolsElement);
  return outputElement;
  