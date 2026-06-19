const mongoose= require("mongoose");

/***
 * 
 * Job description schema
 * resume text
 * self desription
 * technical question:
 * [          {question:"",
 *            intention:"",
 *              answer:""}]
 * behavioral question:
 * [          {question:"",
 *            intention:"",
 *              answer:""}]
 * skill gap:
 * [          {question:"",
 *            suggestion:"",
 *              answer:""}]
 * feedback:
 * [          {question:"",
 *            suggestion:"",
 *              answer:""}]
 * score:[{
 * }]
 * 
 */

const technicalQuestionSchema=new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Question is required"]
    },
    intention:{
        type:String,
        required:[true,"Intention is required"]
    },
    answer:{
        type:String,
        required:[true,"Answer is required"]
    }
},{_id:false})

const behavioralQuestionSchema=new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Question is required"]
    },
    intention:{
        type:String,
        required:[true,"Intention is required"]
    },
    answer:{
        type:String,
        required:[true,"Answer is required"]
    }
})

const skillGapSchema=new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Question is required"]
    },
    suggestion:{
        type:String,
        required:[true,"Suggestion is required"]
    },
    answer:{
        type:String,
        required:[true,"Answer is required"]
    }
})

const feedbackSchema=new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Question is required"]
    },
    suggestion:{
        type:String,
        required:[true,"Suggestion is required"]
    },
    answer:{
        type:String,
        required:[true,"Answer is required"]
    }
})

const scoreSchema=new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Question is required"]
    },
    score:{
        type:Number,
        required:[true,"Score is required"]
    }
})

const interviewReportSchema=new mongoose.Schema({
    jobDescription:{
        type:String,
        required:[true,"Job description is required"]
    },
    resume:{
        type:String,
    },
    selfDescription:{
        type:String,
    },
    matchScore:{
        type:Number,
        min:0,
        max:100
    },
    technicalQuestion:{
        type:Array,
    },
    behavioralQuestion:{
        type:Array,
        required:[true,"Behavioral question is required"]
    },
    skillGap:{
        type:Array,
        required:[true,"Skill gap is required"]
    },
    feedback:{
        type:Array,
        required:[true,"Feedback is required"]
    },
    score:{
        type:Array,
        required:[true,"Score is required"]
    }
})