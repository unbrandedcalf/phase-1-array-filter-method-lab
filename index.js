function findMatching(array, string) {
    const matchingDrivers = array.filter((name) => {
      return name.toLowerCase() === string.toLowerCase();
    });
  
    return matchingDrivers;
  }  

function fuzzyMatch(array, string) {
    const matchingDrivers = array.filter((name) => {
        return name.toLowerCase().startsWith(string.toLowerCase())
    })
    return matchingDrivers
}

function matchName(array, string) {
    return array.filter( array => array.name === string)
}