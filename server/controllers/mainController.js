let practiceChart = [
    {
        id: 1,
        composer: 'Kapustin',
        piece: 'Pastorale',
        tempo: 180,
        notes: 'Fix articulation'
    },
    {
        id: 2,
        composer: 'Liszt',
        piece: 'Etude',
        tempo: 136,
        notes: 'Get tempo to 136'
    }
];

let quotes = [
    `It's easy to play any musical instrument: all you have to do is touch the right key at the right time and the instrument will play itself. - J.S. Bach`,
    `The aim and final end of all music should be none other than the glory of God and the refreshment of the soul. - J.S. Bach`,
    `Music should strike fire from the heart of man, and bring tears from the eyes of woman. - Beethoven`,
    `Every difficulty slurred over will be a ghost to disturb your repose later on. - Chopin`,
    `Simplicity is the final achievement. After one has played a vast quantity of notes and more notes, it is simplicity that emerges as the crowning reward of art. - Chopin`,
    `A person of any mental quality has ideas of his own. This is common sense. - Liszt`,
    `Brahms' Variations are better than mine, but mine were written before his - Liszt`,
    `Only the pure in heart can make a good soup. - Beethoven`
]

let taskID = 3;

module.exports = {
    fetchPracticeChart: (req, res) => {
        res.status(200).send(practiceChart)
    },
    newPracticeItem: (req, res) => {
        practiceChart.push({
            id: taskID,
            composer: req.body.composer,
            piece: req.body.piece,
            tempo: req.body.tempo,
            notes: req.body.notes
        })
        taskID++
        res.status(200).send(practiceChart)
    },
    updatePracticeItem: (req, res) => {
        let itemIndex = practiceChart.findIndex(item => item.id === +req.params.id)
        practiceChart[itemIndex] = {
            id: req.params.id,
            composer: req.body.composer,
            piece: req.body.piece,
            tempo: req.body.tempo,
            notes: req.body.notes
        }
        res.status(200).send(practiceChart)
    },
    deleteItem: (req, res) => {
        let itemIndex = practiceChart.findIndex(item => item.id === +req.params.id)
        console.log(itemIndex)
        practiceChart.splice(itemIndex, 1)
        res.status(200).send(practiceChart)
    },
    randomQuote: (req, res) => {
        let quoteIndex = Math.floor(Math.random() * Math.floor(8))
        res.status(200).send(quotes[quoteIndex])
    }
}