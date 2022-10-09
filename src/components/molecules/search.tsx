export const Search = () => {
  return (
    <form className="w-[50%]">
      <div className="w-full focus-within:shadow-gray-50">
        <input
          list="search"
          type="text"
          className="w-full rounded p-2"
          placeholder="Search..."
        />
        <datalist id="search">
          <option value="Чебурашка"></option>
          <option value="Крокодил Гена"></option>
          <option value="Шапокляк"></option>
        </datalist>
      </div>
    </form>
  );
};
