    //№1
    // class Factorial 
    // { 
    //     calculate(number) 
    //     { 
    //       if (number === 0 || number === 1) 
    //       { 
    //         return 1; 
    //       } 
    //       else 
    //       { 
    //         let result = 1; 
    //         for (let i = 2; i <= number; i++) 
    //         { 
    //           result *= i; 
    //         } 
    //         return result; 
    //       } 
    //     } 
    //   } 
       
    //   const number = parseInt(prompt("Введите число:")); 
    //   const factorial = new Factorial(); 
    //   const result = factorial.calculate(number); 
    //   console.log(`Факториал числа ${number} равен: ${result}`);
    //№2
    // class ArithmeticProgression {
    //     constructor(firstTerm, difference, numberOfTerms) {
    //       this.firstTerm = firstTerm;
    //       this.difference = difference;
    //       this.numberOfTerms = numberOfTerms;
    //     }
      
    //     getSum() {
    //       const lastTerm = this.firstTerm + (this.numberOfTerms - 1) * this.difference;
    //       const sum = ((this.firstTerm + lastTerm) * this.numberOfTerms) / 2;
    //       return sum;
    //     }
    //   }
      
    //   
    //   const progression = new ArithmeticProgression(1, 2, 5);
    //   const sum = progression.getSum();
    //   console.log("Сумма арифметической прогрессии:", sum);
    //#3
    // class squareroots {
    //     constructor(a, b, c) {
    //       this.a = a;
    //       this.b = b;
    //       this.c = c;
    //     }
      
    //     solve() {
    //       let discriminant = this.b * this.b - 4 * this.a * this.c;
      
    //       if (discriminant > 0) {
    //         let x1 = (-this.b + Math.sqrt(discriminant)) / (2 * this.a);
    //         let x2 = (-this.b - Math.sqrt(discriminant)) / (2 * this.a);
    //         return {
    //           roots: [x1, x2]
    //         };
    //       } else if (discriminant === 0) {
    //         let x = -this.b / (2 * this.a);
    //         return {
    //           roots: [x]
    //         };
    //       } else {
    //         return {
    //           roots: []
    //         };
    //       }
    //     }
    //   }
      
    
    //   let a = parseFloat(prompt("Введите значение a:"));
    //   let b = parseFloat(prompt("Введите значение b:"));
    //   let c = parseFloat(prompt("Введите значение c:"));
      
 
    //   let equation = new squareroots(a, b, c);
      
    
    //   let solution = equation.solve();
      
    //   if (solution.roots.length > 0) {
    //     console.log("Корни уравнения: " + solution.roots.join(", "));
    //   } else {
    //     console.log(" нема корней.");
    //   }