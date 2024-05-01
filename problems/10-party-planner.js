class PartyPlanner {
	constructor(guestList = []){
		this.guestList = guestList
	}

	addToGuestList(name){
		this.guestList.push(name)
	}

	throwParty(){
		if (!this.guestList.length){
			return("Gotta add people to the guest list")
		}
		if (this.guestList.length === 1) {
			return(`Welcome to the party ${this.guestList[0]}`)
		} else {
			return(`Welcome to the party ${this.guestList[0]} and ${this.guestList[1]}`)
		}
	}
}

const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
