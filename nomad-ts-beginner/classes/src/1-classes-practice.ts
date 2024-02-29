type Words = {
  [key: string]: string // 이름은 중요하지 않음, 타입만 알아야 할 때
}

const test: Words = {
  potato: "food"
}
console.log(JSON.stringify(test));

class Dict {
  private readonly words: Words;

  constructor() {
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  getDef(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(
    public term: string,
    public def: string
  ) {
  }
}

const dict= new Dict();
const kimchi = new Word("kimchi", "한국의 음식");

dict.add(kimchi);
console.log(dict.getDef("kimchi"));
