abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickname: string,
    public age: number
  ) {}

  abstract getNickName(): string

  // 아무것도 없으면 public, private/protected 키워드 가능
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName() {
    return this.nickname;
  }

}

const daehun = new Player('daehun', 'gwak', "Daehun", 30);

// daehun.firstName // private error
console.log(daehun.getNickName());
console.log(daehun.getFullName());
