import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

  function StartFirebase(){
    const firebaseConfig = {
      apiKey: "AIzaSyCaiJdm4XuKhVJFSk3R0FoHzcV7C-R3aRk",
      authDomain: "activity-crud.firebaseapp.com",
      databaseURL: "https://activity-crud-default-rtdb.firebaseio.com",
      projectId: "activity-crud",
      storageBucket: "activity-crud.appspot.com",
      messagingSenderId: "1002555062716",
      appId: "1:1002555062716:web:406119cc8f961348b313b9"
    };

      // Initialized
      const app = initializeApp(firebaseConfig);

      return getDatabase(app);
}

export default StartFirebase;
