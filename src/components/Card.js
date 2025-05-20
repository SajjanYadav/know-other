function Card({...props}) {
    return (
    <div class="card">
      {/* Profile Image & Name */}
      <div class="name-section">
        <img
          src={props.image}
          alt={`${props.firstName} ${props.lastName}`}
          class="image"
        />
        <h2 class="name">
          {props.firstName} {props.lastName}
        </h2>
        <p class="role">
          {props.role.toUpperCase()} {`(${props.gender})`}
        </p>
      </div>

      {/* Contact Info */}
      <div class="email-section">
        <p><span id="email-hold">Email:</span> {props.email}</p>
        <p><span id="email-hold">Phone:</span> {props.phone}</p>
      </div>

      {/* Address */}
      <div class="address-section">
        <p id="email-hold">Address:</p>
        <p>
          {props.address.address}, {props.address.city}, {props.address.state}, {props.address.country}
        </p>
      </div>

      {/* Company & Education */}
      <div class="address-section">
        <p><span id="email-hold">Company:</span> {props.company.title} at {props.company.name}</p>
        <p><span id="email-hold">University:</span> {props.university}</p>
      </div>

      {/* Crypto Info */}
      <div class="address-section">
        <p class="col">Crypto:</p>
        <p><span id="email-hold">Wallet:</span> {props.crypto.wallet}</p>
        <p><span id="email-hold">Coin:</span> {props.crypto.coin} ({props.crypto.network})</p>
      </div>
    </div>
  );
}

export default Card;