# Mars Mission Registration Form - Part 2

Add a few questions to your mars registration form - again, including parts of state, functional handlers, and updating the confirmation dialogue to include the new information:

- Radio Questions:
  - Can you breathe underwater longer than 1 minute?
    - Yes
    - No
    - I don't know
  - What is your marital status?
    - Married
    - Unmarried
  - When you are in a stressful or difficult situation, how do you most frequently react?
    - Determination: I continue to confront the situation.
    - Defeat: I stop confronting the situation.
    - Anger: I become upset at the situation.
    - Resourcefulness: I seek help to confront the situation.
  - Are you claustrophobic?
    - Yes
    - No
    - I don't know
- Checkbox Questions:
  - Does your family have a history of (check all that apply):
    - Cancer
    - Heart Disease
    - Diabetes
  - Do you have any living (check all that apply):
    - Siblings?
    - Parents?
    - Grandparents?
    - _Note: If the user checks a box, a `select` should appear and ask "How many?"- how would you store this in state?_
  - Check all educational credentials you have received:
    - High school diploma or GED equivalent
    - Associate's Degree
    - Bachelor's Degree
    - Master's Degree
    - PhD
    - Other (_text input next to this one- how would you store this in state?_)

## Synthesize Functions

Based on the lecture examples, you've probably synthesized the functionality of your handler functions into generalized versions: `handleRadioChange` and `handleCheckboxChange` should handle _most_, if not all, of the questions above.

If you did not create these generalized functions, now is your opportunity. Create **four** general functions for each of the input types we've learned so far: `handleTextChange`, `handleSelect`, `handleRadioChange`, and `handleCheckboxChange`. Refactor your JSX to take advantage of these new flexible function types.
