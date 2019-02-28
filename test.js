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

test('append _triplet to array', t => {
    t.deepEqual(
        appendToAllAttributes(
            [
                {
                    cms: {
                        status: 'GOOD',
                        comment: '',
                        cause: ''
                    },
                    csc: {
                        status: 'BAD',
                        comment: '',
                        cause: ''
                    }
                }
            ],
            '_triplet'
        ),
        [
            {
                cms_triplet: {
                    status: 'GOOD',
                    comment: '',
                    cause: ''
                },
                csc_triplet: {
                    status: 'BAD',
                    comment: '',
                    cause: ''
                }
            }
        ]
    );
});
