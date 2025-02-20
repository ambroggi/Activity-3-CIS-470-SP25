
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  });
  
describe('classifyTriangle: Boundary tests', () => {
  test('should classify an Equilateral triangle', () => {
    expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
  });

  test('First bound low inside', () => {
    expect(classifyTriangle(1.00001, 10, 10)).toBe('Isosceles');
  });

  test('First bound low on the line', () => {
    expect(classifyTriangle(1, 10, 10)).toBe('Isosceles');
  });

  test('First bound low outside', () => {
    expect(classifyTriangle(0.99999, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });


  test('Second bound low inside', () => {
    expect(classifyTriangle(10, 1.00001, 10)).toBe('Isosceles');
  });

  test('Second bound low on the line', () => {
    expect(classifyTriangle(10, 1, 10)).toBe('Isosceles');
  });

  test('Second bound low outside', () => {
    expect(classifyTriangle(10, 0.99999, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });


  test('Third bound low inside', () => {
    expect(classifyTriangle(10, 10, 1.00001)).toBe('Isosceles');
  });

  test('Third bound low on the line', () => {
    expect(classifyTriangle(10, 10, 1)).toBe('Isosceles');
  });

  test('Third bound low outside', () => {
    expect(classifyTriangle(10, 10, 0.99999)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });


  test('First bound high inside', () => {
    expect(classifyTriangle(199.99999, 10, 10)).toBe('Not a Triangle');
  });

  test('First bound high on the line', () => {
    expect(classifyTriangle(200, 10, 10)).toBe('Not a Triangle');
  });

  test('First bound high outside', () => {
    expect(classifyTriangle(200.00001, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });


  test('Second bound high inside', () => {
    expect(classifyTriangle(10, 199.99999, 10)).toBe('Not a Triangle');
  });

  test('Second bound high on the line', () => {
    expect(classifyTriangle(10, 200, 10)).toBe('Not a Triangle');
  });

  test('Second bound high outside', () => {
    expect(classifyTriangle(10, 200.00001, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });


  test('Third bound high inside', () => {
    expect(classifyTriangle(10, 10, 199.99999)).toBe('Not a Triangle');
  });

  test('Third bound high on the line', () => {
    expect(classifyTriangle(10, 10, 200)).toBe('Not a Triangle');
  });

  test('Third bound high outside', () => {
    expect(classifyTriangle(10, 10, 200.00001)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });
});


describe('classifyTriangle: Equivalence classes', () => {
  test('should classify an Equilateral triangle', () => {
    expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
  });

  test('should classify Not Equilateral triangle', () => {
    expect(classifyTriangle(10, 10, 9)).not.toBe('Equilateral');
  });

  test('should classify Not Equilateral triangle', () => {
    expect(classifyTriangle(10, 11, 10)).not.toBe('Equilateral');
  });

  test('should classify an Isosceles triangle', () => {
    expect(classifyTriangle(5, 10, 10)).toBe('Isosceles');
  });

  test('should classify Not Isosceles triangle', () => {
    expect(classifyTriangle(10, 10, 10)).not.toBe('Isosceles');
  });

  test('should classify Not Isosceles triangle', () => {
    expect(classifyTriangle(5, 10, 7)).not.toBe('Isosceles');
  });


  test('should classify an Scalene triangle', () => {
    expect(classifyTriangle(3, 5, 7)).toBe('Scalene');
  });

  test('should classify not Scalene triangle', () => {
    expect(classifyTriangle(3, 5, 13)).not.toBe('Scalene');
  });

  test('should classify not Scalene triangle', () => {
    expect(classifyTriangle(5, 5, 7)).not.toBe('Scalene');
  });

  test('should classify an "Not a Triangle"', () => {
    expect(classifyTriangle(2, 3, 7)).toBe('Not a Triangle');
  });

  test('should classify not "Not a Triangle"', () => {
    expect(classifyTriangle(3, 5, 7)).not.toBe('Not a Triangle');
  });

  test('should classify not "Not a Triangle"', () => {
    expect(classifyTriangle(0, 1, 2)).not.toBe('Not a Triangle');
  });
});
