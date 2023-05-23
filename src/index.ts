interface GenderOption {
    label: string;
    value: string;
}

const genderList: GenderOption[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
];


const funnyMessages: string[] = [
    "Hmm, that's a new one! We don't have that gender in our list!",
    "Wow! That gender is out of this world!",
    "Haven't heard of that gender. Is it from Mars?",
    "That's some exclusive gender you got there!",
    "Are you inventing new genders? That's creative!",
    "I guess you're on a whole new level of gender understanding!",
    "Sorry, your gender is still updating in our database!",
    "Looks like you've discovered a new gender. Congrats!",
    "Our system is puzzled by your gender. It's scratching its circuits!",
    "Your gender crashed our system! Just kidding.",
    "Whoops! We only know 'male' and 'female'. Anything else is out of our league!",
    "Hmm, we're a bit old school here. We only recognize 'male' and 'female'.",
    "Hold on! 'Male' or 'female' was what we learned at school. Time for a refresher course?",
    "'Male' and 'female' are the two genders we were introduced to. Guess we missed the memo!",
    "Awkward! We only got 'male' and 'female' in our vocabulary. Should've paid more attention at school.",
    "Excuse our confusion. We were only trained for 'male' and 'female'.",
    "Your gender crashed our binary system! We're more familiar with 'male' and 'female'.",
    "Oops, we only got two options: 'male' and 'female'. Anything else causes a system hiccup!",
    "That's a new one! 'Male' and 'female' were the two options we're acquainted with.",
    "Well, this is embarrassing. We were only prepped for 'male' and 'female'."
];

const getRandomFunnyMessage = (): string => {
    return funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
};

const getGenders = (type?: 'string' | 'object'): string[] | GenderOption[] => {
    if (type === 'object') {
        return genderList;
    } else {
        return genderList.map(gender => gender.value);
    }
};

const getGender = (labelOrValue: string): GenderOption | string => {
    const foundGender = genderList.find(
        gender => gender.label === labelOrValue || gender.value === labelOrValue
    );
    return foundGender || getRandomFunnyMessage();
};

export default {
    getGenders,
    getGender,
};
