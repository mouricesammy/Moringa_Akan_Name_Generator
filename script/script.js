
function getAkanName () {
  let yearOfBirth = document.getElementById("year-input").value;
  let monthOfBirth = Number(document.getElementById("month-input").value);
  let dayOfBirth = Number(document.getElementById("day-input").value);

  let genders = document.getElementsByName("gender");

 
  function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }

  function monthValidator () {
    if (monthOfBirth < 1 || monthOfBirth > 12) {
      return false;
    } else {
      return true;
    }
  }

  function dayValidator () {
    if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
      if (dayOfBirth > 28 || dayOfBirth < 1) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth > 29) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth < 1) {
        return false;
      } else {
        return true;
      }
    } else if (dayOfBirth < 1 || dayOfBirth > 31){
      return false;
    } else {
      return true;
    }
  }

  
  let monthValid = monthValidator();
  let dayValid = dayValidator();
  let myGenderValue = getGender();

  CC = Number(yearOfBirth.slice(0,2));
  YY = Number(yearOfBirth.slice(2,4));
  MM = monthOfBirth
  DD = dayOfBirth


  let dayOfWeekNumber =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
  dayOfWeekNumber = parseInt(dayOfWeekNumber);  
  

 let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi","Kwame"
  ];

  let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua","Ama"
  ];


 //kindly troubleshhot this part. its the shortest but seems to fail

  // let maleAkanNames = [
  //   "Kwame","Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi"
  // ];

  // let femaleAkanNames = [
  //   "Ama","Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"
  // ];
  
//   let WeekDays = [
//     "Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"
//   ];
//  const validDayOfweek = [0,1,2,3,4,5,6];


//  if(!validDayOfweek.includes(dayOfTheWeek) ){
//    alert("We do not have Akan Name for you");

//   }else{
//    if (myGenderValue == "male" && monthValid && dayValid){
//     // document.getElementById("reveal-result").innerHTML = "You were born on a "+WeekDays[dayOfTheWeek]+", your Akan name is " + maleAkanNames[dayOfTheWeek];
//      document.getElementById('result').textContent = "You were born on a "+WeekDays[dayOfWeekNumber]+", your Akan name is " + maleAkanNames[dayOfWeekNumber];
//      document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[dayOfWeekNumber];
//      document.getElementById('result').style.fontSize = "22px"
//      document.getElementById('result').style.color = "green"
//     }else if(myGenderValue == "female" && monthValid && dayValid) {
//      document.getElementById('result').textContent = "You were born on a "+WeekDays[dayOfWeekNumber]+", your Akan name is " + femaleAkanNames[dayOfWeekNumber];
//      document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[dayOfWeekNumber];
//      document.getElementById('result').style.fontSize = "22px"
//      document.getElementById('result').style.color = "green"
//     }else{
//       alert("You entered invalid month or day");
//     }
//   }


   if (myGenderValue == "male" && monthValid && dayValid){
    switch (dayOfWeekNumber) {
      case 1:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + maleAkanNames[0];
        document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[0];
        document.getElementById('result').style.fontSize = "24px"
        document.getElementById('result').style.color = "green"
        return false;
        break;
      case 2:
        document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + maleAkanNames[1];
        document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[1];
        document.getElementById('result').style.fontSize = "24px"
        document.getElementById('result').style.color = "green"
        return false;
        break;
      case 3:
        document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + maleAkanNames[2];
        document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[2];
        document.getElementById('result').style.fontSize = "24px"
        document.getElementById('result').style.color = "green"
        return false;
        break;
      case 4:
        document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + maleAkanNames[3];
        document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[3];
        document.getElementById('result').style.fontSize = "24px"
        document.getElementById('result').style.color = "green"
        return false;
        break;
      case 5:
        document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + maleAkanNames[4];
        document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[4];
        document.getElementById('result').style.fontSize = "24px"
        document.getElementById('result').style.color = "green"
        return false;
        break;
      case 6:
        document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + maleAkanNames[5];
        document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[5];
        document.getElementById('result').style.fontSize = "24px"
        document.getElementById('result').style.color = "green"
        return false;
        break;
      case 7:
        document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + maleAkanNames[6];
        document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[6];
        document.getElementById('result').style.fontSize = "24px"
        document.getElementById('result').style.color = "green"
        return false;
        break;
      case 0:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + maleAkanNames[0];
        document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[0];
        document.getElementById('result').style.fontSize = "24px"
        document.getElementById('result').style.color = "green"
        return false;
        break;
      default:
        alert("We do not have Akan Name for you");

    }
   } else if(myGenderValue == "female" && monthValid && dayValid) {
    switch (dayOfWeekNumber) {
      case 1:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + femaleAkanNames[0];
        document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[0];
        document.getElementById('result').style.fontSize = "24px"
        document.getElementById('result').style.color = "green"
        return false;
        break;
      case 2:
        document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + femaleAkanNames[1];
        document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[1];
        document.getElementById('result').style.fontSize = "24px"
        document.getElementById('result').style.color = "green"
        return false;
        alert("Kwadwo");
        break;
      case 3:
        document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + femaleAkanNames[2];
        document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[2];
        document.getElementById('result').style.fontSize = "24px"
        document.getElementById('result').style.color = "green"
        return false;
        break;
      case 4:
        document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + femaleAkanNames[3];
        document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[3];
        document.getElementById('result').style.fontSize = "24px"
        document.getElementById('result').style.color = "green"
        return false;
        break;
      case 5:
        document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + femaleAkanNames[4];
        document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[4];
        document.getElementById('result').style.fontSize = "24px"
        document.getElementById('result').style.color = "green"
        return false;
        break;
      case 6:
        document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + femaleAkanNames[5];
        document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[5];
        document.getElementById('result').style.fontSize = "24px"
        document.getElementById('result').style.color = "green"
        return false;
        break;
      case 7:
        document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + femaleAkanNames[6];
        document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[6];
        document.getElementById('result').style.fontSize = "24px"
        document.getElementById('result').style.color = "green"
        return false;
        break;
      case 0:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + femaleAkanNames[0];
         document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[0];
        document.getElementById('result').style.fontSize = "24px"
        document.getElementById('result').style.color = "green"
        return false;
        break;
      default:
        alert("We do not have Akan Name for you");
      }
    } else{
      alert("You entered invalid month or day");
    }
}