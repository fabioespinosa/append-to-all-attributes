import test from 'ava';
import appendToAllAttributes from '.';

test('append _triplet to object attributes', t => {
    t.deepEqual(
        appendToAllAttributes(
            {
                hello: '34',
                other: {
                    notApplyToInnerAttributes: '23'
                },
                cms: [23]
            },
            '_triplet'
        ),
        {
            hello_triplet: '34',
            other_triplet: {
                notApplyToInnerAttributes: '23'
            },
            cms_triplet: [23]
        }
    );
});
