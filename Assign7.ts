alert("Welcome to Assignment # 7 developed by Syed Muhammad Rafay Hassni");
alert("1. Write a ts program to find length of a string.");
var stringday:string = "Welcome to Assignment # 7 developed by Syed Muhammad Rafay Hassni";
var stringkasize:number = stringday.length;
console.log("The size of the string is",stringkasize);
alert(" Write a ts program to copy one string to another string.");
var stringlumber1:string = "Han vai ki hal chal ay";
var stringlumber2:string ="";
stringlumber2=stringlumber1;
console.log("The string # 2 data is = ",stringlumber2);
alert(" Write a ts program to concatenate two strings.");
var stringnumb1:string = "This is Syed Muhammad";
var stringnumb2:string = " Rafay Hassni";
var stringfinale:string = stringnumb1 + stringnumb2;
console.log("Your string # 1 is = ",stringnumb1);
console.log("Your string # 2 is = ",stringnumb2);
console.log("Your final string is  = ",stringfinale);
alert("Write a ts program to compare two strings.");
var stringpehli:string = "Han bhai yeh hay pehli cheez";
var stringdosri:number = stringpehli.localeCompare("Han bhai yeh hay pehli cheez");
if(stringdosri==0){
    console.log("Your two strings are matched")
}else{
    console.log("Pata nahi konsi strings day di hein ajeeb");
}
alert("5. Write a ts program to convert lowercase string to uppercase.");
var stringdayyar:string = "this is syed muhammad rafay";
var waddistring:string =stringdayyar.toUpperCase();
console.log("Your string in upper case is = ",waddistring);
alert("Write a ts program to convert uppercase string to lowercase.");
var waddistring:string = "I AM SYED MUHAMMAD RAFAY HASSNI PROUD PAKISTANI";
var chotistring:string = waddistring.toLocaleLowerCase();
console.log("Your string in lowecase is = ",chotistring);
//alert("7. Write a ts program to toggle case of each character of a string.");
function togglekarein(mixstring:string) :string {
    for (let index = 0; index < mixstring.length; index++) {
        var faltu:string = "";
        var alfaz= mixstring.charCodeAt(index);
        if (alfaz>=60 && alfaz <=90) {
            var choticheez:string =String.fromCharCode(alfaz).toLowerCase();
            faltu=choticheez;
             var result = result+faltu;
        }else if(alfaz>=97 && alfaz <=122){
            var bricheez:string =String.fromCharCode(alfaz).toUpperCase();
            faltu=bricheez;
            result = result+faltu;
        }else if(mixstring[index]==" "){
            faltu = mixstring[index];
            result = result+faltu;
        }
        
    }
    return result;
}
var mixstring:string = "Han";
 var stringfinale:string =togglekarein(mixstring);
 console.log("Your toggled string is = ",stringfinale);
alert("9. Write a ts program to count total number of vowels and consonants in a string.");
var aikstringdun:string = "Hey this is syed muhammad rafay";
var vowel:number=0;
var consonants:number = 0 ;
for (let index = 0; index < aikstringdun.length; index++) {
    if (aikstringdun[index]=="a" || aikstringdun[index]=="e" || aikstringdun[index]=="i" || aikstringdun[index]=="o"|| aikstringdun[index]=="u" || aikstringdun[index]=="A" || aikstringdun[index]=="E" || aikstringdun[index]=="O"||aikstringdun[index]=="U") {
        vowel++;
    }else{
        consonants++;
    }
   
    
}
console.log("The number of vowels in the string is",vowel);
console.log("The number of consonants in the string is",consonants);
alert("39.Write a ts program to find maximum between two numbers using conditional operator.")
var number1:number = 39;
var number2:number = 67;
var result:string = number2>number1?" = number 2 is greater than number 1":"number 1 is greater";
console.log("number 1 = 39 , number 2 = 67",result);
alert("40.Write a ts program to find maximum between three numbers using conditional operator.")
var numb1:number = 67;
var numb2:number = 47;
var numb3:number = 27;
var finalcheez:string = numb1>numb2 && numb1>numb3?" = number 1 is greater than number 2 and number 3":numb2>numb1 && numb2>numb3?" = number 2 is greater than 1 and 3":" = number3 is greater than 1 and 2";
console.log("number 1 = 67,number 2 = 47 , number 3 = 27",finalcheez);
alert("41.Write a ts program to check whether a number is even or odd using conditional operator.")
var aikhinumber:number = 79;
var ajajadudikhaon:string = aikhinumber%2==0?" = Your number is even":" = Your number is odd";
console.log("Number = 79",ajajadudikhaon);
alert("42.Write a ts program to check whether year is leap year or not using conditional operator.")
var year:number = 2022;
var leapyeardikhaon:string = year%4==0?" = your year is  a leap year":" = your year is not a leap year";
console.log("Your year is",year,leapyeardikhaon);

alert("43.Write a ts program to check whether character is an alphabet or not using conditional operator.")
var chracterbataapna:string = "@Chuh2dary1";
var alphabetbtaon:string = chracterbataapna>='a' && chracterbataapna<='z'|| chracterbataapna>='A'&& chracterbataapna<='Z'?"Your inpted character is alphabet":"Your inputed charcter is not alphabet";
console.log(chracterbataapna,alphabetbtaon);
alert("Write a ts program to print day of week name using switch case.");
var weeknamedas:string | null = "Write the number 1-7 to print that specific day";
var weeknameupdate:number= Number(weeknamedas);
switch (weeknameupdate) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
    console.log("Wednesday");
    break;
    case 4:
    console.log("Thursday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    case 7:
    console.log("Sunday");
    default:
        console.log("Read the instructions carefully");
}
console.log("Out of Switch");