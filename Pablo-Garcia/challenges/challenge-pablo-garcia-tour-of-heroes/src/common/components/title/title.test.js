const createTitle = (title, type) => {
  if(!title || !type) throw new Error('You must pass the title and element type');
  const head = document.createElement(`${type}`);
  head.innerText = title;
  return head;
}

const summatory = (numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0)
}

const adultCheck = (age, fn) => {
  if(age >= 18) fn();
}

describe('Title', () => {
  it('should return an element of the specified type and title', () => {
    // Arrange
    const mock = { title: 'Hey', tag: 'h1' };
    const title = createTitle(mock.title, mock.tag);

    // Assert
    expect(title.innerText).toBe(mock.title);
    expect(title.tagName).toBe(mock.tag.toUpperCase());
  });

  it('should throw an error if there are some missing params', () => {
    // Arrange
    const mock = { title: 'Hey' };
    const badCreateTitle = () => createTitle(mock.title);

    // Assert
    expect(badCreateTitle).toThrow();
  });

  it('should sum the numbers in the array', () => {
    // Arrange
    const mock = [1, 2, 5];
    const expectedResult = 8;
    const result = summatory(mock);

    // Assert
    expect(result).toBe(expectedResult)
  });

  it('should invoke the function if the user is an adult', () => {
    // Arrange
    const callback = jest.fn();
    adultCheck(20, callback);

    // Assert
    expect(callback).toHaveBeenCalled();
  });

  it('should invoke the function if the user is an adult', () => {
    // Arrange
    const callback = jest.fn();
    adultCheck(15, callback);

    // Assert
    expect(callback).not.toHaveBeenCalled();
  });
});
