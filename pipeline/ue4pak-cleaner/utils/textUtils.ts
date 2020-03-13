export const stripNullTerminator = (inputString: string): string => {
  return inputString.replace(/\0.*$/g, '');
};

export const cleanString = (inputString: string): string => {
  if (inputString === undefined) {
    return null;
  }

  return inputString.replace(/\0.*$/g, '').replace(/\r\n/g, '\n');
};
