import React from 'react'

export default class Contact extends React.Component {
  render() {
    return (
      <div>

        <div style={{fontSize: "18px"}}>Contacts in the USA</div>

        <div style={{padding: "10px"}}>
          <div style={{fontWeight: "600"}}>Rotalia Foundation</div>
          <div>Address: 8 Lindley Road, Mercer Island, Washington 98040, USA</div>
          <div>Phone: 206 232-9388</div>
          <div>Email: kaskinc@aol.com </div>
          <div>Home page: www.rotaliafoundation.com</div>
        </div>

        <div style={{fontSize: "18px", padding: "15px 0 0 0"}}>Contacts in Estonia</div>

        <div style={{display: "flex"}}>
          <div style={{padding: "10px", width: "50%"}}>
            <div style={{fontWeight: "600"}}>Sirje Mark</div> <div>Executive Administrator, Tartu University kantselei</div>
            <div>Post: Űlikooli 18-120, 50090 Taru, Estonia</div>
            <div>Telephone 372 737 5609, Mobile 372 507 3729</div>
            <div>Email: sirje.mark@gmail.com</div>
          </div>

          <div style={{padding: "10px", width: "50%"}}>
            <div style={{fontWeight: "600"}}>Rein Grabbi</div>
            <div>Member of the Board of Directors and Chairman of the Scholarship Selection Committee</div>
            <div>Post: Pirita tee 28a-39, 10127 Tallinn, Estonia</div>
            <div>Telephone 372 6444, Mobile 372 517 7210</div>
            <div>Email: reingrabbi@gmail.com</div>
          </div>
        </div>
      </div>
    )
  }
}
