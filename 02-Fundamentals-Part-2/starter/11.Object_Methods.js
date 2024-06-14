const newSiva = {
    firstName: 'siva',
    lastName: 'guru',
    birthYear: 1997,
    job: 'programmer',
    friends : ['inba','diwa','barath'],
    hasDrivingLicence: false,

    /* calcAge : function(birthYear){                        // type 1 method
        return 2024 - 1997
    }, */

    /* calcAge : function(){
        console.log(this)                                   // type 2 method
        return 2024 - this.birthYear
    } */

    calcAge : function(){
        this.age = 2024 - this.birthYear;                   // type 3 method
        return this.age; 
    },
    verifylicence: function(){
        this.licence = this.hasDrivingLicence ? 'a driving licence' : 'no driving licence';   // method create for challenge (siva)
        return this.licence
    },
    getsummary: function(){                                                              // class Solution
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDrivingLicence ? 'a' : 'no'} driving licence`
    }

    
}



// retriving function from object   // just like other Property we can access the calcAge Properties or Method

console.log(newSiva.calcAge());

/* console.log(newSiva['calcAge'](1997)) */

console.log(newSiva.age);
console.log(newSiva.age);
console.log(newSiva.age);

//Challenge
//"Siva is a 46 year old teacher, and he has a/no driving licence"

console.log(newSiva.hasDrivingLicence)
console.log(newSiva.verifylicence())

const summary = `${newSiva.firstName} is a ${newSiva.age} year old ${newSiva.job}, and he has ${newSiva.licence}`       

console.log(summary)

// class solution

console.log(newSiva.getsummary())



