export async function asyncArrayForEach(array: Array<any>, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export async function asyncSetForEach(set: Set<any>, callback) {
  return await asyncArrayForEach([...set], callback);
}
