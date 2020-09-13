import React from 'react';
function About(){
    return (
        <div>
        <div style={{padding: '100px'}}>
            <div style={{border:'1px solid black',backgroundColor:'white'}}>
                <h1 style={{textAlign: 'center'}}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
                <ol>
                    <li><strong style={{width: '100px'}}>Nama:</strong>Setyawan Eko Nugroho</li> 
                    <li><strong style={{width: '100px'}}>Email:</strong>Seko6661@gmail.com</li> 
                    <li><strong style={{width: '100px'}}>Sistem Operasi yang digunakan:</strong> Windows</li>
                    <li><strong style={{width: '100px'}}>Akun Gitlab:</strong>https://github.com/setyawanek</li> 
                    <li><strong style={{width: '100px'}}>Akun Telegram:</strong>Setyawan eko</li> 
                </ol>
            </div>
        </div>
            <footer>
                <h5>copyright © 2020 by Sanbercode</h5>
            </footer>
        </div>
    );
}
export default About;