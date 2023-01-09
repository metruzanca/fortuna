export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = array[currentIndex]
  }
  return array;
}

export async function flashStudentNames(data) {
  const random = shuffle(data.students)

  for (let student of random) {
    console.clear()
    console.log(student.name)
    await sleep(100)
  }
}
