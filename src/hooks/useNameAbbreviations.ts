const useNameAbbreviations = (name: string) => {
  let count = name.indexOf(" ");
  let shortCut = name.slice(0, count + 2);
  return shortCut;
};

export default useNameAbbreviations;
