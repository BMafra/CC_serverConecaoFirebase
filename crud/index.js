const { initializeApp, applicationDefault, cert } = require('firebase/app');
const {
    getFirestore,
    collection,
    getDocs,
    setDoc,
    addDoc,
    query,
    where,
    getDoc,
    deleteDoc  }
    = require('firebase/firestore/lite');
//conecta bd

const firebaseConfig = {
    apiKey: "AIzaSyDJd11ecSAz79RrDuYsvWraCmDfj_p6hHQ",
    authDomain: "conecao-banco-dados.firebaseapp.com",
    projectId: "conecao-banco-dados",
    storageBucket: "conecao-banco-dados.appspot.com",
    messagingSenderId: "682371083729",
    appId: "1:682371083729:web:ac6f936b01e28e758244f0",
    measurementId: "G-7G60B2PFD9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

async function save(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await setDoc(doc(db, nomeTabela, id), dado);
        const savedData = {
            ...dado, //savedData = dado / duplicando/ tira referencia de memoria
            id: id
        }
        return savedData
    } else {
        const referenceEntity = await addDoc(collection(db, nomeTabela), dado);
        const savedData = {
            ...dado, //savedData = dado / duplicando
            id: referenceEntity.id
        }
        return savedData;
    }
}

async function get(nomeTabela) {
    const tableRef = collection(db, nomeTabela);

    const q = query(tableRef,);

    const lista = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);
        console.log(doc.id, " => ", doc.data());
    });
    return lista;
}

async function getById(nomeTabela, id) {
    const docRef = doc(db, nomeTabela, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {

        return new Error("not found")
    }
}

async function remove(nomeTabela, id){
    const dado = await deleteDoc(doc(db, nomeTabela, id))
    return{
        massage: `${id} deleted`
    }
}

module.exports = {
    save,
    get,
    getById,
    remove
}