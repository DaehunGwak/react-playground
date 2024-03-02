// interface 보다 쓰임세가 더 많음?
type Nickname = string;
type Health = number;
type Friends = Array<string>;
type Team = "red" | "blue" | "yellow";
type Player = {
  nickname: Nickname,
  healthBar: Health,
  team: Team,
};
const daehunPlayer: Player = {
  nickname: "daehun",
  healthBar: 10,
  team: "red",
};

type Food = string;
const kimchi: Food = "delicious";


// shape of Object
interface GamePlayer {
  nickname: string,
  team: Team,
  health: Health,
}

const player1: GamePlayer = {
  nickname: "player 1",
  team: "blue",
  health: 5,
}

interface User {
  name: string,
}

interface Director extends User {
  age: number,
}

const villeneuve: Director = {
  name: "Desnis Villenevue",
  age: 56,
};


// abstract: js 에서 클래스로 만듦
abstract class AbstractUser {
  constructor(
    protected firstName: string,
    protected lastName: string,
  ) {
  }

  abstract sayHi(name: string): string;

  abstract fullName(): string;
}

class Gamer extends AbstractUser {
  sayHi(name: string): string {
    return `Hi, ${name}! My name is ${this.fullName()}}`;
  }

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// new AbstractUser(); // cannot create an instance abstract class

// interface 로 변경: js 클래스로 만들지 않음
interface InterfaceUser {
  firstName: string,
  lastName: string,

  sayHi(name: string): string

  fullName(): string
}

interface Human {
  age: number,
}

class Actor implements InterfaceUser, Human {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public age: number,
  ) {}

  sayHi(name: string): string {
    return `Hi, ${name}! My name is ${this.fullName()}}`;
  }

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const testUser: InterfaceUser = new Actor("first", "last", 15);
console.log(testUser.sayHi("daehun"));

const test2User: InterfaceUser = {
  firstName: "first",
  lastName: "last",
  sayHi: name => `Hello, ${name}, maname ${this.fullName()}` ,
  fullName: () => `${this.firstName}, ${this.lastName}`,
}
console.log(test2User.sayHi("daehun"));
