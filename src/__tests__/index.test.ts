import Gender from '../index';

describe('getGender function', () => {
    test('it should return male object', () => {
        const result = Gender.getGender('male');
        expect(result).toEqual({ label: 'Male', value: 'male' });
    });

    test('it should return female object', () => {
        const result = Gender.getGender('female');
        expect(result).toEqual({ label: 'Female', value: 'female' });
    });

    test('it should return funny message for unknown gender', () => {
        const result = Gender.getGender('alien');
        expect(typeof result).toBe('string');
    });
});

describe('getGenders function', () => {
    test('it should return array of gender strings', () => {
        const result = Gender.getGenders('string');
        expect(result).toEqual(['male', 'female']);
    });

    test('it should return array of gender objects', () => {
        const result = Gender.getGenders('object');
        expect(result).toEqual([
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
        ]);
    });
});
