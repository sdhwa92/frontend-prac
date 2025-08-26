const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

const DB_NAME = "CarsDatabase";
const DB_VERSION = 1;

const request = indexedDB.open(DB_NAME, DB_VERSION);

request.onerror = (event) => {
  console.error("An error occurred with IndexedDB");
  console.error(event);
};

request.onupgradeneeded = () => {
  const db = request.result; // CarsDatabase
  const store = db.createObjectStore("cars", { keyPath: "id" });
  store.createIndex("cars_color", ["color"], { unique: true });
  store.createIndex("color_and_make", ["color", "make"], { unique: true }); // compound index
};

request.onsuccess = () => {
  const db = request.result;
  const tx = db.transaction("cars", "readwrite");

  const store = tx.objectStore("cars");
  const colorIndex = store.index("cars_color");
  const colorMakeIndex = store.index("color_and_make");

  store.put({ id: 1, color: "Red", make: "Toyota", model: "Camry" });
  store.put({ id: 2, color: "Blue", make: "Ford", model: "Mustang" });
  store.put({ id: 3, color: "Green", make: "Chevrolet", model: "Camaro" });
  store.put({ id: 4, color: "Silver", make: "Toyota", model: "Corolla" });

  const idQuery = store.get(4);
  const colorQuery = colorIndex.getAll(["Red"]);
  const colorMakeQuery = colorMakeIndex.get(["Red", "Toyota"]);

  idQuery.onsuccess = () => {
    console.log("idQuery: ", idQuery.result);
  };

  colorQuery.onsuccess = () => {
    console.log("colorQuery: ", colorQuery.result);
  };

  colorMakeQuery.onsuccess = () => {
    console.log("colorMakeQuery: ", colorMakeQuery.result);
  };

  tx.oncomplete = () => {
    db.close();
  };
};
