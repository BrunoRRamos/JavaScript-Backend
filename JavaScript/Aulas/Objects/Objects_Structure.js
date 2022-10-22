//Objects Basic Structure:
// const <name> = {key: val, ... key: val}
const objectTest = {name: 'Bruno', age: 19, email: 'testmail@gamail.com'}
const objectTest2 = {name: 'Julia', age: 34, email: 'juliatest@gmail.com'}


//Returning an object key:
//Object<name>.key<name> -> <keyVal>

console.log(objectTest.name, objectTest.age)

//Acess an key with key array:
//Object[array[i]] -> keyValue

const arrayKeys = ['name', 'age', 'email']

arrayKeys.forEach(element => {
    console.log(objectTest[element])
});

//Object["keyName"] -> keyValue

console.log(objectTest['name'])
console.log(objectTest[arrayKeys[0]])

//Insert or Update an object key value:
//Insert a new key: Object.newKeyName = newKeyValue

objectTest.salary = 1390.50
console.log(objectTest)

//Update some Key value:
//Object.keyName = newValue

objectTest.salary = 6390.50
console.log(objectTest)


//Delete some object key:
// delete object.keyName

delete objectTest.salary
console.log(objectTest)

//For In

//for (const key in object) {
//    BLOCK
//}
//Key -> key; obeject[key] -> key value

for (const key in objectTest) {
    console.log(`${key} : ${objectTest[key]}`)
}

//Spreding Syntax
//Const spredName = [... ArrayName[index].key, ->]

objectArray = [objectTest, objectTest2]
const spredTest = [...Object.values(objectArray[0]), ...Object.values(objectArray[1])]
console.log(spredTest)

//JSON Conversion

//JSON to Object
//const ObjectToJASON = JASON.parse(objectTest)

//Object to JSON
const JASON_ToObject = JSON.stringify("JASON_NAME")