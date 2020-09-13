import React, { useContext, useEffect, useState } from 'react';

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export default function SocketProvider({ id, children }) {
  return (
    <div>
      
    </div>
  )
}
