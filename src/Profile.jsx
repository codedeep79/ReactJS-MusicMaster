import React, {Component} from 'react';
import './App.css';

class Profile extends React.Component{
    render(){
        let artist = new Array();
        let country = new Array();
        let dataArtist = new Array();
        if (this.props.data !== null)
        {
            dataArtist = this.props.data;
        }
        return(
            <div>
                {
                     dataArtist.map((e,i) => {
                         return (
                             <div key={i}>
                                <div>- Tên Nghệ sĩ/Nhóm nhạc: {e.name} </div>
                                <div>- Quốc gia: {e.country_of_origin}</div>
                                <hr/>
                             </div>
                         )      
                    })
                }
            </div>
        )
    }
}

export default Profile;