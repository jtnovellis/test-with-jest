const { createRobot } = require('./robot');

describe('should to change position', () => {
  it('should to advance', () => {
    const objCreateRobot = createRobot(3, 5);
    expect(objCreateRobot.advance()).toMatch(/advance in the direction N and pos x: 3 and y: 6/);
  });
  it('should to turn right', () => {
    const objCreateRobot = createRobot(0, 1);
    expect(objCreateRobot.right()).toMatch(/E/);
  });
  it('should to turn left', () => {
    const objCreateRobot = createRobot(3, 5);
    expect(objCreateRobot.left()).toMatch(/W/);
  });
  it('should to follow a instuctions', () => {
    const objCreateRobot = createRobot(7, 3);
    expect(objCreateRobot.movement('RAALAL')).toMatch(/orientarion: "W" and pos x: 9, y: 4/);
  });
});