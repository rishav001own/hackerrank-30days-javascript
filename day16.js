function main() {
    const S = readLine();

  try {
    console.log(eval(S))
  } catch (e) {
    console.log('Bad String')
  }
}