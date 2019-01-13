class weekly_responses {
    constructor(number)
    {
        this.answers = Array(number).fill([" "," "," "," "," "," "," "]);
    }

    addResponse(question_number, day, response) {
        answers[question_number][day-1] = response;
    }

    returnResponse(question_number, day) {
        return(answers[question_number][day-1]);
    }

    returnResponse(question_number)
    {
        return(answers[question_number]);
    }
}

class response_record {
    constructor(number)
    {
        this.total_weeks = 0;
        this.response_record = Array(0).fill(new weekly_responses(number));
    }

    add_week(responses_of_the_week)
    {
        response_record.concat(responses_of_the_week);
        total_weeks = total_weeks + 1;
    }

    return_week(week_number) 
    {
        return(response_record[week_number]);
    }

    return_all_question_responses(question_number)
    {
        var total_response = Array(0);
        for(i = 0; i < total_weeks; i++)
        {
            total_response.concat(response_record[i].returnresponse(question_number));
        }
        return total_response;
    }

}
