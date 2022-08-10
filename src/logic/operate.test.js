import operate from './operate';

describe('OPERATION TESTS\n', () => {
  describe('Additional Operations', () => {
    test('addition of small numbers', () => {
      expect(operate(1, 2, '+')).toBe('3');
    });
    test('addition of large numbers', () => {
      expect(operate(100, 250, '+')).toBe('350');
    });
  });
  describe('Subtraction Operations', () => {
    test('subtraction of small numbers', () => {
      expect(operate(1, 2, '-')).toBe('-1');
    });
    test('subtraction of large numbers', () => {
      expect(operate(350, 247, '-')).toBe('103');
    });
  });
  describe('Multiplication Operations', () => {
    test('Multipplication of small numbers', () => {
      expect(operate(1, 8, 'x')).toBe('8');
    });
    test('Multiplication with zero', () => {
      expect(operate(23038474, 0, 'x')).toBe('0');
    });
  });
  describe('Division Operations', () => {
    test('division operation small numbers', () => {
      expect(operate(1, 2, '÷')).toBe('0.5');
    });
    test('division by zero', () => {
      expect(operate(100, 0, '÷')).toBe("Can't divide by 0.");
    });
  });
  describe('Modulo Operations', () => {
    test('basic modulo', () => {
      expect(operate(1, 2, '%')).toBe('1');
    });
    test('complex modulo', () => {
      expect(operate(198, 34, '%')).toBe('28');
    });
  });
});
