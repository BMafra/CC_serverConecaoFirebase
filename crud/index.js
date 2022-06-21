const { initializeApp, applicationDefault, cert } = require('firebase/app');
const { getFirestore, collection, getDocs, setDoc, addDoc } = require('firebase/firestore/lite');
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

module.exports = {
    save
}