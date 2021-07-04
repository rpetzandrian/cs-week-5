const schedule = require('./Sch')

const data = [
  {
    name: 'Bahasa Indonesia',
    start: 7,
    end: 9
  },
  {
    name: 'Fisika',
    start: 9,
    end: 12
  },
  {
    name: 'Kewarganegaraan',
    start: 7,
    end: 8
  },
  {
    name: 'Matematika',
    start: 9,
    end: 10
  },
  {
    name: 'English',
    start: 11,
    end: 12
  },
  {
    name: 'Agama',
    start: 12,
    end: 13
  },
  {
    name: 'Struktur Data',
    start: 10,
    end: 12
  },
]

const sch = new schedule(data)
const result = sch.getSchedule()
console.log(result)