function parser(input) {
    var unparsed = input.replaceAll(/\([A-Z]+\)/g, '').split('#').map(qstns => qstns.split(/\t/)).map(qstn => qstn.slice(1, qstn.length))
    let questions = {}
    unparsed.forEach((list, i) => {
        list.forEach(question => {
            let key = "";
            switch (i) {
                case 0:
                    key = 'FFFF'
                    break;
                case 1:
                    key = 'Fight'
                    break;
                case 2:
                    key = 'Freeze'
                    break;
                case 3:
                    key = 'Fawn'
                    break;
                case 4:
                    key = 'Flight'
            }

            if (!questions[key]) {
                questions[key] = {}
            }
            let qstn = question.split(/\n/).slice(0, 5)
            questions[key][qstn[0]] = qstn.slice(1)
        })
    })
    return questions;
}