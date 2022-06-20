const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
//conecta bd
initializeApp({
    credential: applicationDefault();
});

const db = getFirestore();

const docRef = db.collection('users').doc('alovelace');

await docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
}); 

function save(nomeTabela, id, dado){
    if(id){

    } else {
        db.collection(nomeTabela).add(dado);
    }    
}