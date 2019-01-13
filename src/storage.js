export default class weekly_responses {
    constructor(number)
    {
        this.answers = Array(number);
        for (let i = 0; i<number; i++) 
        {
            this.answers[i] = [" "," "," "," "," "," "," "];
        }
        this.number = number
    }

    addResponse(question_number, day, response) {
        this.answers[question_number][day-1] = response;
    }

    returnResponse(question_number, day) {
        return(this.answers[question_number][day-1]);
    }

    returnResponses(question_number)
    {
        return(this.answers[question_number]);
    }

    returnAllResponses () {
        return(this.answers);
    }
}

class response_record {
    constructor(number)
    {
        this.total_weeks = 0;
        this.response_record = Array(0);
    }

    add_week(responses_of_the_week)
    {
        //input weekly response object
        this.response_record.push(responses_of_the_week);
        this.total_weeks++;
    }

    return_week(week_number) 
    {
        return(this.response_record[week_number - 1]);
    }

    return_all_question_responses(question_number)
    {
        var total_response = Array(0);
        for(let i = 0; i < this.total_weeks; i++)
        {
            total_response.concat(response_record[i].returnresponse(question_number));
        }
        return total_response;
    }

}

var recorded_responses = new response_record(7);

export function handleResponseList(responseList){
    /* TODO: responseList is a list of question and answer pairs.
    For the i^th pair, get the question using responseList[i].question,
    and get the answer using responseList[i].answer */

    /*
    This function is called when the user finishes answering all
    questions. It should then manage the responseList with backend somehow. Somehow send
    all the responses to email?
    */
    var today = new Date();
    var day = today.toUTCString().getDay();
    var i = new weekly_responses(8)
    for(i = 0; i <= 8; i++) {
        i.addResponse(i + 1, day, responseList[i].answer)
    }
    
    if (day == 6) {
        var j = new response_record(8)
        j.add_week(i)
    }
}


/*
var c = new weekly_responses(10)
c.addResponse(1, 1, "I am cool")
c.addResponse(1, 2, "It was a great day today")
c.addResponse(1, 3, "It was a bad day today")
c.addResponse(2, 1, "Hahahahahahahahahah!")
console.log(c.returnResponses(1))
//console.log(c.returnWeeklyResponses())
var b = new response_record(10)
b.add_week(c)

console.log(b.return_week(1).returnResponses(1))
var a = c.returnAllResponses();

for (let i = 0; i < 7; i++)
{
    console.log(a[i]);
}
*/
/*
Attempt with firebase 
*/

