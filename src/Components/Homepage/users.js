import React, { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs, addDoc  } from '@firebase/firestore';

const Usrs = () => {
  const [newName, setNewName] = useState('');
  const [newPw, setNewPw] = useState('');
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, password: newPw, age: newAge});
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [])
  
  return (
    <div>
      <div className="grid ">
        <input className="mb-4 px-6 py-3 border border-gray-200 bg-white max-w-lg max-h-min border-opacity-75 rounded-lg shadow-lg w-full space-x-6 flex items-center" 
          placeholder="Nama" onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
        <input className="mb-4 px-6 py-3 border border-gray-200 bg-white max-w-lg max-h-min border-opacity-75 rounded-lg shadow-lg w-full space-x-6 flex items-center" 
          type='password' 
          placeholder="Password"
          onChange={(event) => {
            setNewPw(event.target.value);
          }}
        />
        <input className="mb-4 px-6 py-3 border border-gray-200 bg-white max-w-lg max-h-min border-opacity-75 rounded-lg shadow-lg w-full space-x-6 flex items-center" 
          type='number' 
          placeholder="Umur" 
          onChange={(event) => {
            setNewAge(Number(event.target.value));
          }}
        />

        <button className="rounded-full bg-gradient-to-r from-birdong via-birmid to-birmud h-12 w-48 text-xl font-bold text-white font-nunito"
        onClick={createUser}> 
          Create Users
          </button>
      </div>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1 className="text-xl font-bold">Name: {user.name}</h1>
            <h1 className="text-xl font-bold">Age: {user.age}</h1>
            <h1 className="text-xl font-bold">Pw: {user.password}</h1>
            <h1 className='h-4'></h1>
            </div>
        );
      })}
    </div>
  )
}

export default Usrs;