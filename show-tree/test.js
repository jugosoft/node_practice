const {showTree} = require('./show-tree');

const testData = [{
    "name": '1',
    "items": [{
        "name": 2,
        "items": [
            { "name": 3 },
            { "name": 4 }
        ]
    }, {
        "name": 5,
        "items": [
            { "name": 6 }
        ]
    }
    ]
}];

showTree(testData);