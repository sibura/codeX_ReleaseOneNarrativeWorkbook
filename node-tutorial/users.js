// a empty user list
var users = [];

//create 3 users in the users array users.push({ 

//Create 3 users : Jack, Callum and Neil - they all should have the name Bradshaw
users.push({ 
 	first_name : 'Jack', 
 	last_name : 'Bradshaw' 
});
users.push({
	first_name : 'Callum',
	last_name : 'Bradshaw'
});
users.push({
	first_name : 'Neil',
	last_name : 'Bradshaw'
});

//now loop through the users array and write the following data to the console below each other for each user
//you can use the forEach method
for( var i=0; i< users.length; i++) {
   console.log('Hi, ' + users[i].first_name + ' ' + users[i].last_name + '!');
}
//Hi, first_name last_name!