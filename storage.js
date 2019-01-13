class dailyQuestions {
    constructor(questions, number_questions)
    {
        this.questions = questions;
        this.answers = Array(number_questions).fill(Array(7).fill(""));
    }

    set_question() {
        
    }

    addResponse(question_number, day, response) {
        answers[question_number][day] = response;
    }

    returnResponse(question_number, day) {
        return(answers[question_number][day]);
    }
}

class extendedQuestions {
    constructor(questions, number_questions)
    {
        this.questions = questions;
        this.response_record = Array(0).fill(new dailyQuestions(questions, number_questions));
        this.weeks = 0;
    }

    add_week(week_questions)
    {
        response_record.concat(week_questions);
        weeks = weeks+1;
    }

}