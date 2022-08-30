exports.createRobot = (x, y) => {
  let _x = x;
  let _y = y;
  let orientation = 'N';
  function advance() {
    switch (orientation) {
      case 'N': _y += 1;
      break;
      case 'S': _y -= 1;
      break;
      case 'W': _x -= 1;
      break;
      case 'E': _x += 1;
      break;
    };
    if (_x < 0 || _y <0 ) {
      throw new Error('invalid movement');
    };
    return `advance in the direction ${orientation} and pos x: ${_x} and y: ${_y}`;
  };
  function right() {
    if(orientation === 'N') {
      orientation = 'E';
    } else if(orientation === 'S') {
      orientation = 'W';
    } else if(orientation === 'W') {
      orientation = 'N';
    } else if(orientation === 'E') {
      orientation = 'S';
    };
    return orientation;
  };
  function left() {
    if(orientation === 'N') {
      orientation = 'W';
    } else if(orientation === 'S') {
      orientation = 'E';
    } else if(orientation === 'W') {
      orientation = 'S';
    } else if(orientation === 'E') {
      orientation = 'N';
    };
    return orientation;
  }
  function movement(instructions) {
    instructions.split('').map(element => {
      if (element === 'A') {
        return advance();
      } else if (element === 'R') {
        return right();
      } else if (element === 'L') {
        return left();
      } else {
        throw new Error('movement invalid');
      };
    });
    return `orientarion: "${orientation}" and pos x: ${_x}, y: ${_y}`;
  };
  return { advance, right, left, movement };
};