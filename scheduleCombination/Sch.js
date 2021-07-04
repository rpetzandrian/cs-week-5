class Sch {
  constructor(data) {
    this.data = data
    this.cache = []
  }

  getSchedule(compare = 0) {
    if (this.cache[compare] !== undefined) {
      return this.cache[compare]
    }

    let data = this.data
    let result = []
    let maxIdx = 0
    for (let i = 0; i < data.length; i++) {
      let start = data[i].start
      if (start >= compare) {
        console.log('Happy looping,...', data[i])
        let temp = data[i]
        let otherRes = this.getSchedule(data[i].end)
        let mergeRes;
        if (otherRes === undefined) {
          mergeRes = [temp]
        } else {
          mergeRes = [temp, ...otherRes]
        }
        result[i] = mergeRes

        if (result[maxIdx] === undefined) {
          maxIdx = i;
        } else if (result[maxIdx].length < mergeRes.length) {
          maxIdx = i;
        }
      }
    }

    this.cache[compare] = result[maxIdx]
    return result[maxIdx]
  }
}

module.exports = Sch