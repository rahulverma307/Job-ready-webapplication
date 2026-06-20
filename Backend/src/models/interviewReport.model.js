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
},{_id:false})

const skillGapSchema=new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Question is required"]
    },
    severity:{
        type:String,
        enum:["low","medium","high"],
        required:[true,"Severity is required"]
    }
},{_id:false})

const preparationPlanSchema=new mongoose.Schema({
    day:{
        type:Number,
        required:[true,"Day is required"]
    },
    focus:{
        type:String,
        required:[true,"Focus is required"]
    },
    tasks:{
        type:Array,
        required:[true,"Tasks is required"]
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
    technicalQuestion:[technicalQuestionSchema],
    behavioralQuestion:[behavioralQuestionSchema],
    skillGap:[skillGapSchema],
    preparationPlan:[preparationPlanSchema]
})

module.exports=mongoose.model("InterviewReport",interviewReportSchema);