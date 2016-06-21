'use strict';

module.exports = (io, app) => {
  let allrooms = app.locals.chatrooms;


  io.of('/roomslist').on('connection', socket => {
    socket.on('getChatrooms', () => {
      socket.emit('chatRoomsList', JSON.stringify(allrooms));
    })

    socket.on('createNewRoom', newRoomInput => {
      console.log(newRoomInput);
    })
  })
};