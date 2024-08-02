// Stack(For Premitive Data Type and passes copies) and Heap (For Non Premitive Data Type and Passes Reference of Data type)

let username = "Kiran"
let NicknameUsername = username
NicknameUsername = "Guddy"
console.log(username) // Kiran
console.log(NicknameUsername) //Guddy

let user1Info = {
    name: "Kiran",
    age: 24,
    EductionLevel: "Computer Science" 
}
let user2Info = user1Info
user2Info.EductionLevel = "B.Tech"
console.log(user1Info.EductionLevel) ;// Output: B.Tech
console.log(user2Info.EductionLevel) ;// Output: B.Tech