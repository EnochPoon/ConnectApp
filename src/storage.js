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

export default class response_record {
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
        for(i = 0; i < total_weeks; i++)
        {
            total_response.concat(response_record[i].returnresponse(question_number));
        }
        return total_response;
    }

}

var recorded_responses = new response_record(7);
const sampleQ = ['What is one plus one?', 'Calculate the mass of the sun.', 'How are you doing?', 'Did i stress you out?', 'q5', 'q6', 'last'];

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

