// classes
type DictWords = {
  [term: string]: string,
};

class Dict {
  private readonly words: DictWords = {};

  bulkAdd(words: Word[]) {
    words.forEach((word) => this.add(word));
  }

  add(word: Word) {
    if (this.exists(word.term)) {
      console.warn(`사전 내 단어가 이미 존재해 추가 기능을 수행하지 못했습니다. (word: ${word})`);
      return;
    }
    this.words[word.term] = word.definition;
  }

  update(word: Word) {
    if (!this.exists(word.term)) {
      console.warn(`사전 내 단어가 없어 업데이트를 수행하지 못했습니다. (word: ${word})`);
      return;
    }
    this.words[word.term] = word.definition;
  }

  exists(term: string): boolean {
    return this.words[term] !== undefined;
  }

  get(term: string): string | undefined {
    return this.words[term];
  }

  bulkDelete(terms: string[]) {
    terms.forEach((term) => this.delete(term));
  }

  delete(term: string) {
    delete this.words[term];
  }

  showAll() {
    console.log(JSON.stringify(this.words));
  }

  count(): number {
    return Object.keys(this.words).length;
  }

  upsert(word: Word) {
    this.words[word.term] = word.definition;
  }
}

class Word {
  constructor(
    public readonly term: string,
    public readonly definition: string,
  ) {}

  toString(): string {
    return JSON.stringify(this);
  }
}

// main
const dict  = new Dict();

const helloWord = new Word("hello", "안녕");
const carWord = new Word("car", "자동차");

dict.add(helloWord);
dict.add(helloWord);
dict.add(carWord);

console.log(dict.get(helloWord.term));
console.log(dict.get(carWord.term));

dict.delete(helloWord.term);
dict.delete(helloWord.term); // 중복 삭제 시 예외 테스트 : 따로 발생 안함
console.log(dict.get(helloWord.term));

const helloWord2 = new Word("hello", "안녕, 안녕하세요");
dict.update(helloWord2);
dict.add(helloWord);
dict.update(helloWord2);

dict.showAll();

console.log(`count: ${dict.count()}`);

const newWord = new Word("new", "새로운");
const newWord2 = new Word("new", "새로운, 신상의");
dict.upsert(newWord);
dict.showAll();
dict.upsert(newWord2);
dict.showAll();

console.log(`exists: ${dict.exists("hello")}`);

const testWords = [
  new Word("test", "시험"),
  new Word("code", "코드"),
];
dict.bulkAdd(testWords);
dict.showAll();
dict.bulkDelete(testWords.map((word) => word.term));
dict.showAll();
