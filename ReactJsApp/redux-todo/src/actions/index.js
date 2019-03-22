export const addHomePhone = number => ({
  type: 'home',
  number
});

export const addOfcPhone = number => ({
  type: 'ofc',
  number
});

export const addHomeAddress = address => ({
  type: 'home',
  address
});

export const addOfcAddress = address => ({
  type: 'ofc',
  address
});
