// src/context/AppContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { StorageService } from '../services/storage';
import { INITIAL_DATA, CONFIG } from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(() => StorageService.get('fidy_user', null));
  const [myActivities, setMyActivities] = useState(() => StorageService.get('fidy_my_activities', INITIAL_DATA.activities));
  const [groups, setGroups] = useState(() => StorageService.get('fidy_groups', INITIAL_DATA.groups));
  const [messages, setMessages] = useState(() => StorageService.get('fidy_chat', INITIAL_DATA.chat));
  const [notifications, setNotifications] = useState([]);

  useEffect(() => { if (user) StorageService.set('fidy_user', user); }, [user]);
  useEffect(() => StorageService.set('fidy_my_activities', myActivities), [myActivities]);
  useEffect(() => StorageService.set('fidy_groups', groups), [groups]);
  useEffect(() => StorageService.set('fidy_chat', messages), [messages]);

  const login = (u, p) => {
    if (u === 'fidyboost' && p === '1234') {
      setUser(INITIAL_DATA.user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fidy_user');
  };

  const addXP = (amount) => {
    setUser(prev => {
      let newXP = (prev.xp || 0) + amount;
      let currentLevelNum = parseInt(prev.level.split(' ')[1]);
      if (newXP >= CONFIG.LEVEL_CAP) {
        newXP = newXP - CONFIG.LEVEL_CAP;
        currentLevelNum += 1;
        setNotifications(n => [{id: Date.now(), text: `¡Nivel Up! Ahora eres Nivel ${currentLevelNum} 🎉`, read: false, time: 'Ahora'}, ...n]);
      }
      return { ...prev, xp: newXP, level: `Nivel ${currentLevelNum}` };
    });
  };

  const toggleActivity = (activity) => {
    const exists = myActivities.find(a => a.id === activity.id);
    if (exists) {
      setMyActivities(prev => prev.filter(a => a.id !== activity.id));
    } else {
      const safeActivity = { ...activity, date: activity.date || "FLEXIBLE, 00:00", type: 'joined' };
      setMyActivities(prev => [...prev, safeActivity]);
      addXP(15);
      setNotifications(prev => [{ id: Date.now(), text: `Te has unido a: ${activity.title}`, time: "Ahora", read: false }, ...prev]);
    }
  };

  const createGroup = (groupData) => {
    const newGroup = { ...groupData, id: Date.now() };
    setGroups(prev => [...prev, newGroup]);
    addXP(40);
    setNotifications(prev => [{ id: Date.now(), text: `Has creado el grupo "${groupData.nombre}"`, time: "Ahora", read: false }, ...prev]);
  };

  const deleteGroup = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este grupo?")) {
      setGroups(prev => prev.filter(g => g.id !== id));
    }
  };

  const sendMessage = (text) => {
    const newMsg = { id: Date.now(), from: 'user', text };
    setMessages(prev => [...prev, newMsg]);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now()+1, from: 'bot', text: `Entendido. He registrado "${text}" en tu bitácora. 📝` }]);
    }, 800);
  };

  return (
    <AppContext.Provider value={{
      user, login, logout, myActivities, toggleActivity, groups, createGroup, deleteGroup,
      messages, sendMessage, notifications, allExplore: INITIAL_DATA.explore
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);