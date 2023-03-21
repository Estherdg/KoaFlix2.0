import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from 'firebase/firestore/lite';
import 'dotenv/config'

const firebaseConfig = {
  apiKey: process.env['API_KEY'] || 'API_KEY_VACIA',
  authDomain: process.env['AUTH_DOMAIN'] || 'AUTH_DOMAIN_VACIO',
  projectId: process.env['PROJECT_ID'] || 'PROJECT_ID_VACIO'
};
const db = getFirestore(initializeApp(firebaseConfig));

const getMovies = await getDocs(collection(db, "movies"));
getMovies.forEach((doc) => {
  console.log(`${doc.id}`);
  console.table(doc.data());
});
