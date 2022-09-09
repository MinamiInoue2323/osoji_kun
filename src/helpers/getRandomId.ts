export const getRandomId = () => {
  let ret = "";
  const arr = new Uint8Array(16);

  if (window.crypto) {
    window.crypto.getRandomValues(arr);
  }

  for (let i = 0; i < arr.length; i += 1) {
    ret += arr[i].toString(16);
  }

  return ret.toUpperCase();
};
