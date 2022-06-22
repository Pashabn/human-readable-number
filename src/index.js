module.exports = function toReadable(n) {
    const number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const ten = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    return n > 19
        ? n < 10 ** 2
            ? n % 10 >= 1
                ? ten[Math.floor(n / 10)] + ' ' + number[n % 10]
                : ten[n / 10]
            : n < 10 ** 3
                ? n % 10 ** 2 >= 1
                    ? toReadable(Math.floor(n / 10 ** 2)) + ' hundred ' + toReadable(n % 10 ** 2)
                    : toReadable(n / 10 ** 2) + ' hundred'
                : 'very big number'
        : number[n]
}
