exports.createRobot = (x, y) => {
    let _x = x;
    let _y = y;
    let orientation = 'N';

    function advance() {
        switch (orientation) {
            case 'N':
                _y += 1;
                break;
            case 'S':
                _y -= 1;
                break;
            case 'W':
                _x -= 1;
                break;
            case 'E':
                _x += 1;
                break;
        };
        if (_x < 0 || _y < 0 || _x > 10 || _y > 10) {
            return `invalid movement`;
        };
        return `advance in the direction ${orientation} and pos x: ${_x} and y: ${_y}`;
    };

    function right() {
        if (orientation === 'N') {
            orientation = 'E';
        } else if (orientation === 'S') {
            orientation = 'W';
        } else if (orientation === 'W') {
            orientation = 'N';
        } else if (orientation === 'E') {
            orientation = 'S';
        };
        return orientation;
    };

    function left() {
        if (orientation === 'N') {
            orientation = 'W';
        } else if (orientation === 'S') {
            orientation = 'E';
        } else if (orientation === 'W') {
            orientation = 'S';
        } else if (orientation === 'E') {
            orientation = 'N';
        };
        return orientation;
    }

    function movement(instructions) {
        const inst = instructions.split('')
        let array = []
        for (let i = 0; i < inst.length; i++) {
            let element = inst[i]
            if (element === 'A') {
                array.push(advance());
            } else if (element === 'R') {
                array.push(right());
            } else if (element === 'L') {
                array.push(left());
            } else {
                return `invalid movement`;
            };
        }
        return `orientarion: "${array[array.length-1]}" and pos x: ${_x}, y: ${_y}`;
    };
    return { advance, right, left, movement };
}