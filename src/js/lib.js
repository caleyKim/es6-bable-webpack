

export class List {
  constructor(target,data = []) {
    this.target = target;
    this.data = data
  }
  printItems() {
    let el = ''
    for(let i in this.data){
      el += `<li>엘리먼트 출력 ${this.data[i].title}</li>`
    }
    return el
  }
}

export class Ttt extends List {
  constructor(target,data = [], upgrade) {
    super(target,data);
    this.upgrade = upgrade;    
  }
  output (){
    console.log(this.target,this.data,this.upgrade)
  }
}