const LocalStorage = (() => {

  const saveName = (name) => { localStorage.setItem('name', JSON.stringify(name)); };

  const readName = () => {
    const name = JSON.parse(localStorage.getItem('name'));

    return name;
  };

  return {
    saveName, readName,
  };
})();

export default LocalStorage;
