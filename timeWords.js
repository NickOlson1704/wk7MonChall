function convertTimeToWords(timeString) {
    const timeParts = timeString.split(':')
    const hours = parseInt(timeParts[0])
    const minutes = parseInt(timeParts[1])

    const hourWords = [
        'twelve', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'
      ];
    
    const minuteWords = [
        'o\'clock', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two',
        'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six',
        'twenty-seven', 'twenty-eight', 'twenty-nine', 'thirty',
        'thirty-one', 'thirty-two', 'thirty-three', 'thirty-four',
        'thirty-five', 'thirty-six', 'thirty-seven', 'thirty-eight',
        'thirty-nine', 'forty', 'forty-one', 'forty-two', 'forty-three',
        'forty-four', 'forty-five', 'forty-six', 'forty-seven',
        'forty-eight', 'forty-nine', 'fifty', 'fifty-one', 'fifty-two',
        'fifty-three', 'fifty-four', 'fifty-five', 'fifty-six',
        'fifty-seven', 'fifty-eight', 'fifty-nine'
      ];

      let timeInWords = ''

      if (hours === 0) {
        timeInWords += 'twelve'
      } else if (hours <= 12) {
        timeInWords += hourWords[hours]
      } else {
        timeInWords += hourWords[hours - 12]
      }

      if (minutes === 0) {
        timeInWords += 'o\'clock'
      } else {
        timeInWords += ' ' + minuteWords[minutes]
      }

      return timeInWords
}


console.log(convertTimeToWords('08:30'))
console.log(convertTimeToWords('14:15'))
console.log(convertTimeToWords('23:45'))

const hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six',
         'seven', 'eight', 'nine', 'ten', 'eleven']

const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen']

const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty']


function timeWords(time) {
    if (time === '00:00') {
        return 'midnight'
    }

    if (time === '12:00') {
        return 'noon'
    }

    let [hrs, mins] = time.split(':')
    hrs = parseInt(hrs)
    mins = parseInt(mins)

    let str = hours[hrs % 12] + ' '

    if (mins >= 20) {
        str += tens[Math.floor(mins / 10)] + ones[mins % 10]
    } else if (mins >= 10) {
        str += ones[mins]
    } else if (mins > 0) {
        str += `oh ${ones[mins]}`
    } else {
        str += `o'clock`
    }

    if (hrs >= 12) {
        str += ' pm'
    } else {
        str += ' am'
    }
    
    return str
}

console.log(timeWords('08:30'))
console.log(timeWords('14:15'))
console.log(timeWords('23:45'))