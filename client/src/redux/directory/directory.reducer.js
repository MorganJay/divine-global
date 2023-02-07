const INITIAL_STATE = {
  sections: [
    {
      title: 'HATS',
      imageUrl: 'https://://i.ibb.co/cvpntL1/hats.png',
      // imageUrl:
      //   'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'JACKETS',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      // imageUrl:
      //   'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'SNEAKERS',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      // imageUrl:
      //   'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'WOMENS',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      // imageUrl:
      //   'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      id: 4,
      size: 'large',
      linkUrl: 'shop/womens',
    },
    {
      title: 'MENS',
      // imageUrl:
      //   'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
    // {
    //   title: 'POS/INVENTORY SOFTWARE',
    //   imageUrl:
    //     'https://images.unsplash.com/photo-1586864030223-a918b07d357d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80://i.ibb.co/R70vBrQ/men.png',
    //   size: 'large',
    //   id: 6,
    //   linkUrl: 'shop/pos'
    // }
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
