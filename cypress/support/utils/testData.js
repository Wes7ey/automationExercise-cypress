// Gera dados únicos por execução para evitar conflito de e-mail já cadastrado.
const buildUser = (overrides = {}) => {
  const stamp = Date.now();

  return {
    title: '1',
    name: `QA Tester ${stamp}`,
    email: `qa.tester.${stamp}@example.com`,
    password: 'Senha@12345',
    day: '10',
    month: '5',
    year: '1990',
    firstName: 'QA',
    lastName: 'Tester',
    company: 'Empresa Teste',
    address: 'Rua de Exemplo, 123',
    country: 'Canada',
    state: 'Ontario',
    city: 'Toronto',
    zipcode: '12345',
    mobile: '11999999999',
    ...overrides,
  };
};

module.exports = { buildUser };
