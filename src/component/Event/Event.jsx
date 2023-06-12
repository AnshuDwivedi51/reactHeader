import React, { useState } from 'react';

function Event() {
  const data = [
    {
      name: "Anshu",
      email: "anshu@gmail.com",
      phone: "75214 96325"
    },
    {
      name: "kamal",
      email: "kamal@gmail.com",
      phone: "85214 36521"
    },
    {
      name: "Smith",
      email: "smith@gmail.com",
      phone: "98745 12456"
    }
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  const showData = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <ul className='nav-bar'>
        {data.map((user, index) => (
          <button key={index} className='buttons' onClick={() => showData(user)}>
             {user.name}
          </button>
        ))}
      </ul>
      {selectedUser && (
        <div className="card">
          <h3>Name: {selectedUser.name}</h3>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
        </div>
      )}
    </div>
  );
}

export default Event;
