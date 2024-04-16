//initial
let minMax = (a,b) => {
if (a > b ) console.log(`зНАЧЕНИЕ a = ${a}  больше значения b= ${b}`);
else if (b > a) console,log(`ЗНачение b = ${b} больше заначение a = {a} `);
else if (a == undefined ||  b == undefined) console.log('Введение значение');
else console.log(' зНАЧЕНИЕ ВВЕДЕНЫ НЕ КОРРЕКТНО');
}
minMax(5,4);