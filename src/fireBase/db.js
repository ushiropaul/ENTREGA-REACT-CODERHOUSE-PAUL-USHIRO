import { getFirestore, collection, getDocs, getDoc, doc,  addDoc } from "firebase/firestore";
import { app } from "./config";

export const db = getFirestore(app)

export const querySnapshot = await getDocs(collection(db, "products"));


querySnapshot.forEach((doc) => {

})

export const queryByIdSnapshot = getDocs



export const getProductById = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: docSnap.id,
            ...docSnap.data(),
        };
    }

};

export const registroCompras = async (compra) => {
    try {
        const docRef = await addDoc(collection(db, 'registrosCompras'), compra);
        
    } catch (error) {
        console.error("Error al agregar documento: ", error);
    }
};

