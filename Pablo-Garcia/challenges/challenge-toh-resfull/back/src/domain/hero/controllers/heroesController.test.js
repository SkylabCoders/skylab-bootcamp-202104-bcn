describe('updatedById', () => {
  test('should call res.json', async () => {
  // arrange
    const res = {
      json: jest.fn()
    };
    const req = {
      params: {
        heroId: null
      },
      body: {}
    };

    // act
    await updatedById(resq, res);

    // asssert -> // Afirmar en jest //
    expect(res.json).toHaveBeenCalled();
  });
});
test('should call res.send', async () => {
  const res = {
    json: jest.fn(), // moqueo la ejecución de una función
    send: jest.fn()
  };
  Hero.findByIdAndUpdated.mockRejectedValueOnce('error al buscar el heroes');
  expect(res.send).toHaveBeenCalled();
});
