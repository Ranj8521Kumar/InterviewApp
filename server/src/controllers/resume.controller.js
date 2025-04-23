import fs from 'fs';
import pdf from  'pdf-parse';


export const analyseResume = async (req, res) => {
    if(!req.file){
        return res.status(400).json({
            success: false,
            message: 'Resume PDF File is required'
        })
    }

    try  {
        const filePath = req.file.path;
        const dataBuffer = fs.readFileSync(filePath);
        const extractedText = await pdf(dataBuffer);
        fs.unlinkSync(filePath);

        const text = extractedText.text;

        res.json({
            success: true,
            summary: "Resume successfully parsed.",
            suggestions: [
                "Include measurable achievements.",
                "Add relevant projects."
            ],
            data: text
        })
        
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}