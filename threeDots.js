const ages = [12, 14, 16, 13, 17];
const ages2 = [15,16,12];
const ages3 = [25,36,22,29];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages,...ages2,...ages3]
// console.log(allAges2);


const buisness = 650;
const minister = 450;
const socib = 250;
const money = [650,450,250];
const maximum = Math.max(...money);
console.log(maximum);