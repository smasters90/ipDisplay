import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, setDoc, updateDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCNSb5GQ9RQZffECTnYBAsw1ZQ4tnslsEA",
  authDomain: "rytel3-0-91ab9.firebaseapp.com",
  projectId: "rytel3-0-91ab9",
  storageBucket: "rytel3-0-91ab9.appspot.com",
  messagingSenderId: "1080621728735",
  appId: "1:1080621728735:web:0ab9ccbc167fea054f3a6a",
  measurementId: "G-F2M9MWJJK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);



export async function exportProductToFiresotre(){

  let ip = [];
  let primer=172;
  let segundo=20;
  let tercer=14;
  let cuarto=0;

  const miCollection = collection(firestore, "Panel14");

    do{
      cuarto++;
      ip.push({primer:primer, segundo:segundo, tercer:tercer, cuarto:cuarto, usado:false, nodo: "Panel14"});
    }while(cuarto<255)

    for(let item of ip){
      const newItem =  await addDoc(miCollection, item);
  }
}

export async function queryIp(primer, segundo, tercer, cuarto){
  let nodo;
    if (segundo == 168){
      if(tercer == 54){
        nodo = "Las Heras"
      }
      if(tercer == 3){
        nodo = "Decavial"
      }
      if(tercer == 60){
        nodo = "La Jirafa"
      }
      if(tercer == 48){
        nodo = "PDM"
      }
      if(tercer == 54){
        nodo = "Las Heras"
      }
      if(tercer == 44){
        nodo = "Vistalba"
      }
      if(tercer == 58){
        nodo = "R60"
      }
      if(tercer == 46){
        nodo = "Multirepuesto"
      }
      if(tercer == 47){
        nodo = "Soeva"
      }
      if(tercer == 51){
        nodo = "Batalla Del Pilar"
      }
      if(tercer == 50){
        nodo = "Ejercito"
      }
      if(tercer == 53){
        nodo = "Jesus Nazareno"
      }
      if(tercer == 52){
        nodo = "Maipu"
      }
      if(tercer == 56 || tercer == 66){
        nodo = "Potrerillos"
      }
      if(tercer == 57){
        nodo = "Tunuyan"
      }
      if(tercer == 55 || tercer == 65){
        nodo = "Carrizal"
      }
    }
    
    if (segundo == 10){
      if(tercer==1 || tercer==0){
        nodo = "Corralitos-CBombal"
      }
    }

    if (segundo == 20){
      if(tercer == 2){
        nodo = "Panel2"
      }
      if(tercer == 3){
        nodo = "Panel3"
      }
      if(tercer == 4){
        nodo = "Panel4"
      }
      if(tercer == 5){
        nodo = "Panel5"
      }
      if(tercer == 6){
        nodo = "Panel6"
      }
      if(tercer == 8){
        nodo = "Panel8"
      }
      if(tercer == 10){
        nodo = "Panel10"
      }
      if(tercer == 11){
        nodo = "Panel11"
      }
      if(tercer == 12){
        nodo = "Panel12"
      }
      if(tercer == 13){
        nodo = "Panel13"
      }
      if(tercer == 14){
        nodo = "Panel14"
      }
    }      

    
    const miCollection = collection(firestore, nodo);
    const queryIp = query(miCollection, where("primer", "==", primer), where("segundo", "==", segundo), where("tercer", "==", tercer), where("cuarto", "==", cuarto));
    
    let snapshotDb = await getDocs(queryIp);


    let dataDocs = snapshotDb.docs.map((document)=> {
      let docFinal = {...document.data(), id: document.id};
      return docFinal;
    }) 
 
    return dataDocs;
}

export async function checkearIp(primer, segundo, tercer, cuarto){
  
  let dataDocs = await queryIp(primer, segundo, tercer, cuarto);
  
  let retorno;

  if(dataDocs[0].usado==false){
    alert("LA IP ESTA DISPONIBLE")
    retorno=false;
  }else if (dataDocs[0].usado==true){
    alert("la ip esta usada");
    retorno= true;
  }else if (dataDocs[0].length==0){
    alert("la ip NO existe");
    retorno=0;
  } 
  return retorno;
}


export async function altaDeIp(primer, segundo, tercer, cuarto){
 
  let retorno = await checkearIp(primer, segundo, tercer, cuarto);

  if(retorno==false){

    let dataDocs = await queryIp(primer, segundo, tercer, cuarto);
    const referencia = doc(firestore, dataDocs[0].nodo, dataDocs[0].id);
    
    await updateDoc(referencia, {
      usado: true
    });

    alert("LA IP PASO A ESTAR NO DISPONIBLE");
  }
}


export async function bajaDeIp(primer, segundo, tercer, cuarto){

  let retorno = await checkearIp(primer, segundo, tercer, cuarto);

  if(retorno==true){

    let dataDocs = await queryIp(primer, segundo, tercer, cuarto);
    const referencia = doc(firestore, dataDocs[0].nodo, dataDocs[0].id);
    
    await updateDoc(referencia, {
      usado: false
    });

    alert("LA IP PASO A ESTAR DISPONIBLE")
  }
}

export async function consultaDeIp(nodo){
    const miCollection = collection(firestore, nodo);
    const queryIp = query(miCollection, where("nodo", "==", nodo), where("usado", "==", false));
       
    let snapshotDb = await getDocs(queryIp);

  
    let dataDocs = snapshotDb.docs.map((document)=> {
      let docFinal = {...document.data(), id: document.id};
      return docFinal;
    }) 
    
    return dataDocs[0]; 
}