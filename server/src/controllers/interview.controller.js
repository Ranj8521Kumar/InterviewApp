export function getQuestion(req, res) {
    res.json({
        success: true,
        question: 'What is your name?'
    })
}

export function SubmitAnswer(req, res) {
    const { answer } = req.body;

    if(!answer){
        return res.status(400).json({
            success: false,
            message: 'Answer is required'
        })
    }

    res.json({
        success: true,
        message: answer,
    })
}