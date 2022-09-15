// Week 5 assigment number 1;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "Oe5Y15HfEWmshHUEtvcJlrnLOs4pp1DgPQZjsnmbiq2273rGD8",
    "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
  },
};
// Bhagwat Geeta verses printing using generators
const geeta = async (chapter) => {
  const res = await fetch(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/`,
    options
  );
  const bhagwatResult = await res.json();
  // console.log(bhagwatResult);
  let count = await bhagwatResult.length;
  // console.log(count);
  //   .then((response) => response.json())
  //   .then((response) => (result = response))
  //   .catch((err) => console.error(err));

  // res.then((res) => console.log(res.length));
  // console.log(result);
  // // return { text: result, count: result.length };
  // return res;
  return { bhagwatResult, count };
};

async function* krishnaVani() {
  console.log("Bhagwat Geeta Application");
  let i = 1;
  while (i < 19) {
    yield geeta(i);
    yield* verses(i);
    i++;
  }
}

async function updesh(ch, i) {
  let shlok = await fetch(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${ch}/verses/${i}/`,
    options
  );
  const ves = await shlok.json();
  console.log(ves);
}

async function* verses(chapterNumber) {
  // let ce;
  let count = await geeta(chapterNumber);
  // let c = await count.json();
  for (let i = 0; i <= count.count - 1; i++) {
    updesh(chapterNumber, i);
  }
}

// let i = c.then((res) => {});
// console.log(ce);

//   let totalVerse = c.then((res) => res.length);

function displayVerses(fn) {
  let vers = fn;
  fn.value.then((res) => {
    let bhagwan = res.bhagwatResult;
    console.log(bhagwan);
    bhagwan.forEach((shlok) => {
      document
        .getElementById("container")
        .insertAdjacentText("beforebegin", shlok.text);
    });
  });
}

//const chapter = krishnaVani();
//console.log(chapter.next());
//let v = chapter.next();
//chapter.next();
//chapter.next();
//chapter.next();
//chapter.next();
//chapter.next();

// with async and await, the

async function bhagwan() {
  const arjun = await fetch(
    "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18",
    options
  );
  const parth = await arjun.json();
  console.log(parth);
}
bhagwan();
