const Manager = require("./lib/Manager");


describe('Manager', () => {
    it("should display data from entries", () => {
        // Arrange
      const text = 'Korbyn';

      // Act
      const obj = new Manager(managerName);

      // Assert
      expect(obj.text).toEqual(text);
    })
       
});
