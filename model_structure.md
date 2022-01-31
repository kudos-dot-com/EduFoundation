<!-- user Model:
    name,email,phone number, highest degree of education,
exams Model:

questions models

answers model:

hints model: -->

```json
    //User Model
    user:{
        _id:"string",
        name:"string",
        email:"string",
        phone_number:"string",
        highest_degree_of_education:"string",
        did_token:"string",
        User_type:"string",
        verified:"boolean"
        exams_details:ObjectId
    }
    exam_details:{
        _id:"string",
        examId:"string",
        marks:{
            obtained:"number",
            positive_marks:"number",
            negative_marks:"number"
        }
    }
    //Exams Model
    exams:{
        _id:"string",
        subject:"string",
        exam_type:"string",
        questions:,
    }
    chapter:{
        _id:"string",
        chapter_name:"string"
    },
    subject:{
        _id:"string",
        subject_name:"string",
        chapters:chapter[]
    }
    //questions model
    question:{
        _id:"string",
        question:"string",
        chapter_id:"chapter.ObjectId",
        question_type:question_type.ObjectId,
        answers:answers[],
        correct_answer:"answer",
        hints:"string with URL"
    }

    //questions Types
    question_type:{
        _id:"string",
        type_name:"string",
        positive_marks:"number",
        negetive_marks:"number",
    }
   
    //answers
    answer:{
    _id:"string"
    answer:"array[string]",
    }
```
