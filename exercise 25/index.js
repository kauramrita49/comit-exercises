let wn= 2;
if (wn==1)
console.log("today is m");
else if (wn==2)
console.log("today is t");
else if (wn==3)
console.log("today is w");
else if (wn==4)
console.log("today is t");
else if (wn==5)
console.log("today is f");
else if (wn==6)
console.log("today is sat");
else if (wn==7)
console.log("today is sun");

else console.log("number is not between 1-7");

let message;
switch (wn)
{
    case 1: message="monday";
    break;
    case 2: message="tue";
    break;
    case 3: message="wed";
    break;
    case 4: message="th";
    break;
    case 5: message="fr";
    break;
    case 6: message="sat";
    break;
    case 7: message="sun";
    break;
    default: message="error as number is not between 1-7";
    break;
}
console.log(message);
