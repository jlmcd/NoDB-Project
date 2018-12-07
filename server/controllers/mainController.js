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
    }

}