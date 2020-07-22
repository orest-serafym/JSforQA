Task 1 Exercise 2 
//У класі FighterService спробуйте створити метод для отримання детальної інформації про бійця
getFightersInfo {
	const endpoint = 'resources/fighters-info.json';  
	const apiResult = await callApi(endpoint, 'GET');		

    	return JSON.parse(atob(apiResult.content));        
}
/*
  Створив один файл json із інформацією про бійців і потрібно було витягти з нього контент.
  Із синтаксисом не впорався, тому скидую все що встиг зробити
*/


Task 1 Exercise 3 
//Створити клас Fighter, який міститиме інформацію необхідну бійцю для бою (name, health, attack, etc.)
//Даний код не працює, тому просто хотів показати що певна робота було зроблена проте безуспішно.
function criticalHitChance() {
  		return Math.random() + 1;
	}


function dodgeChance() {
  		return Math.random() + 1;
	}

class Fighter {
	constructor(fighters){
		this.createFightersInfo();
	}

	getHitPower({tagName, attack = '', attributes = {} }){
		const element = document.createElement(tagName);
		const AttPower = attack * criticalHitChance()
    	element.classList.add(power);
    	

    	Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));

    return element;
	}

	getBlockPower({tagName, defense = '', attributes = {} }){
		const element = document.createElement(tagName);
		const DefPower = defense * dodgeChance()
    	element.classList.add(power);
    	

    	Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));

    return element;
	}
}