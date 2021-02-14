import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';


import './directory.styles.scss';

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: 'STATIONERIES',
          imageUrl:
            'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'stationeries',
        },
        {
          title: 'OFFICE EQUIPMENT',
          imageUrl:
            'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'office',
        },
        {
          title: 'COMPUTERS AND ACCESSORIES',
          imageUrl:
            'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'computers',
        },
        {
          title: 'PRINTERS AND ACCESSORIES',
          imageUrl:
            'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          id: 4,
          linkUrl: 'printers',
        },
        {
          title: 'NETWORKING',
          imageUrl:
            'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'networking',
        },
        {
          title: 'POS/INVENTORY SOFTWARE',
          imageUrl:
            'https://images.unsplash.com/photo-1586864030223-a918b07d357d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 6,
          linkUrl: 'pos-inventory',
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
