function addFlexPrefixIfNedded(word) {
  if (word === "start" || word === "end") {
    return `flex-${word}`;
  }
  return word;
}

export { addFlexPrefixIfNedded };

export default {
  addFlexPrefixIfNedded
};
