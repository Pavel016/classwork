class Vehicle {
    constructor(название, тип, цвет) {
      this.название = название;
      this.тип = тип;
      this.цвет = цвет;
    }
    
    info() {
      console.log(`Транспортное средство: ${this.название}`);
      console.log(`Тип: ${this.тип}`);
      console.log(`Цвет: ${this.цвет}`);
    }
  }
  
  class Car extends Vehicle {
    constructor(название, тип, цвет, количествоДверей) {
      super(название, тип, цвет);
      this.количествоДверей = количествоДверей;
    }
        
    info() {
      super.info();
      console.log(`Количество дверей: ${this.количествоДверей}`);
    }
  }
  
  class Bicycle extends Vehicle {
    constructor(название, тип, цвет, количествоПередач) {
      super(название, тип, цвет);
      this.количествоПередач = количествоПередач;
    }
    
    info() {
      super.info();
      console.log(`Количество передач: ${this.количествоПередач}`);
    }
  }
  
  // Пример использования классов
  
  let car1 = new Car("Мерседес", "легковой", "черный", 4);
  car1.info();
  
  let bicycle1 = new Bicycle("Шоссейный", "велосипед", "красный", 18);
  bicycle1.info();